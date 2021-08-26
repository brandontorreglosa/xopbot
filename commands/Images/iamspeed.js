const Discord = require("discord.js");

module.exports = {
    name: "iamspeed",
    permissions: ["SEND_MESSAGES"],
    aliases: ['iams', 'iaspeed'],
    cooldown: 5,
    description: "Image Manipulation Command",
    async execute(client, message, cmd, args, Discord) {

        const mention = message.mentions.members.first() || message.member;
        const avatar = mention.user.displayAvatarURL({ size: 2048, format: "png" });


        message.channel.send({ files: [{ attachment: `https://vacefron.nl/api/iamspeed?user=${avatar}`, name: "xopbotiamspeed.png" }] });
    }
}