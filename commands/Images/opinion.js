const Discord = require("discord.js");
const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: "opinion",
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    cooldown: 5,
    description: "Image Manipulation Command",
    async execute(client, message, cmd, args, Discord) {

        const mention = message.mentions.members.first() || message.member;
        const avatar = mention.user.displayAvatarURL({ size: 2048, format: "png" });

        if (!args[0]) {
            return message.lineReplyNoMention('**`(prefix)opinion <text>`**')
        }
        const text = args.slice(0).join(' ');
        if (text.length > 45) return message.lineReplyNoMention({ content: '**You Are Not Allowed To Go Over 45 Characters!**' })

        // const embed = new Discord.MessageEmbed()
        //     .setTimestamp()
        //     .setTitle('OPINION')
        //     .setColor('#c30202')
        //     .setImage(`https://api.popcat.xyz/opinion?image=${avatar}&text=${text}`)

        // message.lineReplyNoMention(embed)

        message.lineReplyNoMention({ files: [{ attachment: `https://api.popcat.xyz/opinion?image=${avatar}&text=${text}`, name: "xopbotopinion.png" }] });
    }
}