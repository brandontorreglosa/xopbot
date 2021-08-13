const { tictactoe } = require('reconlx')

module.exports = {
    name: 'tictactoe',
    cooldown: 10,
    permissions: ["SEND_MESSAGES"],
    premium: true,
    async execute(client, message, cmd, args, Discord) {
        const member = message.mentions.members.first()
        if (!member) return message.channel.send({ content: '***Please Specify A Member!***' })

        new tictactoe({
            player_two: member,
            message: message
        })
    }
}