const Discord = require("discord.js");
const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: "water",
    permissions: ["SEND_MESSAGES"],
    cooldown: 5,
    description: "Image Manipulation Command",
    async execute(client, message, cmd, args, Discord) {

        try {

            if (!args[0]) {
                message.lineReplyNoMention({ content: "**`(prefix)water <text>`**" }) //, allowedMentions: { repliedUser: true } })
            }

            if (message.content.match("gore") || message.content.match("boob") || message.content.match("tits") || message.content.match("fuck") || message.content.match("shit") || message.content.match("nigga") || message.content.match("hoe") || message.content.match("bitch") || message.content.match("dick") || message.content.match("gay") || message.content.match("lesbian") || message.content.match("blowjob") || message.content.match("porn") || message.content.match("cunt")) {
                message.delete();
                message.lineReplyNoMention({ content: `**This Guy Needs Help! Whats Swearing Gonna Do About It? 😂**` }) //, allowedMentions: { repliedUser: true } });
        }

            let sayMessage = args.slice(0).join(' ');
        if (sayMessage.length > 50) return message.lineReplyNoMention({ content: '**You Are Not Allowed To Go Over 50 Characters!**'}) //, allowedMentions: { repliedUser: true } });

        const embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setTitle('WATER')
            .setColor('#c30202')
            .setImage(`https://vacefron.nl/api/water?text=${sayMessage}`)

        message.lineReplyNoMention(embed)

        //message.channel.send({ files: [{ attachment: `https://vacefron.nl/api/water?text=${sayMessage}`, name: "xopbotwater.png" }] });
    } catch(err) {
        const errorlogs = client.channels.cache.get(errorChannel)
        errorlogs.send({ content: `**Error On Water Command!\n\nError:\n\n ${err}**` })
    }
}
}