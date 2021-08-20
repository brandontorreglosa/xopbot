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
                return message.reply({ content: "`Usage: (prefix)delchannel <channel>`", allowedMentions: { repliedUser: true } })
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
            errorlogs.send({ content: `Error On Delete Channel Command!\n\nError:\n\n **${err}**` })
        }
    }
}