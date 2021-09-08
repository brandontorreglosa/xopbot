const Discord = require("discord.js");
const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: "opinion",
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    cooldown: 5,
    description: "Image Manipulation Command",
    async execute(client, message, cmd, args, Discord) {

        const mention = message.mentions.users.first() || message.member;
        const avatar = mention.user.displayAvatarURL({ size: 2048, format: "png" });

        if (!args[0]) {
            const nopr = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#c30202')
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**\`(prefix)opinion <text>\`**`)
            return message.lineReplyNoMention(nopr)
        }
        const text = args.slice(0).join(' ');
        if (text.length > 45) {
            const maxlen = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#c30202')
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**You Are Not Allowed To Go Over \`45\` Characters!**`)
            return message.lineReplyNoMention(maxlen)
        }

        // const embed = new Discord.MessageEmbed()
        //     .setTimestamp()
        //     .setTitle('OPINION')
        //     .setColor('#c30202')
        //     .setImage(`https://api.popcat.xyz/opinion?image=${avatar}&text=${text}`)

        // message.lineReplyNoMention(embed)

        message.lineReplyNoMention({ files: [{ attachment: `https://api.popcat.xyz/opinion?image=${avatar}&text=${text}`, name: "xopbotopinion.png" }] });
    }
}