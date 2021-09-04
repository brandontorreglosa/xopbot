const { hangman } = require('reconlx')
const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: 'hangman',
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES"],
    cooldown: 3,
    //premium: true,
    async execute(client, message, cmd, args, Discord) {
        const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
        if (!channel) return message.lineReplyNoMention({ content: '**Please Specify A Channel!**' }) // allowedMentions: { repliedUser: true } })
        const word = args.slice(1).join(" ")
        if (!word) return message.lineReplyNoMention({ content: '**Please Specify A Word To Guess.**' }) // allowedMentions: { repliedUser: true } })

        const hang = new hangman({
            message: message,
            word: word,
            client: client,
            channelID: channel.id,
        })

        hang.start();
    }
}