const { hangman } = require('reconlx')
const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: 'hangman',
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    cooldown: 3,
    //premium: true,
    async execute(client, message, cmd, args, Discord) {
        const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
        if (!channel) {
            const noch = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#c30202')
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**\`(prefix)hangman <word>\`**`)
            return message.lineReplyNoMention(noch)
        }
        const word = args.slice(1).join(" ")
        if (!word) {
            const noword = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#c30202')
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**Please Specify A Word To Guess!**`)
            return message.lineReplyNoMention(noword)
        }

        const hang = new hangman({
            message: message,
            word: word,
            client: client,
            channelID: channel.id,
        })

        hang.start();
    }
}