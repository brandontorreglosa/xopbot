const Discord = require("discord.js");
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
    name: "m&m",
    aliases: ['mnm'],
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    cooldown: 5,
    description: "Image Manipulation Command",
    async execute(client, message, cmd, args, Discord) {

        const user = message.mentions.users.first() || message.member;
        const avatar = user.displayAvatarURL({ size: 2048, format: "png" });


        // const embed = new Discord.MessageEmbed()
        //     .setTimestamp()
        //     .setTitle('M&M')
        //     .setColor(`${color}`)
        //     .setImage(`https://api.popcat.xyz/mnm?image=${avatar}`)

        // message.lineReplyNoMention(embed)

        message.lineReplyNoMention({ files: [{ attachment: `https://api.popcat.xyz/mnm?image=${avatar}`, name: "xopbotm&m.png" }] });
    }
}