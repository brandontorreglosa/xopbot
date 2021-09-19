const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
    name: 'createembed',
    permissions: ["MANAGE_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    aliases: ['embedcreator', 'create-ebed', 'create-embed'],
    cooldown: 10,
    async execute(client, message, cmd, args, Discord) {
        if (!args[0]) {
            const nopr = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor(`${color}`)
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**\`(prefix)createembed <footermsg> + <title> + <description>\` \nYou Must Add \`+\` For It To Work!**`)
            return message.lineReplyNoMention(nopr)
        }
        let splitArgs = args.join(' ').split('+');
        const footer = splitArgs[0];
        if (!footer) {
            const noffot = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor(`${color}`)
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**Please Add The Footer Message!**`)
            return message.lineReplyNoMention(noffot)
        }
        const title = splitArgs[1];
        if (!title) {
            const nottot = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor(`${color}`)
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**Please Add The Title!**`)
            return message.lineReplyNoMention(nottot)
        }
        const description = splitArgs[2];
        if (!description) {
            const noddot = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor(`${color}`)
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**Please Add The Description!**`)
            return message.lineReplyNoMention(noddot)
        }

        const embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor(`${color}`)
            .setTitle(`${title}`)
            .setDescription(`${description}`)
            .setFooter(`${footer}`)
        message.lineReplyNoMention(embed)
    }
}