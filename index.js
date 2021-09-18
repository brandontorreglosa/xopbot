const Discord = require('discord.js');
require('discord-reply');
const lineReplyNoMention = require('discord-reply');
const Levels = require('discord-xp');
require('dotenv').config();
const { Client, Collection, Intents } = require("discord.js");
const client = new Client({
    partials: ["MESSAGE", "CHANNEL", "REACTIONS"],
    allowedMentions: { parse: ['users', 'roles'], repliedUser: true },
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_WEBHOOKS,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.GUILD_INVITES,
        Intents.FLAGS.GUILD_BANS,
    ],
});
const mongoose = require('mongoose');
const disbot = require("disbotlist");
const disbut = require('discord-buttons');
disbut(client);
const DisTube = require('distube');
const color = process.env.Color;
const dbl = new disbot("IbDYioKdSGgRbowHKUBYHjeZ", client);
const client12 = require('alexflipnote.js');
const AlexClient = new client12('Xs7IYMWumg1ccrsJFd_a49qgZkWoIgFaoGTeMkdF')
const fs = require('fs')
const schema = require('./models/schema')
const bankschema = require('./models/bankschema')
const debtschema = require('./models/debtschema')

// <----/Client Events/---->

client.commands = new Collection();
client.events = new Collection();
client.setMaxListeners(0);

// <----/Handlers System/---->

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

// <----/Disbotlist Servercount System/---->

client.on("ready", () => {

    console.log(`CONNECTED WITH DISBOTLIST`)
})

client.on("ready", () => {

    dbl.serverCount();

})

// <----/Mongodb System/---->

Levels.setURL(process.env.MONGODB_SRV);

