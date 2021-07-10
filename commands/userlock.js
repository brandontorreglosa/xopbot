const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "userlock",
    permissions: ["ADMINISTRATOR"],
    cooldown: 3,
    description: "Locks a given channel for a particular role!",
    async execute(client, message, cmd, args, Discord) {
        const channel = message.mentions.channels.first()
        if (!channel) return message.reply("**Please mention a Valid Channel!**")
        const roletofind = args.slice(1).join(" ")
        const role = message.guild.roles.cache.find(r => r.id === roletofind)
        if (!role) return message.reply("**Please Give A Valid Role Id!**")
        let embed = new MessageEmbed()
            .setTimestamp()
            .setTitle("Channel Locked!")
            .setDescription(`**This channel Has Been Locked By ${message.author.tag} For This Role <@!${role}>**`)
            .setTimestamp()
        channel.updateOverwrite(role, {
            SEND_MESSAGES: false
        })
        await channel.send(embed)
    }
}