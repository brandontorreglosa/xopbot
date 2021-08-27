const Discord = require("discord.js");
const lineReply = require('discord-reply');
module.exports = {
    name: "ad",
    permissions: ["SEND_MESSAGES"],
    cooldown: 5,
    description: "Image Manipulation Command",
    async execute(client, message, cmd, args, Discord) {

        const mention = message.mentions.members.first() || message.member;
        const avatar = mention.user.displayAvatarURL({ size: 2048, format: "png" });

        const embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setTitle('AD')
            .setColor('#c30202')
            .setImage(`https://api.popcatdev.repl.co/ad?image=${avatar}`)

        message.lineReply(embed)

        //message.channel.send({ files: [{ attachment: `https://api.popcatdev.repl.co/ad?image=${avatar}`, name: "xopbotad.png" }] });
    }
}