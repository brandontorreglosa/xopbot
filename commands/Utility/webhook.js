const { WebhookClient, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'webhook',
    cooldown: 5,
    permissions: ["MANAGE_CHANNELS"],
    async execute(client, message, cmd, args, Discord) {
        if (!args[0]) {
            return message.reply({ content: 'Please Enter A Text To Send!', allowedMentions: { repliedUser: true } })
        }
        const wc = new WebhookClient('857856391528316938', 'EN3jEXAvuGpkcQmtLZc2FRdNdxad5h4Md0HSLa6Y4b2-dMXJiW0FbMDX9Fta1W-uziWx')
        const embed = new MessageEmbed()
            .setTitle(`${message.author.username} Sent This!`).setColor('#c30202').setTimestamp().setDescription(args.join(" "))
        wc.send({
            username: message.author.tag,
            avatarURL: message.author.displayAvatarURL({ dynamic: true }),
            embeds: [embed]
        })
    }
}