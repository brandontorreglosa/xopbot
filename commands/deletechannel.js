const Discord = require("discord.js");
const errorChannel = process.env.errorChannel;
module.exports = {
    name: "deletechannel",
    aliases: ['delchannel', 'delch'],
    cooldown: 30,
    permissions: ["MANAGE_CHANNELS"],
    description: "Delete Channels From your Server",
    async execute(client, message, cmd, args, Discord) {
        try {
            const user = message.mentions.members.first()
            const fetchedChannel = message.mentions.channels.first();
            if (!fetchedChannel) {
                return message.channel.send("`Usage: =delchannel <channel>`")
            }
            fetchedChannel.delete()

            const embed = new Discord.MessageEmbed()
                .setTimestamp()
                .setTitle(`Deleted Channel Named ${fetchedChannel}`)
                .setDescription(`**Channel Was Deleted By ${message.author.username}**`)
                .setColor("#c30202")
            await message.channel.send(embed);
        } catch (err) {
            const errorlogs = client.channels.cache.get(errorChannel)
            errorlogs.send(`Error On Delete Channel Command!\n\nError:\n\n **${err}**`)
        }
    }
}