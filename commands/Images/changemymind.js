const Discord = require("discord.js");

module.exports = {
    name: "changemymind",
    permissions: ["SEND_MESSAGES"],
    aliases: ['chmm', 'chmym'],
    cooldown: 3,
    description: "Image Manipulation Command",
    async execute(client, message, cmd, args, Discord) {
        const text = args.join(" ");
        if (!text) {
            return message.channel.send("**Enter Some Text!**")
        }
        if (text.length > 15) return message.channel.send('**You Are Not Allowed To Go Over 15 Characters!**');

        message.channel.send({ files: [{ attachment: `https://vacefron.nl/api/changemymind?text=${text}`, name: "changemymind.png" }] });
    }
}