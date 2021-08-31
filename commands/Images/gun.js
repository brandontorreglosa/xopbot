const Discord = require("discord.js");
const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: "gun",
    permissions: ["SEND_MESSAGES"],
    cooldown: 5,
    description: "Image Manipulation Command",
    async execute(client, message, cmd, args, Discord) {

        const mention = message.mentions.members.first() || message.member;
        const avatar = mention.user.displayAvatarURL({ size: 2048, format: "png" });

        // const embed = new Discord.MessageEmbed()
        //     .setTimestamp()
        //     .setTitle('GUN')
        //     .setColor('#c30202')
        //     .setImage(`https://api.popcat.xyz/gun?image=${avatar}`)

        // message.lineReplyNoMention(embed)

        message.lineReplyNoMention({ files: [{ attachment: `https://api.popcatdev.repl.co/gun?image=${avatar}`, name: "xopbotgun.png" }] });
    }
}