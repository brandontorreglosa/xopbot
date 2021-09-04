const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
const errorChannel = process.env.errorChannel;
const db = require('quick.db');
module.exports = {
    name: 'play',
    permissions: ["CONNECT", "SPEAK"],
    aliases: ['skip', 'stop', 'pause', 'unpause', 'loop', 'leave', 'jump', 'queue', 'volume'],
    cooldown: 2,
    description: 'Advanced music bot',
    async execute(client, message, cmd, args, Discord) {

        const queue = message.client.distube.getQueue(message);

        if (cmd === 'play') {
            if (!message.member.voice.channel) {
                const embednovc1 = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setTitle('Error `404`')
                    .setDescription('**You Need To Be In A Voice Channel To Execute This Command!**')
                return message.lineReplyNoMention(embednovc1);
            }

            try {
                if (!args[0]) {
                    return message.lineReplyNoMention('**`(prefix)play <song>`**')
                }
                message.client.distube.play(message, args.join(' '))
            } catch (err) {
                const errorlogs = client.channels.cache.get(errorChannel);
                message.lineReplyNoMention({ content: "**Looks Like An Error Has Occured!**" });
                errorlogs.send({ content: `**Error On Play Command!\n\nError:\n\n ${err}**` })
            }
        }

        else if (cmd === 'stop') {
            if (!message.member.voice.channel) {
                const embednovc3 = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setTitle('Error `404`')
                    .setDescription('**You Need To Be In A Voice Channel To Execute This Command!**')
                return message.lineReplyNoMention(embednovc3);
            }

            if (!queue) {
                const embednovc2 = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setTitle('Error `404`')
                    .setDescription('**There Are No Songs In Queue! 🎶**')
                return message.lineReplyNoMention(embednovc2);
            }

            try {
                message.client.distube.stop(message)
                const stopembed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription('**XOPBOT Stopped All Music From Playing! 😭**')
                return message.lineReplyNoMention(stopembed);
            } catch (err) {
                const errorlogs = client.channels.cache.get(errorChannel);
                message.lineReplyNoMention({ content: "**Looks Like An Error Has Occured!**" });
                errorlogs.send({ content: `**Error On Stop Command!\n\nError:\n\n ${err}**` })
            }
        }

        else if (cmd === 'skip') {
            if (!message.member.voice.channel) {
                const embednovc4 = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setTitle('Error `404`')
                    .setDescription('**You Need To Be In A Voice Channel To Execute This Command!**')
                return message.lineReplyNoMention(embednovc4);
            }

            if (!queue) {
                const embednovc33 = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setTitle('Error `404`')
                    .setDescription('**There Are No Songs In Queue! 🎶**')
                return message.lineReplyNoMention(embednovc33);
            }

            try {
                message.client.distube.skip(message)
            } catch (err) {
                const errorlogs = client.channels.cache.get(errorChannel);
                message.lineReplyNoMention({ content: "**Looks Like An Error Has Occured!**" });
                errorlogs.send({ content: `**Error On Skip Command!\n\nError:\n\n ${err}**` })
            }
        }

        else if (cmd === 'pause') {
            if (!message.member.voice.channel) {
                const embednovc5 = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setTitle('Error `404`')
                    .setDescription('**You Need To Be In A Voice Channel To Execute This Command!**')
                return message.lineReplyNoMention(embednovc5);
            }

            if (!queue) {
                const embednovc44 = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setTitle('Error `404`')
                    .setDescription('**There Are No Songs In Queue! 🎶**')
                return message.lineReplyNoMention(embednovc44);
            }

            if (queue.pause) {
                message.client.distube.resume(message)
                const ressong1 = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setTitle(`${message.author.username}`)
                    .setDescription(`**XOPBOT Resumed The Music For You! ▶**`)
                return message.lineReplyNoMention(ressong1);
            }

            try {
                message.client.distube.pause(message)
                const embed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`**XOPBOT Paused The Music For You! ⏸**`)
                message.lineReplyNoMention(embed);
            } catch (err) {
                const errorlogs = client.channels.cache.get(errorChannel);
                message.lineReplyNoMention({ content: "**Looks Like An Error Has Occured!**" });
                errorlogs.send({ content: `**Error On Pause Command!\n\nError:\n\n ${err}**` })
            }
        }

        else if (cmd === 'unpause') {
            if (!message.member.voice.channel) {
                const embednovc6 = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setTitle('Error `404`')
                    .setDescription('**You Need To Be In A Voice Channel To Execute This Command!**')
                return message.lineReplyNoMention(embednovc6);
            }

            if (!queue) {
                const embednovc55 = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setTitle('Error `404`')
                    .setDescription('**There Are No Songs In Queue! 🎶**')
                return message.lineReplyNoMention(embednovc55);
            }

            try {
                message.client.distube.resume(message)
                const ressong2 = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`**XOPBOT Resumed The Music For You! ▶**`)
                return message.lineReplyNoMention(ressong2);
            } catch (err) {
                const errorlogs = client.channels.cache.get(errorChannel);
                message.lineReplyNoMention({ content: "**Looks Like An Error Has Occured!**" });
                errorlogs.send({ content: `**Error On Unpause Command!\n\nError:\n\n ${err}**` })
            }
        }

        else if (cmd === 'loop') {
            if (!message.member.voice.channel) {
                const embednovc7 = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setTitle('Error `404`')
                    .setDescription('**You Need To Be In A Voice Channel To Execute This Command!**')
                return message.lineReplyNoMention(embednovc7);
            }

            if (!queue) {
                const embednovc66 = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setTitle('Error `404`')
                    .setDescription('**There Are No Songs In Queue! 🎶**')
                return message.lineReplyNoMention(embednovc66);
            }

            try {
                if (!args[0]) {
                    return message.lineReplyNoMention('**`(prefix)loop <(Repeat queue)(Repeat song)(Off)>`**')
                }
                const mode = message.client.distube.setRepeatMode(message, parseInt(args[0]));
                mode = mode ? mode == 2 ? "Repeat queue" : "Repeat song" : "Off";

                const loopembed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`**XOPBOT Set Loop Mode To \`${mode}\` For You! 👍**`)
                return message.lineReplyNoMention(loopembed)
            } catch (err) {
                const errorlogs = client.channels.cache.get(errorChannel);
                message.lineReplyNoMention({ content: "**Looks Like An Error Has Occured!**" });
                errorlogs.send({ content: `**Error On Loop Command!\n\nError:\n\n ${err}**` })
            }
        }

        else if (cmd === 'leave') {
            if (!message.member.voice.channel) {
                const embednovc1 = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setTitle('Error `404`')
                    .setDescription('**You Need To Be In A Voice Channel To Execute This Command!**')
                return message.lineReplyNoMention(embednovc1);
            }

            try {
                message.member.voice.channel.leave();
                const leavevcembed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription('**XOPBOT Left The Voice Channel For You! 😢**')
                return message.lineReplyNoMention(leavevcembed)
            } catch (err) {
                const errorlogs = client.channels.cache.get(errorChannel);
                message.lineReplyNoMention({ content: "**Looks Like An Error Has Occured!**" });
                errorlogs.send({ content: `**Error On Leave Command!\n\nError:\n\n ${err}**` })
            }
        }

        else if (cmd === 'volume') {
            if (!message.member.voice.channel) {
                const embednovc1 = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setTitle('Error `404`')
                    .setDescription('**You Need To Be In A Voice Channel To Execute This Command!**')
                return message.lineReplyNoMention(embednovc1);
            }

            if (!queue) {
                const embednovc77 = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setTitle('Error `404`')
                    .setDescription('**There Are No Songs In Queue! 🎶**')
                return message.lineReplyNoMention(embednovc77);
            }

            try {
                if (!args[0]) {
                    return message.lineReplyNoMention('**`(prefix)volume <number>`**')
                }
                const volume = parseInt(args[0])
                const maxvolume = 500
                if (isNaN(volume)) {
                    return message.lineReplyNoMention('**That Is Not A Number!**')
                }
                if (volume > maxvolume) return message.lineReplyNoMention('**The Volume Cant Go More Higher Than \`500\`%! That Will Result In Destruction!**')
                message.client.distube.setVolume(message, volume);
                const volembed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`**XOPBOT Set Volume To \`${volume}\`% For You! 😃**`)
                return message.lineReplyNoMention(volembed)
            } catch (err) {
                const errorlogs = client.channels.cache.get(errorChannel);
                message.lineReplyNoMention({ content: "**Looks Like An Error Has Occured!**" });
                errorlogs.send({ content: `**Error On Volume Command!\n\nError:\n\n ${err}**` })
            }
        }

        else if (cmd === 'jump') {
            if (!message.member.voice.channel) {
                const embednovc1 = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setTitle('Error `404`')
                    .setDescription('**You Need To Be In A Voice Channel To Execute This Command!**')
                return message.lineReplyNoMention(embednovc1);
            }

            if (!queue) {
                const embednovc88 = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setTitle('Error `404`')
                    .setDescription('**There Are No Songs In Queue! 🎶**')
                return message.lineReplyNoMention(embednovc88);
            }

            try {
                if (!args[0]) {
                    return message.lineReplyNoMention('**`(prefix)jump <queuesongnumber>`**')
                }
                const jumpnu = parseInt(args[0])
                if (isNaN(jumpnu)) {
                    return message.lineReplyNoMention('**That Is Not A Number!**')
                }
                message.client.distube.jump(message, jumpnu);
                const jumpembed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`**XOPBOT Jumped Song To \`${jumpsong}\` For You! 🤪**`)
                return message.lineReplyNoMention(jumpembed)
            } catch (err) {
                const errorlogs = client.channels.cache.get(errorChannel);
                message.lineReplyNoMention({ content: "**Looks Like An Error Has Occured!**" });
                errorlogs.send({ content: `**Error On Jump Command!\n\nError:\n\n ${err}**` })
            }
        }

        else if (cmd === 'queue') {
            if (!message.member.voice.channel) {
                const embednovc1 = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setTitle('Error `404`')
                    .setDescription('**You Need To Be In A Voice Channel To Execute This Command!**')
                return message.lineReplyNoMention(embednovc1);
            }

            if (!queue) {
                const embednovc99 = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setTitle('Error `404`')
                    .setDescription('**There Are No Songs In Queue! 🎶**')
                return message.lineReplyNoMention(embednovc99);
            }

            try {
                const queueembed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription('**Current Queue: 🎶** \n' + queue.songs.map((song, id) => `**${id + 1}. [${song.name}](${song.url}) - \`[${song.formattedDuration}]\`**`).slice(0, 10).join("\n"))
                return message.lineReplyNoMention(queueembed)
            } catch (err) {
                const errorlogs = client.channels.cache.get(errorChannel);
                message.lineReplyNoMention({ content: "**Looks Like An Error Has Occured!**" });
                errorlogs.send({ content: `**Error On Queue Command!\n\nError:\n\n ${err}**` })
            }
        }
    }
}