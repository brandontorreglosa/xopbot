const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: 'rob',
    permissions: ["SEND_MESSAGES"],
    cooldown: 20,
    description: "Rob Command!",
    async execute(client, message, cmd, args, Discord) {
        const user = message.mentions.users.first()
        if (!args[0]) {
            return message.lineReplyNoMention('**`(prefix)rob <@user>`**')
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
                .setDescription(`**Congrats You Have Stolen ${RobAmount} From ${user.username}! 💸**`)
            message.lineReplyNoMention(embed)
            client.add(message.author.id, RobAmount)
            client.rmv(user.id, RobAmount)
        } else {
            const LooseAmount = Math.floor(Math.random() * 2000)
            if ((await client.bal(message.author.id)) < LooseAmount) return message.lineReplyNoMention({ content: `**${message.author.username} Is Now In Debt For ${LooseAmount} Xocoins!**` });
            const embed1 = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#c30202')
                .setTitle(`${message.author.username}`)
                .setDescription(`**Awwww! You Just Lost ${LooseAmount} Better Luck Next Time! 💸**`)
            message.lineReplyNoMention(embed1)
            client.rmv(message.author.id, LooseAmount)
        }
    }
}