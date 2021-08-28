const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: "reverse",
    cooldown: 3,
    aliases: ['rv'],
    permissions: ["SEND_MESSAGES"],
    description: "Reverses the given text",
    async execute(client, message, cmd, args, Discord) {
        const text = args.join(" ")
        if (!text) return message.reply({ content: "**`(prefix)reverse <text>`**", allowedMentions: { repliedUser: true }  })
        let Rarray = text.split("")
        let reverseArray = Rarray.reverse()
        let result = reverseArray.join("")
        const embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#c30202')
            .setTitle('Reverse Conversion')
            .setDescription(`**${result}**`)
        message.lineReplyNoMention(embed)
    }
}