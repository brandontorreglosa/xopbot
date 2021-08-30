const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: 'doubleornothing',
    cooldown: 25,
    aliases: ['dbornot', 'doubleorno'],
    permissions: ["SEND_MESSAGES"],
    description: "Game Command",
    async execute(client, message, cmd, args, Discord) {
        if (!args[0]) return message.lineReplyNoMention({ content: '**`(prefix)doubleornothing <xocoins>`**' })

        if (isNaN(args[0])) return message.lineReplyNoMention({ content: '**That Is Not A Number!**' })

        const amountToBet = parseInt(args[0])

        if (await client.bal(message.author.id) < amountToBet) return message.lineReplyNoMention({ content: '**You Dont Have That Many Xocoins!**' })

        function random() {
            const num = Math.floor(Math.random() * 2)
            return num === 1
        }

        if (random() === true) {
            const winAmount = amountToBet * 2
            const embed = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#c30202')
                .setTitle(`${message.author.username}`)
                .setDescription(`**Congrats You Have Won ${winAmount} Xocoins!**`)
            message.lineReplyNoMention(embed)
            client.add(message.author.id, winAmount)
        } else {
            const embed1 = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#c30202')
                .setTitle()
                .setDescription(`Awwww! You Just Lost ${amountToBet} Xocoins To A Bet!`)
            message.lineReplyNoMention(embed1)
            client.rmv(message.author.id, amountToBet)
        }
    }
}