const { tictactoe } = require('reconlx')
const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: 'tictactoe',
    cooldown: 10,
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    premium: true,
    async execute(client, message, cmd, args, Discord) {
        const member = message.mentions.users.first()
        if (!member) return message.lineReplyNoMention({ content: '**`(prefix)tictactoe <@user>`**' })

        new tictactoe({
            player_two: member,
            message: message
        })
    }
}