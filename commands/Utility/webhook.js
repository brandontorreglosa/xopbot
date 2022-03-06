const { WebhookClient, MessageEmbed } = require('discord.js')
const color = process.env.Color;
module.exports = {
    name: 'webhook',
    cooldown: 5,
    permissions: ["MANAGE_CHANNELS"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    async execute(client, message, cmd, args, Discord) {
        if (!args[0]) {
            const nopr = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`(prefix)webhook <text>\`**`)
            return message.lineReplyNoMention({ embed: nopr })
        }
        const wc = new WebhookClient('857856391528316938', 'EN3jEXAvuGpkcQmtLZc2FRdNdxad5h4Md0HSLa6Y4b2-dMXJiW0FbMDX9Fta1W-uziWx')
        const embed = new MessageEmbed().setTitle(`${message.author.username} Sent This!`).setColor(`${color}`).setTimestamp().setDescription(args.join(" "))
        wc.send({
            username: message.author.tag,
            avatarURL: message.author.displayAvatarURL({ dynamic: true }),
            embeds: [embed]
        })
    }
}