const Discord = require("discord.js");

module.exports = {
    name: "wideavatar",
    permissions: ["SEND_MESSAGES"],
    aliases: ['wpfp', 'wprofile'],
    cooldown: 5,
    description: "Get a  widened avatar of a user",
    async execute(client, message, cmd, args, Discord) {
        const mention = message.mentions.members.first() || message.member;
        const avatar = mention.user.displayAvatarURL({ dynamic: true, size: 2048, format: "png" });

        message.channel.send({ files: [{ attachment: `https://vacefron.nl/api/wide?image=${avatar}`, name: "xopbotwideavatar.png" }] });
    }
}