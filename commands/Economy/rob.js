const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: 'rob',
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    cooldown: 20,
    description: "Rob Command!",
    async execute(client, message, cmd, args, Discord) {
        const user = message.mentions.users.first()
        if (!args[0]) {
            return message.lineReplyNoMention({ content: '**`(prefix)rob <@user>`**' })
        }

        if (message.mentions.users.first().bot) {
            return message.lineReplyNoMention({ content: '**You Can Not Rob Bot`s . Thats Too Evil!**' })
        }

        function random() {
            const num = Math.floor(Math.random() * 2)
            return num === 1
        }

        if (random() === true) {
            const RobAmount = Math.floor(Math.random() * 3000)
            if ((await client.bal(user.id)) < RobAmount) return message.lineReplyNoMention({ content: `**${user.username} Has Less Than ${RobAmount} Xocoins For You To Rob!**` });
            const embed = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#c30202')
                .setTitle(`${message.author.username}`)
                .setDescription(`**Congrats You Have Stolen ${RobAmount} Xocoins From ${user.username}! 💸**`)
            message.lineReplyNoMention(embed)
            client.add(message.author.id, RobAmount)
            client.rmv(user.id, RobAmount)
        } else {
            const LooseAmount = Math.floor(Math.random() * 2000)
            if ((await client.bal(message.author.id)) < LooseAmount) {
                message.lineReplyNoMention({ content: `**${message.author.username} Is Now In Debt For ${LooseAmount} Xocoins!**` })
                client.debtadd(message.author.id, LooseAmount)
            }
            const embed1 = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#c30202')
                .setTitle(`${message.author.username}`)
                .setDescription(`**Awwww! You Just Lost ${LooseAmount} Xocoins Better Luck Next Time! 💸**`)
            message.lineReplyNoMention(embed1)
            client.rmv(message.author.id, LooseAmount)
            client.add(user.id, LooseAmount)
        }
    }
}