const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "userunlock",
    permissions: ["ADMINISTRATOR"],
    cooldown: 3,
    description: "Unlocks a given channel for a particular role!",
    async execute(client, message, cmd, args, Discord) {
        const channel = message.mentions.channels.first()
        if (!channel) return message.reply("**Please Mention A Valid Channel!**")
        const roletofind = args.slice(1).join(" ")
        const role = message.guild.roles.cache.find(r => r.id === roletofind)
        if (!role) return message.reply("**Please Give A Valid Role Id!**")
        let embed = new MessageEmbed()
            .setColor('#c30202')
            .setTimestamp()
            .setTitle("Channel Unlocked!")
            .setDescription(`**This Channel Has Been Unlocked By ${message.author.tag} For This Role <@!${role}>**`)
        channel.updateOverwrite(role, {
            SEND_MESSAGES: true
        })
        await channel.send(embed)
    }
}