const Discord = require("discord.js");
const errorChannel = process.env.errorChannel;
const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: "createvoice",
    aliases: ['newvoicec', 'cvoicec'],
    permissions: ["MANAGE_CHANNELS"],
    clientpermissions: ["MANAGE_CHANNELS", "SEND_MESSAGES", "EMBED_LINKS"],
    cooldown: 30,
    description: "Create voice Channels in your Server",
    async execute(client, message, cmd, args, Discord) {
        try {
            const user = message.mentions.members.first()
            if (!args[0]) {
                return message.lineReplyNoMention({ content: "**`(prefix)createvoice <name>`**" }) //, allowedMentions: { repliedUser: true } })
            }
            message.guild.channels.create(args.slice(0).join(" "), { type: "voice" });

            const embed = new Discord.MessageEmbed()
                .setTimestamp()
                .setTitle(`New Voice Channel Named ${message.channel}`)
                .setDescription(`**Channel Was Created By ${message.author.username}**`)
                .setColor("#c30202")
            message.lineReplyNoMention(embed);
        } catch (err) {
            const errorlogs = client.channels.cache.get(errorChannel)
            errorlogs.send({ content: `Error On Create Voice Channel Command!\n\nError:\n\n **${err}**` })
        }
    }
}