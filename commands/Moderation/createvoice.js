const Discord = require("discord.js");
const errorChannel = process.env.errorChannel;
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
    name: "createvoice",
    aliases: ['newvoicec', 'cvoicec'],
    permissions: ["MANAGE_CHANNELS"],
    clientpermissions: ["MANAGE_CHANNELS", "SEND_MESSAGES", "EMBED_LINKS"],
    cooldown: 30,
    description: "Create voice Channels in your Server",
    async execute(client, message, cmd, args, Discord) {
        try {
            const user = message.mentions.users.first()
            if (!args[0]) {
                const nopr = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`**\`(prefix)createvoice <name>\`**`)
                return message.lineReplyNoMention(nopr)
            }
            message.guild.channels.create(args.slice(0).join(" "), { type: "voice" });

            const embed = new Discord.MessageEmbed()
                .setTimestamp()
                .setTitle(`New Voice Channel Named ${args[1]}`)
                .setDescription(`**Channel Was Created By ${message.author.username}**`)
                .setColor(`${color}`)
            message.lineReplyNoMention(embed);
        } catch (err) {
            const errorlogs = client.channels.cache.get(errorChannel)
            errorlogs.send({ content: `Error On Create Voice Channel Command!\n\nError:\n\n **${err}**` })
        }
    }
}