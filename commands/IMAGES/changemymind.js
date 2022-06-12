const Discord = require("discord.js");
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
    name: "changemymind",
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    aliases: ['chmm', 'chmym'],
    cooldown: 5,
    description: "Image Manipulation Command",
    async execute(client, message, cmd, args, Discord) {
        const text = args.join(" ");
        if (!text) {
            const nopr = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor(`${color}`)
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**\`(prefix)changemymind <text>\`**`)
            return message.lineReplyNoMention(nopr)
        }
        if (text.length > 15) {
            const maxlen = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor(`${color}`)
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**You Are Not Allowed To Go Over \`15\` Characters!**`)
            return message.lineReplyNoMention(maxlen)
        }
        message.lineReplyNoMention({ files: [{ attachment: `https://vacefron.nl/api/changemymind?text=${text}`, name: "xopbotchangemymind.png" }] });
    }
}