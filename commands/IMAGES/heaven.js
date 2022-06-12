const Discord = require("discord.js");
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
    name: "heaven",
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    cooldown: 5,
    description: "Image Manipulation Command",
    async execute(client, message, cmd, args, Discord) {
        const user = message.mentions.users.first() || message.author;
        const avatar = user.displayAvatarURL({ size: 2048, format: "png" });
        message.lineReplyNoMention({ files: [{ attachment: `https://vacefron.nl/api/heaven?user=${avatar}`, name: "xopbotheaven.png" }] });
    }
}