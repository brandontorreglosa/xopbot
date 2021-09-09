const { tictactoe } = require('reconlx')
const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: 'tictactoe',
    cooldown: 10,
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    premium: true,
    async execute(client, message, cmd, args, Discord) {
        const user = message.mentions.users.first()
        if (!user) {
            const nopr = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#c30202')
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**\`(prefix)tictactoe <@user>\`**`)
            return message.lineReplyNoMention(nopr)
        }

        new tictactoe({
            player_two: user,
            message: message
        })
    }
}