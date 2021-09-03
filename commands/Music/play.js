const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
const errorChannel = process.env.errorChannel;
module.exports = {
    name: 'play',
    permissions: ["CONNECT", "SPEAK"],
    aliases: ['skip', 'stop', 'pause', 'unpause', 'loop'],
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
                    .setTitle(`${message.author.username}`)
                    .setDescription('**XOPBOT Is Leaving Voice Channel! 😭**')
                return message.lineReplyNoMention(stopembed);
            } catch (err) {
                const errorlogs = client.channels.cache.get(errorChannel);
                message.lineReplyNoMention({ content: "**Looks Like An Error Has Occured!**" });
                errorlogs.send({ content: `**Error On Stop Command!\n\nError:\n\n ${err}**` })
            }
        }

        else if (cmd === 'skip') {
            if (!queue) {
                const embednovc3 = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setTitle('Error `404`')
                    .setDescription('**There Are No Songs In Queue! 🎶**')
                return message.lineReplyNoMention(embednovc3);
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
            if (!queue) {
                const embednovc4 = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setTitle('Error `404`')
                    .setDescription('**There Are No Songs In Queue! 🎶**')
                return message.lineReplyNoMention(embednovc4);
            }

            if (queue.pause) {
                message.client.distube.resume(message)
                const ressong1 = new MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setTitle(`${message.author.username}`)
                    .setDescription(`**Resumed The Music For You! ▶**`)
                return message.lineReplyNoMention(ressong1);
            }

            try {
                message.client.distube.pause(message)
                const embed = new MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setTitle(`${message.author.username}`)
                    .setDescription(`**Paused The Music For You! ⏸**`)
                message.lineReplyNoMention(embed);
            } catch (err) {
                const errorlogs = client.channels.cache.get(errorChannel);
                message.lineReplyNoMention({ content: "**Looks Like An Error Has Occured!**" });
                errorlogs.send({ content: `**Error On Pause Command!\n\nError:\n\n ${err}**` })
            }
        }

        else if (cmd === 'unpause') {
            if (!queue) {
                const embednovc5 = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setTitle('Error `404`')
                    .setDescription('**There Are No Songs In Queue! 🎶**')
                return message.lineReplyNoMention(embednovc5);
            }

            try {
                message.client.distube.resume(message)
                const ressong2 = new MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setTitle(`${message.author.username}`)
                    .setDescription(`**Resumed The Music For You! ▶**`)
                return message.lineReplyNoMention(ressong2);
            } catch (err) {
                const errorlogs = client.channels.cache.get(errorChannel);
                message.lineReplyNoMention({ content: "**Looks Like An Error Has Occured!**" });
                errorlogs.send({ content: `**Error On Unpause Command!\n\nError:\n\n ${err}**` })
            }
        }

        else if (cmd === 'loop') {
            if (!queue) {
                const embednovc6 = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setTitle('Error `404`')
                    .setDescription('**There Are No Songs In Queue! 🎶**')
                return message.lineReplyNoMention(embednovc6);
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
                    .setTitle(`${message.author.username}`)
                    .setDescription('**Loop Mode Set To `' + mode + '`**')
            } catch (err) {
                const errorlogs = client.channels.cache.get(errorChannel);
                message.lineReplyNoMention({ content: "**Looks Like An Error Has Occured!**" });
                errorlogs.send({ content: `**Error On Loop Command!\n\nError:\n\n ${err}**` })
            }
        }
    }
}