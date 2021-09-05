const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: 'doubleornothing',
    cooldown: 25,
    aliases: ['dbornot', 'doubleorno'],
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    description: "Game Command",
    async execute(client, message, cmd, args, Discord) {
        if (!args[0]) {
            const nopr = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#c30202')
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**\`(prefix)doubleornothing <xocoins>\`**`)
            return message.lineReplyNoMention(nopr)
        }

        const amountToBet = parseInt(args[0])

        if (isNaN(args[0])) {
            const notnum = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#c30202')
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**\`${amountToBet}\` Is Not A Number!**`)
            return message.lineReplyNoMention(notnum)
        }

        if (await client.bal(message.author.id) < amountToBet) {
            const xocnom = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#c30202')
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**You Dont Have \`${amountToBet}\` Xocoins To Bet!**`)
            return message.lineReplyNoMention(xocnom)
        }

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
                .setDescription(`**Congrats You Have Won \`${winAmount}\` Xocoins!**`)
            message.lineReplyNoMention(embed)
            client.add(message.author.id, winAmount)
        } else {
            const embed1 = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#c30202')
                .setTitle()
                .setDescription(`Awwww! You Just Lost \`${amountToBet}\` Xocoins To A Bet!`)
            message.lineReplyNoMention(embed1)
            client.rmv(message.author.id, amountToBet)
        }
    }
}