const Discord = require("discord.js");
const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: "drake",
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    cooldown: 10,
    description: "Image Manipulation Command",
    async execute(client, message, cmd, args, Discord) {
        if (!args[0]) {
            const nopr = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#c30202')
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**\`(prefix)drake <text> / <text2>\` \nYou Must Add \`/\` For It To Work!**`)
            return message.lineReplyNoMention(nopr)
        }
        let splitArgs = args.join(' ').split('/');
        const text = splitArgs[0];
        if (!text) {
            const textto1 = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#c30202')
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**Enter Some Text!**`)
            return message.lineReplyNoMention(textto1)
        }
        if (text.length > 70) {
            const maxlen = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#c30202')
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**You Are Not Allowed To Go Over \`70\` Characters!**`)
            return message.lineReplyNoMention(maxlen)
        }

        const text2 = splitArgs[1];
        if (!text2) {
            const texto2 = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#c30202')
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**Enter The Second Text!**`)
            return message.lineReplyNoMention(texto2)
        }
        if (text2.length > 70) {
            const maxlen2 = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#c30202')
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**You Are Not Allowed To Go Over \`70\` Characters!**`)
            return message.lineReplyNoMention(maxlen2)
        }

        // const embed = new Discord.MessageEmbed()
        //     .setTimestamp()
        //     .setTitle('DRAKE')
        //     .setColor('#c30202')
        //     .setImage(`https://api.popcat.xyz/drake?text1=${text}&text2=${text2}`)

        //     message.lineReplyNoMention(embed)

        message.lineReplyNoMention({ files: [{ attachment: `https://api.popcat.xyz/drake?text1=${text}&text2=${text2}`, name: "xopbotdrake.png" }] });
    }
}