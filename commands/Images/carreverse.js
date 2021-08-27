const Discord = require("discord.js");

module.exports = {
    name: "carreverse",
    permissions: ["SEND_MESSAGES"],
    aliases: ['crr', 'carr'],
    cooldown: 5,
    description: "Image Manipulation Command",
    async execute(client, message, cmd, args, Discord) {
        const text = args.join(" ");
        if (!text) {
            return message.reply({ content: "**Enter Some Text!**", allowedMentions: { repliedUser: true } })
        }
        if (text.length > 15) return message.reply({ content: '**You Are Not Allowed To Go Over 15 Characters!**', allowedMentions: { repliedUser: true } });

        const embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setTitle('CARREVERSE')
            .setColor('#c30202')
            .setImage(`https://vacefron.nl/api/carreverse?text=${text}`)

        message.channel.send(embed)

        //message.channel.send({ files: [{ attachment: `https://vacefron.nl/api/carreverse?text=${text}`, name: "carreverse.png" }] });
    }
}