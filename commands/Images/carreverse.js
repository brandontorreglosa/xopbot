const Discord = require("discord.js");

module.exports = {
    name: "carreverse",
    permissions: ["SEND_MESSAGES"],
    aliases: ['crr', 'carr'],
    cooldown: 3,
    description: "Image Manipulation Command",
    async execute(client, message, cmd, args, Discord) {
        const text = args.join(" ");
        if (!text) {
            return message.reply({ content: "**Enter Some Text!**", allowedMentions: { repliedUser: true } })
        }
        if (text.length > 15) return message.reply({ content: '**You Are Not Allowed To Go Over 15 Characters!**', allowedMentions: { repliedUser: true } });

        message.channel.send({ files: [{ attachment: `https://vacefron.nl/api/carreverse?text=${text}`, name: "carreverse.png" }] });
    }
}