const Discord = require("discord.js");
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
    name: "dockofshame",
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    aliases: ['dcofsh', 'dos'],
    cooldown: 5,
    description: "Image Manipulation Command",
    async execute(client, message, cmd, args, Discord) {

        const user = message.mentions.users.first() ||  message.author;
        const avatar = user.displayAvatarURL({ size: 2048, format: "png" });

        // const embed = new Discord.MessageEmbed()
        //     .setTimestamp()
        //     .setTitle('DOCKOFSHAME')
        //     .setColor(`${color}`)
        //     .setImage(`https://vacefron.nl/api/dockofshame?user=${avatar}`)

        // message.lineReplyNoMention(embed)

        message.lineReplyNoMention({ files: [{ attachment: `https://vacefron.nl/api/dockofshame?user=${avatar}`, name: "xopbotdockofshame.png" }] });
    }
}