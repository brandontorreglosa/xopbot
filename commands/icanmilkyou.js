const Discord = require("discord.js");

module.exports = {
    name: "icanmilkyou",
    permissions: ["SEND_MESSAGES"],
    aliases: ['icmilky', 'icmyou'],
    cooldown: 3,
    description: "Image Manipulation Command",
    async execute(client, message, cmd, args, Discord) {

        const user = message.mentions.members.first()
    if (!user) {
        return message.channel.send("**Please Mention A User!**")
    }

    const avatar = user.user.displayAvatarURL({ size: 2048, format: "png" });


        message.channel.send({ files: [{ attachment: `https://vacefron.nl/api/icanmilkyou?user=${avatar}`, name: "drip.png"}]});
    }
    }