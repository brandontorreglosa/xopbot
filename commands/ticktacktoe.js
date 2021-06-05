const tictactoe = require('reconlx')

module.exports = {
    name : 'tictactoe',
    permissions: ["SEND_MESSAGES"],
    premium: true,
    async execute(client, message, cmd, args, Discord) {
        const member = message.mentions.members.first() 
            if(!member)  return  message.channel.send('***Please Specify A Member!***')
        
        new tictactoe({
            player_two: member, 
            message: message
        })
    }
}