mongoose.connect(process.env.MONGODB_SRV, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
    .then(() => {
        console.log("Connected To Mongo Database!");
    })
    .catch((err) => {
        console.log(err);
    });

// <----/Economy System/---->

client.bal = (id) => new Promise(async ful => {
    const data = await schema.findOne({ id });
    if (!data) return ful(0);
    ful(data.coins);
})

client.add = (id, coins) => {
    schema.findOne({ id }, async (err, data) => {
        if (err) throw err;
        if (data) {
            data.coins += coins;
        } else {
            data = new schema({ id, coins })
        }
        data.save()
    })
}

client.rmv = (id, coins) => {
    schema.findOne({ id }, async (err, data) => {
        if (err) throw err;
        if (data) {
            data.coins -= coins;
        } else {
            data = new schema({ id, coins: -coins })
        }
        data.save()
    })
}

client.bank = (id) => new Promise(async ful => {
    const data = await bankschema.findOne({ id });
    if (!data) return ful(0);
    ful(data.bank);
})

client.bankadd = (id, bank) => {
    bankschema.findOne({ id }, async (err, data) => {
        if (err) throw err;
        if (data) {
            data.bank += bank;
        } else {
            data = new bankschema({ id, bank })
        }
        data.save()
    })
}

client.bankrmv = (id, bank) => {
    bankschema.findOne({ id }, async (err, data) => {
        if (err) throw err;
        if (data) {
            data.bank -= bank;
        } else {
            data = new bankschema({ id, bank: -bank })
        }
        data.save()
    })
}

client.debt = (id) => new Promise(async ful => {
    const data = await debtschema.findOne({ id });
    if (!data) return ful(0);
    ful(data.debt);
})

client.debtadd = (id, coins) => {
    debtschema.findOne({ id }, async (err, data) => {
        if (err) throw err;
        if (data) {
            data.debt += debt;
        } else {
            data = new debtschema({ id, debt })
        }
        data.save()
    })
}

client.debtrmv = (id, coins) => {
    debtschema.findOne({ id }, async (err, data) => {
        if (err) throw err;
        if (data) {
            data.debt -= debt;
        } else {
            data = new debtschema({ id, debt: -debt })
        }
        data.save()
    })
}

// <----/Distube System/---->

client.distube = new DisTube(client, {
    searchSongs: true,
    emitNewSongOnly: true,
    highWaterMark: 1024 * 1024 * 64,
    leaveOnEmpty: false,
    leaveOnFinish: false,
    leaveOnStop: false,
    searchSongs: false,
    youtubeDL: true,
    updateYouTubeDL: false,
})

client.distube
    .on("addList", (message, queue, playlist) => {
        const embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor(`${color}`)
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`**Added: \`${playlist.title}\` | Playlist: \`${playlist.total_items}\` Songs | Queue: \`- [${song.user}] -\` 🎶**`)
            .setThumbnail(playlist.thumbnail)
        message.lineReplyNoMention(embed);
    })
    .on("addSong", (message, queue, song) => {
        const embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor(`${color}`)
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`**Adding Song To Queue: 🎶 \n[${song.name}](${song.url}) - \`[${song.formattedDuration}]\`**`)
            .setThumbnail(song.thumbnail)
            .setFooter(`👁 ${song.views.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 👍 ${song.likes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 👎 ${song.dislikes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`)
        message.lineReplyNoMention(embed);
    })
    .on("empty", message => {
        const thing = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor(`${color}`)
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`**Channel Is \`Empty\`. XOPBOT Leaving The Channel In \`2m\`! 😭**`)

            const leftdavcc = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor(`${color}`)
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`**Channel Was \`Empty\` For Over \`2m\` So XOPBOT Left! 😭**`)

        message.lineReplyNoMention(thing).then((msg) => {
            setTimeout(function () {
                msg.edit(leftdavcc)
                message.member.voice.channel.leave()
            }, 120000)
        })
    })
    .on("error", (message, err) => {
        const embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor(`${color}`)
            .setAuthor(`Error 404`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`**Error Has Occured!**`)
        message.lineReplyNoMention(embed);
    })
    .on("finish", message => {
        const embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor(`${color}`)
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`**There Are No More Songs In The Queue! ⏯**`)
        message.lineReplyNoMention(embed);
    })
    .on("initQueue", queue => {
        queue.autoplay = false;
    })
    .on("noRelated", message => {
        const embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor(`${color}`)
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`**XOPBOT \`Can't\` Find Related Video To Play. Stopped Playing The Music!`)
        message.lineReplyNoMention(embed);
    })
    .on("playList", (message, queue, playlist, song) => {
        const embed = new Discord.MessageEmbed()
            .setColor(`${color}`)
            .setDescription(`Play **${playlist.name}** playlist (${playlist.songs.length} songs)\nNow playing **[${song.name}](${song.url})** [${song.user}] - \`[${song.formattedDuration}]\``)
            .setThumbnail(playlist.thumbnail)
        message.lineReplyNoMention(embed);
    })
    .on("playSong", (message, queue, song) => {
        const embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor(`${color}`)
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`**Started Playing: 🎶 \n[${song.name}](${song.url}) - \`[${song.formattedDuration}]\`**`)
            .setThumbnail(song.thumbnail)
            .setFooter(`👁 ${song.views.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 👍 ${song.likes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 👎 ${song.dislikes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`)
        message.lineReplyNoMention(embed);
    })
    // DisTubeOptions.searchSongs = true
    .on("searchCancel", message => {
        const embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor(`${color}`)
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`**Searching Canceled!**`)
        message.lineReplyNoMention(embed);
    })
    // DisTubeOptions.searchSongs = true
    .on("searchResult", (message, result) => {
        let i = 0
        const embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor(`${color}`)
            .setAuthor(message.client.user.username, message.client.user.displayAvatarURL())
            .setDescription(`**Choose an option from below**\n${result.map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")}`)
            .setFooter(`Enter anything else or wait 60 seconds to cancel`);
        message.lineReplyNoMention(embed);
    });

client.login(process.env.DISCORD_TOKEN);