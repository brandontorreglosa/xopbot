const mongoose = require('mongoose');
const Discord = require('discord.js');
const DropModel = require('../models/DropModel');
const { EventEmitter } = require('events');

mongoose.set('useFindAndModify', false);

class DropCreator extends EventEmitter {
    /**
     * 
     * @param {Discord.Client} client - A discord.js client.
     * @param {string} url - A MongoDB connection string.
     */

    constructor(client, url = '') {
        super();

        if (!client) throw new Error("A client wasn't provided.");
        if (!url) throw new Error("A connection string wasn't provided.");

        this.client = client;

        this.mongoUrl = url;

        mongoose.connect(this.mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        this.client.on('message', async message => {
            if (message.author.bot) return;
            if (message.channel.type === 'dm') return;

            const randomNumber = Math.round(Math.random() * 30);

            if (randomNumber === 17) {
                let Drops = await DropModel.findOne({ guildId: message.guild.id, channelId: message.channel.id });

                if (!Drops) return;

                const { guildId, channelId, prize, createdBy } = Drops;

                const guild = this.client.guilds.cache.get(guildId);
                const channel = guild.channels.cache.get(channelId);

                const DropEmbed = new Discord.MessageEmbed()
                .setTitle(`${prize}`)
                .setDescription(`First to React with 🎉 wins the prize.`)
                .setFooter(this.client.user.tag, this.client.user.displayAvatarURL({ size: 512, format: 'png' }))
                .setColor(guild.me.roles.highest.hexColor)
                .setTimestamp();

                const msg = await channel.send(DropEmbed);

                await Drops.remove();

                await msg.react('🎉');

                const filter = (reaction, user) => !user.bot;
                const reaction = new Discord.ReactionCollector(msg, filter, { max: 1 });

                reaction.on('collect', async (reaction, user) => {
                    const { embeds } = msg;

                    const embed = embeds[0];

                    embed.setTitle(`🎉 Drop Winner!`);
                    embed.setDescription(`${user.toString()} won \`${prize}\`.
                    Please contact ${this.client.users.cache.get(createdBy).toString()} to claim your prize!`);
                    
                    await msg.edit(embed);

                    msg.channel.send(`${user.toString()} won **${prize}**`);
                    this.emit('wonDrop', Drops);
                });
            }
        });
    }

    /**
     * 
     * @param {DropOptions} options - Options for drop.
     */

    async createDrop(options) { 
        if (!options.prize) throw new Error("You didn't provide a prize.");
        if (!options.guildId) throw new Error("You didn't provide a guild ID.");
        if (!options.channelId) throw new Error("You didn't provide a channel ID.");
        if (!options.createdBy) throw new Error("You didn't provide who the drop was created by.");

        const sorted = await DropModel.find({ guildId: options.guildId }).sort([['position', 'descending']]).exec();

        if (sorted.length < 1) {
            const newDrop = new DropModel({
                guildId: options.guildId,
                prize: options.prize,
                channelId: options.channelId,
                createdBy: options.createdBy,
                timeCreated: new Date(),
                position: 1
            });

            return newDrop.save();
        }
        
        const newSorted = sorted[0];

        const newDrop = new DropModel({
            guildId: options.guildId,
            prize: options.prize,
            channelId: options.channelId,
            createdBy: options.createdBy,
            timeCreated: new Date(),
            position: parseInt(newSorted.position) + 1
        });

        newDrop.save();
        this.emit('dropCreate', newDrop);
        return newDrop;
    }

    /**
     * 
     * @param {string} guildId - A discord guild ID.
     */

    async listDrops(guildId) {
        if (!guildId) throw new Error("Please provide a guild ID.");

        const guild = this.client.guilds.cache.get(guildId);

        if (guild) {
            const drops = await DropModel.find({ guildId: guildId });

            if (drops.length < 1) return false;

            const finalDrops = drops.slice(0, 5);

            const array = [];

            finalDrops.map(i => array.push({
                createdBy: this.client.users.cache.get(i.createdBy).tag ? this.client.users.cache.get(i.createdBy).tag : "Nobody#0000",
                position: i.position,
                prize: i.prize,
                channel: guild.channels.cache.get(i.channelId).toString() ? guild.channels.cache.get(i.channelId).toString() : "Unknown Channel"
            }));

            return array;
        }
    }

    /**
     * 
     * @param {string} guildId - A discord guild ID.
     * @param {number} position - The position of the drop. Use the listDrops function to find the position.
     */

    async deleteDrop(guildId, position) {
        if (!guildId) throw new Error("You didn't provide a guild ID.");
        if (!position) throw new Error("You didn't provide a position.");
        if (isNaN(position)) throw new Error("Position must be a number.");

        const data = await DropModel.findOne({ guildId: guildId, position: position });

        if (!data) return false;

        const rip = await DropModel.findOneAndRemove({ guildId: guildId, position: position });
        this.emit('dropDelete', rip);
        return rip;
    }
}

module.exports = DropCreator;