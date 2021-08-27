const Discord = require("discord.js");
const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: "stonks",
    permissions: ["SEND_MESSAGES"],
    cooldown: 5,
    description: "Image Manipulation Command",
    async execute(client, message, cmd, args, Discord) {

        const mention = message.mentions.members.first() || message.member;
        const avatar = mention.user.displayAvatarURL({ size: 2048, format: "png" });

        const embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setTitle('STONKS')
            .setColor('#c30202')
            .setImage(`https://vacefron.nl/api/stonks?user=${avatar}&nostonks=BOOL`)

        message.lineReplyNoMention(embed)

        //message.channel.send({ files: [{ attachment: `https://vacefron.nl/api/stonks?user=${avatar}&nostonks=BOOL`, name: "xopbotstonks.png" }] });
    }
}