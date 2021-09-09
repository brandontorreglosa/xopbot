const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: "rps",
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    aliases: [],
    cooldown: 5,
    description: "play rock paper sciccors",
    async execute(client, message, cmd, args, Discord) {
        const embed = new Discord.MessageEmbed()
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
            .setTitle("Lets Play Rock Paper Scissors")
            .setDescription("Play Rock Paper Scissors Must React!")
            .setTimestamp()
        let msg = await message.lineReplyNoMention(embed)
        await msg.react("🗻")
        await msg.react("✂")
        await msg.react("📄")

        const filter = (reaction, user) => {
            return ['🗻', '✂', '📄'].includes(reaction.emoji.name) && user.id === message.author.id;
        }
        const choices = ["🗻", "✂", "📄"]
        const me = choices[Math.floor(Math.random() * choices.length)]
        msg.awaitReactions(filter, { max: 1, time: 8000, errors: ["time"] }).then(
            collected => {
                const reaction = collected.first()
                if ((reaction.emoji.name === '🗻' && me === "✂") ||
                    (reaction.emoji.name === "✂" && me === "📄") ||
                    (reaction.emoji.name === "📄" && me === "🗻")) {
                    const usewon = new Discord.MessageEmbed()
                        .setTimestamp()
                        .setColor('#c30202')
                        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                        .setDescription(`**You Won! 😆**`)
                    message.lineReplyNoMention(usewon)
                } else {
                    const uselost = new Discord.MessageEmbed()
                        .setTimestamp()
                        .setColor('#c30202')
                        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                        .setDescription(`**You Lost! 😢**`)
                    message.lineReplyNoMention(uselost)
                }


            }
        )

            .catch(collected => {
                const nogam = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor('#c30202')
                    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`**Game \`Ended\` Due To No Response!**`)
                message.lineReplyNoMention(nogam)
            })
    }


}