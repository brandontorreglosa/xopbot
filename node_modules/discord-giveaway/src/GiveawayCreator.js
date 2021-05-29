const mongoose = require('mongoose');
const Discord = require('discord.js');
const Giveaway = require('./Giveaway');
const moment = require('moment');
const { schedule, getWinner, endGiveaway } = require('./functions');
const GiveawayModel = require('../models/GiveawayModel');
const scheduler = require('node-schedule');
const { EventEmitter } = require('events');

class GiveawayCreator extends EventEmitter {
    /**
     * 
     * @param {Discord.Client} client - A discord.js client.
     * @param {string} url - A MongoDB connection string.
     */

    constructor(client, url = '', emoji = '🎉', color = 0x7289da) {
        super();

        if (!client) throw new Error("A client wasn't provided.");
        if (!url) throw new Error("A connection string wasn't provided.");

        this.client = client;
        this.mongoUrl = url;
        this.emoji = emoji;
        this.color = color;

        mongoose.connect(this.mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        this.client.on('ready', async () => {
            const now = new Date();

            const giveaways = await GiveawayModel.find({ endsOn: { $gt: now }, hasEnded: 'False' });

            await schedule(this, giveaways);
        });
    }

    /**
     * 
     * @param {GiveawayOptions} options - Options for the giveaway.
     */

    async startGiveaway(options) {
        if (!options.duration) throw new Error("You didn't provide a duration.");
        if (!options.channelId) throw new Error("You didn't provide a channel ID.");
        if (!options.guildId) throw new Error("You didn't provide a guild ID.");
        if (!options.prize) throw new Error("You didn't provide a prize.");
        if (!options.winners || isNaN(options.winners)) throw new Error("You didn't provide an amount of winners OR winners is not a number.");
        if (!options.hostedBy) throw new Error("Please provide a user ID for the person who hosted the giveaway.");

        const guild = this.client.guilds.cache.get(options.guildId);
        const channel = guild.channels.cache.get(options.channelId);
        
        const giveawayEmbed = new Discord.MessageEmbed()
        .setAuthor(options.prize)
        .setColor(this.color)
        .setDescription(`🎖️ Winners: ${options.winners}
        🥳 Hosted By: ${this.client.users.cache.get(options.hostedBy).toString()}`)
        .setFooter(`Ends `)
        .setTimestamp(new Date(Date.now() + options.duration));

        const msg = await channel.send(giveawayEmbed);

        await msg.react(this.emoji);
        
        const newGiveaway = new Giveaway({
            prize: options.prize,
            duration: options.duration,
            channelId: options.channelId,
            guildId: options.guildId,
            endsOn: new Date(Date.now() + options.duration),
            startsOn: new Date(),
            messageId: msg.id,
            winners: options.winners,
            hostedBy: options.hostedBy
        });

        msg.channel.send('Created the giveaway. 🎉');
        await schedule(this, [newGiveaway]);
        this.emit('giveawayStart', newGiveaway);
        return newGiveaway;
    }

    /**
     * 
     * @param {string} messageId - A discord message ID.
     */

    async endGiveaway(messageId) {
        let data = await GiveawayModel.findOne({ messageId: messageId });

        if (!data) return false;

        if (data.hasEnded === 'True') return false;

        const job = scheduler.scheduledJobs[`${messageId}`];

        if (!job) return false;

        job.cancel();

        const channel = this.client.channels.cache.get(data.channelId);
        if (channel) {
            const message = await channel.messages.fetch(messageId);

            if (message) {
                const { embeds, reactions } = message;
                const reaction = reactions.cache.get(this.emoji);
                const users = await reaction.users.fetch();
                const entries = users.filter(user => !user.bot).array();

                if (embeds.length === 1) {
                    const embed = embeds[0];
                    const winner = getWinner(entries, data.winners);
                    let finalWinners;
                    if (!winner) {
                        finalWinners = 'Nobody Reacted';
                    }
                    else {
                        finalWinners = winner.map(user => user.toString()).join(', ');
                    }
                    embed.setDescription(`🎖️ Winner(s): ${finalWinners}`);
                    embed.setFooter(this.client.user.username, this.client.user.displayAvatarURL({ format: 'png', size: 512 }));
                    embed.setTimestamp();
                    await message.edit(embed);
                    if (!winner) {
                        message.channel.send(`Nobody reacted to the **${data.prize}** giveaway. **ID**: \`${messageId}\`\n${message.url}`);
                    }
                    else {
                        message.channel.send(`Congratulations ${finalWinners}, you won the **${data.prize}**!\n**ID**: \`${messageId}\`\n${message.url}`);
                    }
                    const ended = await endGiveaway(messageId);
                    this.emit('giveawayEnd', ended);
                }
            }
        }
        return data;
    }

    /**
     * 
     * @param {string} messageId - A discord message ID.
     */

    async fetchGiveaway(messageId) {
        const giveaway = await GiveawayModel.findOne({ messageId: messageId });

        if (!giveaway) return false;

        return giveaway;
    }

    /**
     * 
     * @param {string} messageId - A discord message ID.
     */

    async rerollGiveaway(messageId) {
        const giveaway = await GiveawayModel.findOne({ messageId: messageId });

        if (!giveaway) return false;
        if (giveaway.hasEnded === 'False') return false;

        const channel = this.client.channels.cache.get(giveaway.channelId);

        if (channel) {
            const message = await channel.messages.fetch(messageId);

            if (message) {
                const { embeds, reactions } = message;

                const reaction = reactions.cache.get(this.emoji);
                const users = await reaction.users.fetch();
                const entries = users.filter(user => !user.bot).array();

                const winner = getWinner(entries, giveaway.winners);
                let finalWinners;
                if (!winner) {
                    finalWinners = 'Nobody Reacted';
                    message.channel.send(`Nobody reacted to the **${giveaway.prize}** giveaway. **ID**: \`${messageId}\`\n${message.url}`);
                }
                else {
                    finalWinners = winner.map(user => user.toString()).join(', ');
                    message.channel.send(`Congratulations ${finalWinners}, you won the **${giveaway.prize}**!\n**ID**: \`${messageId}\`\n${message.url}`);
                }

                if (embeds.length === 1) {
                    const embed = embeds[0];

                    embed.setDescription(`🎖️ Winner(s): ${finalWinners}`);

                    await message.edit(embed);
                }
            }
        }
        this.emit('giveawayReroll', giveaway);
        return giveaway;
    }

    /**
     * 
     * @param {string} guildId - A discord guild ID.
     */

    async listGiveaways(guildId) {
        if (!guildId) throw new Error("Please provide a guild ID.");

        const Giveaways = await GiveawayModel.find({ guildId: guildId, hasEnded: 'False' });

        if (Giveaways.length < 1) return false;

        const array = [];

        Giveaways.map(i => array.push({
            hostedBy: this.client.users.cache.get(i.hostedBy).tag ? this.client.users.cache.get(i.hostedBy).tag : "Nobody#0000",
            timeRemaining: i.endsOn - Date.now(),
            messageId: i.messageId,
            prize: i.prize
        }));

        return array;
    }
}

module.exports = GiveawayCreator;
