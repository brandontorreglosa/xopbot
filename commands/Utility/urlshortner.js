const color = process.env.Color;
const lineReplyNoMention = require('discord-reply');

module.exports = {
    name: "urlshortner",
    aliases: ['shorten', 'url-short', 'short-url'],
    cooldown: 15,
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    description: "shorten a big url",
    async execute(client, message, cmd, args, Discord) {
        if (!args[0]) {
            const nopr = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor(`${color}`)
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**\`(prefix)urlshortner <link> / <name>\` \nMust Add \`, \`For It To Work!**`)
            return message.lineReplyNoMention(nopr)
        }

        let splitargs = args.join(' ').split(',');

        const text = splitargs[0];
        if (!text) {
            const notxt = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor(`${color}`)
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**Enter The \`Url\` To Shorten!**`)
            return message.lineReplyNoMention(notxt)
        }

        const text2 = splitargs[1];
        if (!text2) {
            const notxt2 = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor(`${color}`)
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**Enter The \`Name\` For The Url!**`)
            return message.lineReplyNoMention(notxt2)
        }

        const url = `https://api.popcat.xyz/shorten?url=${text}&extension=${text2}`;

        const embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor(`${color}`)
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
            .setTitle(`${text} Is Shortened!`)
            .setDescription(`**Your \`Url\` Is Now This: [New Url](${url}) Have Fun Sharing It! 😀**`)
        message.lineReplyNoMention(embed);
    }
}