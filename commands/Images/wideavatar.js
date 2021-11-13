const Discord = require("discord.js");
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
    name: "wideavatar",
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    aliases: ['wpfp', 'wprofile'],
    cooldown: 5,
    description: "Get a  widened avatar of a user",
    async execute(client, message, cmd, args, Discord) {
        const user = message.mentions.users.first() || message.member;
        const avatar = user.displayAvatarURL({ size: 2048, format: "png" });

        // const embed = new Discord.MessageEmbed()
        //     .setTimestamp()
        //     .setTitle('WIDEAVATAR')
        //     .setColor(`${color}`)
        //     .setImage(`https://vacefron.nl/api/wide?image=${avatar}`)

        // message.lineReplyNoMention(embed)

        message.lineReplyNoMention({ files: [{ attachment: `https://vacefron.nl/api/wide?image=${avatar}`, name: "xopbotwideavatar.png" }] });
    }
}