const Discord = require("discord.js");
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
    name: "stonks",
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    cooldown: 5,
    description: "Image Manipulation Command",
    async execute(client, message, cmd, args, Discord) {

        const user = message.mentions.users.first() || message.member;
        const avatar = user.displayAvatarURL({ size: 2048, format: "png" });

        // const embed = new Discord.MessageEmbed()
        //     .setTimestamp()
        //     .setTitle('STONKS')
        //     .setColor(`${color}`)
        //     .setImage(`https://vacefron.nl/api/stonks?user=${avatar}&nostonks=BOOL`)

        // message.lineReplyNoMention(embed)

        message.lineReplyNoMention({ files: [{ attachment: `https://vacefron.nl/api/stonks?user=${avatar}&nostonks=BOOL`, name: "xopbotstonks.png" }] });
    }
}