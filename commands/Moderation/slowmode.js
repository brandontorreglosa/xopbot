const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: "slowmode",
    cooldown: 5,
    permissions: ["MANAGE_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS", "MANAGE_MESSAGES"],
    aliases: ['smd'],
    category: "Mods",
    description: "Set the slowmode in a channel.",
    usage: "<slowmode time in sec reason",
    async execute(client, message, cmd, args, Discord) {
        let duration = args[0]
        if (isNaN(duration)) return message.lineReplyNoMention({ content: "**`(prefix)slowmode <secs> <reason>`**" }) //, allowedMentions: { repliedUser: true } })
        let reason = args.slice(1).join(" ")
        if (!reason) return message.lineReplyNoMention({ content: "**Please Specify A Reason!**" }) //, allowedMentions: { repliedUser: true } })

        message.channel.setRateLimitPerUser(duration, reason)
        message.lineReplyNoMention({ content: `**I Have Successfully Set The Slowmode To ${duration} Seconds With Reason - ${reason}**` }) //, allowedMentions: { repliedUser: true } })
    }
}