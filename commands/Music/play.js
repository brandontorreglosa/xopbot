const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
const errorChannel = process.env.errorChannel;
const db = require('quick.db');
module.exports = {
    name: 'play',
    permissions: ["CONNECT", "SPEAK"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS", "CONNECT", "SPEAK"],
    aliases: ['skip', 'stop', 'pause', 'unpause', 'loop', 'leave', 'join', 'jump', 'queue', 'volume'],
    cooldown: 5,
    description: 'Advanced music bot',
    async execute(client, message, cmd, args, Discord) {
        const queue = message.client.distube.getQueue(message);
        if (cmd === 'play') {
            if (!message.member.voice.channel) {
                const embednovc1 = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`Error 404`, message.author.displayAvatarURL({ dynamic: true })).setDescription('**You Need To Be In A Voice Channel To Execute This Command!**')
                return message.lineReplyNoMention({ embed: embednovc1 });
            }
            try {
                if (!args[0]) {
                    const nopr = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`(prefix)play <song>\`**`)
                    return message.lineReplyNoMention({ embed: nopr })
                }
                message.client.distube.play(message, args.join(' '))
            } catch (err) { const errorlogs = client.channels.cache.get(errorChannel); message.lineReplyNoMention({ content: "**Looks Like An Error Has Occured!**" }); errorlogs.send({ content: `**Error On Play Command!\n\nError:\n\n${err}**` }) }
        }
        else if (cmd === 'stop') {
            if (!message.member.voice.channel) {
                const embednovc3 = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`Error 404`, message.author.displayAvatarURL({ dynamic: true })).setDescription('**You Need To Be In A Voice Channel To Execute This Command!**')
                return message.lineReplyNoMention({ embed: embednovc3 });
            }
            if (!queue) {
                const embednovc2 = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`Error 404`, message.author.displayAvatarURL({ dynamic: true })).setDescription('**There Are No Songs In Queue! 🎶**')
                return message.lineReplyNoMention({ embed: embednovc2 });
            }
            try {
                const stopvote = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**This Will Stop All Music From Playing. Continue?**`).setFooter('Please Reply With Yes Or No!')
                message.lineReplyNoMention({ embed: stopvote })
                const filter = _message => message.author.id === _message.author.id && ['y', 'n', 'yes', 'no'].includes(_message.content.toLowerCase()); const options = { max: 1, time: 30000, errors: ['time'] };
                const proceed = await message.channel.awaitMessages(filter, options).then(collected => ['y', 'yes'].includes(collected.first().content.toLowerCase()) ? true : false).catch(() => false);
                if (!proceed) {
                    const nostopcmdplz = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**You Cancelled The Stop Command Successfully!**`)
                    return message.lineReplyNoMention({ embed: nostopcmdplz })
                }; message.client.distube.stop(message)
                const stopembed = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription('**XOPBOT \`Stopped\` All Music From Playing! 😭**')
                return message.lineReplyNoMention({ embed: stopembed });
            } catch (err) { const errorlogs = client.channels.cache.get(errorChannel); message.lineReplyNoMention({ content: "**Looks Like An Error Has Occured!**" }); errorlogs.send({ content: `**Error On Stop Command!\n\nError:\n\n${err}**` }) }
        }
        else if (cmd === 'skip') {
            if (!message.member.voice.channel) {
                const embednovc4 = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`Error 404`, message.author.displayAvatarURL({ dynamic: true })).setDescription('**You Need To Be In A Voice Channel To Execute This Command!**')
                return message.lineReplyNoMention({ embed: embednovc4 });
            }
            if (!queue) {
                const embednovc33 = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`Error 404`, message.author.displayAvatarURL({ dynamic: true })).setDescription('**There Are No Songs In Queue! 🎶**')
                return message.lineReplyNoMention({ embed: embednovc33 });
            }
            try {
                const skipvote = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**This Will Skip To The Next Song. Continue?**`).setFooter('Please Reply With Yes Or No!')
                message.lineReplyNoMention({ embed: skipvote })
                const filter1 = _message => message.author.id === _message.author.id && ['y', 'n', 'yes', 'no'].includes(_message.content.toLowerCase()); const options1 = { max: 1, time: 30000, errors: ['time'] };
                const proceed1 = await message.channel.awaitMessages(filter1, options1).then(collected => ['y', 'yes'].includes(collected.first().content.toLowerCase()) ? true : false).catch(() => false);
                if (!proceed1) {
                    const noskipcmdplz = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**You Cancelled The Skip Command Successfully!**`)
                    return message.lineReplyNoMention({ embed: noskipcmdplz })
                }; message.client.distube.skip(message)
            } catch (err) { const errorlogs = client.channels.cache.get(errorChannel); message.lineReplyNoMention({ content: "**Looks Like An Error Has Occured!**" }); errorlogs.send({ content: `**Error On Skip Command!\n\nError:\n\n${err}**` }) }
        }
        else if (cmd === 'pause') {
            if (!message.member.voice.channel) {
                const embednovc5 = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`Error 404`, message.author.displayAvatarURL({ dynamic: true })).setDescription('**You Need To Be In A Voice Channel To Execute This Command!**')
                return message.lineReplyNoMention({ embed: embednovc5 });
            }
            if (!queue) {
                const embednovc44 = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`Error 404`, message.author.displayAvatarURL({ dynamic: true })).setDescription('**There Are No Songs In Queue! 🎶**')
                return message.lineReplyNoMention({ embed: embednovc44 });
            }
            if (queue.pause) {
                message.client.distube.resume(message)
                const ressong1 = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**XOPBOT \`Resumed\` The Music For You! ▶**`)
                return message.lineReplyNoMention({ embed: ressong1 });
            }
            try {
                const pausevote = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**This Will Pause The Song From Playing. Continue?**`).setFooter('Please Reply With Yes Or No!')
                message.lineReplyNoMention({ embed: pausevote })
                const filter2 = _message => message.author.id === _message.author.id && ['y', 'n', 'yes', 'no'].includes(_message.content.toLowerCase()); const options2 = { max: 1, time: 30000, errors: ['time'] };
                const proceed2 = await message.channel.awaitMessages(filter2, options2).then(collected => ['y', 'yes'].includes(collected.first().content.toLowerCase()) ? true : false).catch(() => false);
                if (!proceed2) {
                    const nopausecmdplz = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**You Cancelled The Pause Command Successfully!**`)
                    return message.lineReplyNoMention({ embed: nopausecmdplz })
                }; message.client.distube.pause(message)
                const embed = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**XOPBOT \`Paused\` The Music For You! ⏸**`)
                message.lineReplyNoMention({ embed: embed });
            } catch (err) { const errorlogs = client.channels.cache.get(errorChannel); message.lineReplyNoMention({ content: "**Looks Like An Error Has Occured!**" }); errorlogs.send({ content: `**Error On Pause Command!\n\nError:\n\n${err}**` }) }
        }
        else if (cmd === 'unpause') {
            if (!message.member.voice.channel) {
                const embednovc6 = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`Error 404`, message.author.displayAvatarURL({ dynamic: true })).setDescription('**You Need To Be In A Voice Channel To Execute This Command!**')
                return message.lineReplyNoMention({ embed: embednovc6 });
            }
            if (!queue) {
                const embednovc55 = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`Error 404`, message.author.displayAvatarURL({ dynamic: true })).setDescription('**There Are No Songs In Queue! 🎶**')
                return message.lineReplyNoMention({ embed: embednovc55 });
            }
            try {
                const unpausevote = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**This Will Resume The Music To Play. Continue?**`).setFooter('Please Reply With Yes Or No!')
                message.lineReplyNoMention({ embed: unpausevote })
                const filter3 = _message => message.author.id === _message.author.id && ['y', 'n', 'yes', 'no'].includes(_message.content.toLowerCase()); const options3 = { max: 1, time: 30000, errors: ['time'] };
                const proceed3 = await message.channel.awaitMessages(filter3, options3).then(collected => ['y', 'yes'].includes(collected.first().content.toLowerCase()) ? true : false).catch(() => false);
                if (!proceed3) {
                    const nounpausecmdplz = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**You Cancelled The Unpause Command Successfully!**`)
                    return message.lineReplyNoMention({ embed: nounpausecmdplz })
                }; message.client.distube.resume(message)
                const ressong2 = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**XOPBOT \`Resumed\` The Music For You! ▶**`)
                return message.lineReplyNoMention({ embed: ressong2 });
            } catch (err) { const errorlogs = client.channels.cache.get(errorChannel); message.lineReplyNoMention({ content: "**Looks Like An Error Has Occured!**" }); errorlogs.send({ content: `**Error On Unpause Command!\n\nError:\n\n${err}**` }) }
        }
        else if (cmd === 'loop') {
            if (!message.member.voice.channel) {
                const embednovc7 = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`Error 404`, message.author.displayAvatarURL({ dynamic: true })).setDescription('**You Need To Be In A Voice Channel To Execute This Command!**')
                return message.lineReplyNoMention({ embed: embednovc7 });
            }
            if (!queue) {
                const embednovc66 = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`Error 404`, message.author.displayAvatarURL({ dynamic: true })).setDescription('**There Are No Songs In Queue! 🎶**')
                return message.lineReplyNoMention({ embed: embednovc66 });
            }
            try {
                if (!args[0]) {
                    const nopr2 = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`(prefix)loop <(Repeat queue)(Repeat song)(Off)>\`**`)
                    return message.lineReplyNoMention({ embed: nopr2 })
                }
                const loopvote = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**This Will Loop The (Song)(Queue) To That Mode. Continue?**`).setFooter('Please Reply With Yes Or No!')
                message.lineReplyNoMention({ embed: loopvote })
                const filter4 = _message => message.author.id === _message.author.id && ['y', 'n', 'yes', 'no'].includes(_message.content.toLowerCase()); const options4 = { max: 1, time: 30000, errors: ['time'] };
                const proceed4 = await message.channel.awaitMessages(filter4, options4).then(collected => ['y', 'yes'].includes(collected.first().content.toLowerCase()) ? true : false).catch(() => false);
                if (!proceed4) {
                    const noloopcmdplz = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**You Cancelled The Loop Command Successfully!**`)
                    return message.lineReplyNoMention({ embed: noloopcmdplz })
                }; const mode = message.client.distube.setRepeatMode(message, parseInt(args[0])); mode = mode ? mode == 2 ? "Repeat queue" : "Repeat song" : "Off"; const loopembed = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**XOPBOT Set Loop Mode To \`${mode}\` For You! 👍**`)
                return message.lineReplyNoMention({ embed: loopembed })
            } catch (err) { const errorlogs = client.channels.cache.get(errorChannel); errorlogs.send({ content: `**Error On Loop Command!\n\nError:\n\n${err}**` }) }
        }
        else if (cmd === 'leave') {
            if (!message.member.voice.channel) {
                const embednovc1 = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`Error 404`, message.author.displayAvatarURL({ dynamic: true })).setDescription('**You Need To Be In A Voice Channel To Execute This Command!**')
                return message.lineReplyNoMention({ embed: embednovc1 });
            }
            try {
                const leavevote = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**This Will Make XOPBOT Leave The Voice Channel. Continue?**`).setFooter('Please Reply With Yes Or No!')
                message.lineReplyNoMention({ embed: leavevote })
                const filter5 = _message => message.author.id === _message.author.id && ['y', 'n', 'yes', 'no'].includes(_message.content.toLowerCase()); const options5 = { max: 1, time: 30000, errors: ['time'] };
                const proceed5 = await message.channel.awaitMessages(filter5, options5).then(collected => ['y', 'yes'].includes(collected.first().content.toLowerCase()) ? true : false).catch(() => false);
                if (!proceed5) {
                    const noleavecmdplz = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**You Cancelled The Leave Command Successfully!**`)
                    return message.lineReplyNoMention({ embed: noleavecmdplz })
                }; message.member.voice.channel.leave(); const leavevcembed = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription('**XOPBOT \`Left\` The Voice Channel For You! 😢**')
                return message.lineReplyNoMention({ embed: leavevcembed })
            } catch (err) { const errorlogs = client.channels.cache.get(errorChannel); message.lineReplyNoMention({ content: "**Looks Like An Error Has Occured!**" }); errorlogs.send({ content: `**Error On Leave Command!\n\nError:\n\n${err}**` }) }
        }
        else if (cmd === 'volume') {
            if (!message.member.voice.channel) {
                const embednovc1 = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`Error 404`, message.author.displayAvatarURL({ dynamic: true })).setDescription('**You Need To Be In A Voice Channel To Execute This Command!**')
                return message.lineReplyNoMention({ embed: embednovc1 });
            }
            if (!queue) {
                const embednovc77 = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`Error 404`, message.author.displayAvatarURL({ dynamic: true })).setDescription('**There Are No Songs In Queue! 🎶**')
                return message.lineReplyNoMention({ embed: embednovc77 });
            }
            try {
                if (!args[0]) {
                    const nopr3 = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`(prefix)volume <number>\`**`)
                    return message.lineReplyNoMention({ embed: nopr3 })
                }
                const volume = parseInt(args[0])
                const maxvolume = 500
                if (isNaN(volume)) {
                    const fakvolume = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`${volume}\` Is Not A Number!**`)
                    return message.lineReplyNoMention({ embed: fakvolume })
                }
                if (volume > maxvolume) {
                    const nomorevolthanm = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**The Max Volume Is \`500\`%, Higher Than That Will Destroy Devices!**`)
                    return message.lineReplyNoMention({ embed: nomorevolthanm })
                }
                message.client.distube.setVolume(message, volume); const volembed = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**XOPBOT Set Volume To \`${volume}\`% For You!😃**`)
                return message.lineReplyNoMention({ embed: volembed })
            } catch (err) { const errorlogs = client.channels.cache.get(errorChannel); message.lineReplyNoMention({ content: "**Looks Like An Error Has Occured!**" }); errorlogs.send({ content: `**Error On Volume Command!\n\nError:\n\n${err}**` }) }
        }
        else if (cmd === 'jump') {
            if (!message.member.voice.channel) {
                const embednovc1 = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`Error 404`, message.author.displayAvatarURL({ dynamic: true })).setDescription('**You Need To Be In A Voice Channel To Execute This Command!**')
                return message.lineReplyNoMention({ embed: embednovc1 });
            }
            if (!queue) {
                const embednovc88 = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`Error 404`, message.author.displayAvatarURL({ dynamic: true })).setDescription('**There Are No Songs In Queue! 🎶**')
                return message.lineReplyNoMention({ embed: embednovc88 });
            }
            try {
                if (!args[0]) {
                    const nopr4 = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`(prefix)jump <queuenumber>\`**`)
                    return message.lineReplyNoMention({ embed: nopr4 })
                }
                const jumpnu = parseInt(args[0])
                if (isNaN(jumpnu)) {
                    const nonumsongal = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`${jumpnu}\` Is Not A Number!**`)
                    return message.lineReplyNoMention({ embed: nonumsongal })
                }
                message.client.distube.jump(message, jumpnu); const jumpembed = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**XOPBOT Jumped Queue To \`${jumpnu}\` For You!🤪**`)
                return message.lineReplyNoMention({ embed: jumpembed })
            } catch (err) { const errorlogs = client.channels.cache.get(errorChannel); errorlogs.send({ content: `**Error On Jump Command!\n\nError:\n\n${err}**` }) }
        }
        else if (cmd === 'queue') {
            if (!message.member.voice.channel) {
                const embednovc1 = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`Error 404`, message.author.displayAvatarURL({ dynamic: true })).setDescription('**You Need To Be In A Voice Channel To Execute This Command!**')
                return message.lineReplyNoMention({ embed: embednovc1 });
            }
            if (!queue) {
                const embednovc99 = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`Error 404`, message.author.displayAvatarURL({ dynamic: true })).setDescription('**There Are No Songs In Queue! 🎶**')
                return message.lineReplyNoMention({ embed: embednovc99 });
            }
            try {
                const queueembed = new Discord.MessageEmbed().setTimestamp().setThumbnail('https://cdn.discordapp.com/attachments/824319314495537175/893023202169749504/XOPBOT_Playlist.png').setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription('**Current Queue: 🎶** \n' + queue.songs.map((song, id) => `**${id + 1}. [${song.name}](${song.url}) - \`[${song.formattedDuration}]\`**`).slice(0, 10).join("\n"))
                return message.lineReplyNoMention({ embed: queueembed })
            } catch (err) { const errorlogs = client.channels.cache.get(errorChannel); message.lineReplyNoMention({ content: "**Looks Like An Error Has Occured!**" }); errorlogs.send({ content: `**Error On Queue Command!\n\nError:\n\n${err}**` }) }
        }
        else if (cmd === 'join') {
            if (!message.member.voice.channel) {
                const embednovc1 = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`Error 404`, message.author.displayAvatarURL({ dynamic: true })).setDescription('**You Need To Be In A Voice Channel To Execute This Command!**')
                return message.lineReplyNoMention({ embed: embednovc1 });
            }
            try {
                const joinvote = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**This Will Make XOPBOT Join The Voice Channel. Continue?**`).setFooter('Please Reply With Yes Or No!')
                message.lineReplyNoMention({ embed: joinvote })
                const filter6 = _message => message.author.id === _message.author.id && ['y', 'n', 'yes', 'no'].includes(_message.content.toLowerCase()); const options6 = { max: 1, time: 30000, errors: ['time'] };
                const proceed6 = await message.channel.awaitMessages(filter6, options6).then(collected => ['y', 'yes'].includes(collected.first().content.toLowerCase()) ? true : false).catch(() => false);
                if (!proceed6) {
                    const nostopcmdplz = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**You Cancelled The Join Command Successfully!**`)
                    return message.lineReplyNoMention({ embed: nostopcmdplz })
                }; message.member.voice.channel.join(); const leavevcembed = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription('**XOPBOT \`Joined\` The Voice Channel For You! 😉**')
                return message.lineReplyNoMention({ embed: leavevcembed })
            } catch (err) { const errorlogs = client.channels.cache.get(errorChannel); message.lineReplyNoMention({ content: "**Looks Like An Error Has Occured!**" }); errorlogs.send({ content: `**Error On Join Command!\n\nError:\n\n${err}**` }) }
        }
    }
}