const Discord = require("discord.js");
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
    name: "wanted",
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    cooldown: 5,
    description: "Image Manipulation Command",
    async execute(client, message, cmd, args, Discord) {

        const user = message.mentions.users.first() ||  message.author;
        const avatar = user.displayAvatarURL({ size: 2048, format: "png" });

        // const embed = new Discord.MessageEmbed()
        //     .setTimestamp()
        //     .setTitle('WANTED')
        //     .setColor(`${color}`)
        //     .setImage(`https://api.popcat.xyz/wanted?image=${avatar}`)

        // message.lineReplyNoMention(embed)

        message.lineReplyNoMention({ files: [{ attachment: `https://api.popcat.xyz/wanted?image=${avatar}`, name: "xopbotwanted.png" }] });
    }
}