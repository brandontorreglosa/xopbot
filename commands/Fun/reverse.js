const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
    name: "reverse",
    cooldown: 3,
    aliases: ['rv'],
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    description: "Reverses the given text",
    async execute(client, message, cmd, args, Discord) {
        const text = args.join(" ")
        if (!text) {
            const nopr = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor(`${color}`)
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**\`(prefix)reverse <text>\`**`)
            return message.lineReplyNoMention(nopr)
        }
        let Rarray = text.split("")
        let reverseArray = Rarray.reverse()
        let result = reverseArray.join("")
        const embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor(`${color}`)
            .setTitle('Reverse Conversion')
            .setDescription(`**${result}**`)
        message.lineReplyNoMention(embed)
    }
}