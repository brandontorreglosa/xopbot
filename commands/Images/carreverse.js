const Discord = require("discord.js");
const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: "carreverse",
    permissions: ["SEND_MESSAGES"],
    aliases: ['crr', 'carr'],
    cooldown: 5,
    description: "Image Manipulation Command",
    async execute(client, message, cmd, args, Discord) {
        const text = args.join(" ");
        if (!text) {
            return message.lineReplyNoMention({ content: "**`(prefix)carreverse <text>`**" }) //, allowedMentions: { repliedUser: true } })
        }
        if (text.length > 15) return message.lineReplyNoMention({ content: '**You Are Not Allowed To Go Over 15 Characters!**' }) //, allowedMentions: { repliedUser: true }});

    const embed = new Discord.MessageEmbed()
        .setTimestamp()
        .setTitle('CARREVERSE')
        .setColor('#c30202')
        .setImage(`https://vacefron.nl/api/carreverse?text=${text}`)

        message.lineReplyNoMention(embed)

    message.lineReplyNoMention({ files: [{ attachment: `https://vacefron.nl/api/carreverse?text=${text}`, name: "carreverse.png" }] });
}
}