const errorChannel = process.env.errorChannel;
const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: 'fbiopenup',
    aliases: ['fbi', 'fbi-open-up'],
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    cooldown: 10,
    description: 'Knock Knock FBI OPEN UP!',
    async execute(client, message, cmd, args, Discord) {
        try {
            const user = message.mentions.users.first()
            if (!args[0]) {
                const nopr = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor('#c30202')
                    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`**\`(prefix)fbiopenup <@user>\`**`)
                return message.lineReplyNoMention(nopr)
            }
            if (message.mentions.users.first().bot) {
                const nobots = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor('#c30202')
                    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`**You Can Not Send Bots . They Will Escape! 😢**`)
                return message.lineReplyNoMention(nobots)
            }

            const errfbi = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#c30202')
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**The FBI Couldn\`t Get To \`${user.tag}\`! 😭**`)

            const fbihouse = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#c30202')
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**The FBI Found And Is Already At \`${user.tag}\`'s House! 😉**`)

            const embed = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#c30202')
                .setTitle(`RUN! The FBI Found You Thanks To ${message.author.username}`)
                .setImage('https://cdn.discordapp.com/attachments/824319314495537175/874580794503467018/ezgif.com-gif-maker_1.gif')
                .setFooter('You Are Now In Danger Get Out 😨')
            user.send(embed)
                .catch(() => message.lineReplyNoMention(errfbi))
                .then(() => message.lineReplyNoMention(fbihouse));
        } catch (err) {
            const errorlogs = client.channels.cache.get(errorChannel);
            message.lineReplyNoMention({ content: "**Looks Like An Error Has Occured!**" });
            errorlogs.send({ content: `**Error On FBI Command!\n\nError:\n\n ${err}**` })
        }
    }
}