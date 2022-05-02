const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
    name: "slowmode",
    cooldown: 5,
    permissions: ["MANAGE_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS", "MANAGE_MESSAGES", "MANAGE_CHANNELS"],
    aliases: ['smd'],
    category: "Mods",
    description: "Set the slowmode in a channel.",
    usage: "<slowmode time in sec reason",
    async execute(client, message, cmd, args, Discord) {
        const duration = args[0]
        if (isNaN(duration)) {
            const nopr = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`(prefix)slowmode <time(s)> <reason>\`**`)
            return message.lineReplyNoMention({ embed: nopr })
        }
        const reason = args.slice(1).join(" ")
        if (!reason) {
            const norreaon = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**Please Specify A Reason To Set Slowmode!**`)
            return message.lineReplyNoMention({ embed: norreaon })
        }
        message.channel.setRateLimitPerUser(duration, reason)
        const success = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**Successfully Set Slowmode To \`${duration}\`. Reason: \`${reason}\`!**`)
        message.lineReplyNoMention({ embed: success })
    }
}