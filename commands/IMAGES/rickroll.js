const errorChannel = process.env.errorChannel;
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
    name: 'rickroll',
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    cooldown: 10,
    description: 'get Rickrolled',
    async execute(client, message, cmd, args, Discord) {
        try {
            const user = message.mentions.users.first()
            if (!args[0]) {
                const nopr = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`**\`(prefix)rickroll <@user>\`**`)
                return message.lineReplyNoMention(nopr)
            }
            if (message.mentions.users.first().bot) {
                const nobots = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`**You Can Not Rickroll Bot\`s . They Wont See It! 😢**`)
                return message.lineReplyNoMention(nobots)
            }

            const erickoll = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor(`${color}`)
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**Rick Astley Couldn\`t Get To \`${user.tag}\`! 😭**`)

            const ricksuc = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor(`${color}`)
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**Rick Astley Got To \`${user.tag}\`'s DM\`s And Rickrolled Them!**`)

            const embed = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor(`${color}`)
                .setTitle(`OMG! You Just Got Rickrolled By ${message.author.username}`)
                .setImage('https://media1.tenor.com/images/23aeaaa34afd591deee6c163c96cb0ee/tenor.gif?itemid=7220603')
                .setFooter('You Just Got Rickrolled 😆')
            user.send(embed)
                .catch(() => message.lineReplyNoMention(erickoll))
                .then(() => message.lineReplyNoMention(ricksuc));
        } catch (err) {
            const errorlogs = client.channels.cache.get(errorChannel);
            message.lineReplyNoMention({ content: "**Looks Like An Error Has Occured!**" });
            errorlogs.send({ content: `**Error On Rickroll Command!\n\nError:\n\n ${err}**` })
        }
    }
}