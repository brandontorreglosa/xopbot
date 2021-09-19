const Discord = require("discord.js");
const errorChannel = process.env.errorChannel;
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
    name: "deletechannel",
    aliases: ['delchannel', 'delch'],
    cooldown: 30,
    permissions: ["MANAGE_CHANNELS"],
    clientpermissions: ["MANAGE_CHANNELS", "SEND_MESSAGES", "EMBED_LINKS"],
    description: "Delete Channels From your Server",
    async execute(client, message, cmd, args, Discord) {
        try {
            const user = message.mentions.users.first()
            const fetchedChannel = message.mentions.channels.first();
            if (!fetchedChannel) {
                const nopr = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`**\`(prefix)deletechannel <#channel>\`**`)
                return message.lineReplyNoMention(nopr)
            }
            fetchedChannel.delete()

            const embed = new Discord.MessageEmbed()
                .setTimestamp()
                .setTitle(`Deleted Channel Named ${fetchedChannel}`)
                .setDescription(`**Channel Was Deleted By ${message.author.username}**`)
                .setColor(`${color}`)
            await message.lineReplyNoMention(embed);
        } catch (err) {
            const errorlogs = client.channels.cache.get(errorChannel)
            errorlogs.send({ content: `Error On Delete Channel Command!\n\nError:\n\n **${err}**` })
        }
    }
}