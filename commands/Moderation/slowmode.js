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
        if (isNaN(duration)) return message.reply("***Please give the time in seconds.***")
        let reason = args.slice(1).join(" ")
        if (!reason) return message.reply("***Please Specify A Reason!***")

        message.channel.setRateLimitPerUser(duration, reason)
        message.reply(`***I have successfully Set The Slowmode To ${duration} Seconds With Reason - ${reason}***`)
    }
}