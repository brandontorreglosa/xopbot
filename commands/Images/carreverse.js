const Discord = require("discord.js");
const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: "carreverse",
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    aliases: ['crr', 'carr'],
    cooldown: 5,
    description: "Image Manipulation Command",
    async execute(client, message, cmd, args, Discord) {
        const text = args.join(" ");
        if (!text) {
            const nopr = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#c30202')
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**\`(prefix)carreverse <text>\`**`)
            return message.lineReplyNoMention(nopr)
        }
        if (text.length > 15) {
            const maxlen = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#c30202')
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**You Are Not Allowed To Go Over \`15\` Characters!**`)
            return message.lineReplyNoMention(maxlen)
        }
        // const embed = new Discord.MessageEmbed()
        //     .setTimestamp()
        //     .setTitle('CARREVERSE')
        //     .setColor('#c30202')
        //     .setImage(`https://vacefron.nl/api/carreverse?text=${text}`)

        //     message.lineReplyNoMention(embed)

        message.lineReplyNoMention({ files: [{ attachment: `https://vacefron.nl/api/carreverse?text=${text}`, name: "xopbotcarreverse.png" }] });
    }
}