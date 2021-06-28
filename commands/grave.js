const Discord = require("discord.js");

module.exports = {
    name: "grave",
    permissions: ["SEND_MESSAGES"],
    cooldown: 3,
    description: "Image Manipulation Command",
    async execute(client, message, cmd, args, Discord) {

        const user = message.mentions.members.first()  || message.author;
    if (!user) {
        return message.channel.send("**Please Mention A User!**")
    }

    const avatar = user.user.displayAvatarURL({ size: 2048, format: "png" });


        message.channel.send({ files: [{ attachment: `https://vacefron.nl/api/grave?user=${avatar}`, name: "grave.png"}]});
    }
    }