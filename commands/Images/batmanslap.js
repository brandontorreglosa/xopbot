const Discord = require("discord.js");
const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: "batmanslap",
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    aliases: ['bmanslap', 'batslap'],
    cooldown: 5,
    description: "Image Manipulation Command",
    async execute(client, message, cmd, args, Discord) {

        if (!args[0]) {
            const nopr = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#c30202')
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**\`(prefix)batmanslap <text> / <text2>\` \nMust Add / For It To Work!**`)
            return message.lineReplyNoMention(nopr)
        }

        const mention = message.mentions.users.first() || message.member;
        const avatar = mention.user.displayAvatarURL({ size: 2048, format: "png" });
        const xopbot = client.user.displayAvatarURL({ size: 2048, format: 'png' })

        let splitargs = args.join(' ').split('/');

        const text = splitargs[0];
        if (!text) {
            const notxt = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#c30202')
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**Enter Some Text!**`)
            return message.lineReplyNoMention(notxt)
        }
        if (text.length > 50) {
            const maxlen = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#c30202')
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**You Are Not Allowed To Go Over \`50\` Characters!**`)
            return message.lineReplyNoMention(maxlen)
        }

        const text2 = splitargs[1];
        if (!text2) {
            const notxt2 = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#c30202')
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**Enter The Second Text!**`)
            return message.lineReplyNoMention(notxt2)
        }
        if (text2.length > 50) {
            const maxlen2 = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#c30202')
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**You Are Not Allowed To Go Over \`50\` Characters!**`)
            return message.lineReplyNoMention(maxlen2)
        }

        // const embed = new Discord.MessageEmbed()
        //     .setTimestamp()
        //     .setTitle('BATMANSLAP')
        //     .setColor('#c30202')
        //     .setImage(`https://vacefron.nl/api/batmanslap?text1=${text}&text2=${text2}&batman=${avatar}&robin=${xopbot}`)

        // message.lineReplyNoMention(embed)

        message.lineReplyNoMention({ files: [{ attachment: `https://vacefron.nl/api/batmanslap?text1=${text}&text2=${text2}&batman=${avatar}&robin=${xopbot}`, name: "xopbotbatmanslap.png" }] });
    }
}