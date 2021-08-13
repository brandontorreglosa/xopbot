module.exports = {
    name: "slowmode",
    cooldown: 5,
    permissions: ["MANAGE_MESSAGES"],
    aliases: ['smd'],
    category: "Mods",
    description: "Set the slowmode in a channel.",
    usage: "<slowmode time in sec reason",
    async execute(client, message, cmd, args, Discord) {
        let duration = args[0]
        if (isNaN(duration)) return message.reply({ content: "***Please Give The Time In Seconds. Example = 5s!***", allowedMentions: { repliedUser: true } })
        let reason = args.slice(1).join(" ")
        if (!reason) return message.reply({ content: "***Please Specify A Reason!***", allowedMentions: { repliedUser: true } })

        message.channel.setRateLimitPerUser(duration, reason)
        message.reply({ content: `***I have successfully Set The Slowmode To ${duration} Seconds With Reason - ${reason}***`, allowedMentions: { repliedUser: true } })
    }
}