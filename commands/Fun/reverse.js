const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
    name: "reverse",
    cooldown: 5,
    aliases: ['rv'],
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS", "MANAGE_MESSAGES"],
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
        if (message.content.match("erog") || message.content.match("boob") || message.content.match("stit") || message.content.match("kcuf") || message.content.match("tihs") || message.content.match("aggin") || message.content.match("eoh") || message.content.match("hctib") || message.content.match("kcid") || message.content.match("yag") || message.content.match("naibsel") || message.content.match("bojwolb") || message.content.match("nrop") || message.content.match("tnuc") || message.content.match("@")) {
            message.delete();
            const embed1 = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor(`${color}`)
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**Im Not Allowed To Say Bad Words Or Ping! Lol Cry 😂**`)
            message.lineReplyNoMention(embed1)
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