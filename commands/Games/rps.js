const lineReplyNoMention = require('discord-reply');
const { XOPRockPaperScissors } = require('discord-gamecord')
module.exports = {
    name: "rps",
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    aliases: [],
    cooldown: 10,
    description: "play rock paper sciccors",
    async execute(client, message, cmd, args, Discord) {

        new XOPRockPaperScissors({
            message: message,
            opponent: message.mentions.users.first(),
            embed: {
                title: 'Rock Paper Scissors Game',
                description: 'Press A Button Below To Start!',
                color: '#c30202',
            },
            buttons: {
                rock: '🗻',
                paper: '📄',
                scissors: '✂',
            },
            othersuserMessage: '**You Are Not Allowed To Use Buttons For This Message!**',
            chooseMessage: '**You Choose {emoji}!**',
            noChangeMessage: '**You Cannot Change Your Button Selection!**',
            askerMessage: '**Hey {opponent}, {challenger} Challenged You For A Game Of Rock Paper Scissors!**',
            cancelMessage: '**Looks Like They Didn\`t Want To Play!**',
            timerEndMessage: '**Since The Opponent Didnt Answer, I Ended The Game!**',
            drawMessage: '**The Game Ended With a Draw!**',
            winMessage: '**{winner} Won The Game!**',
            gameEndMessage: '**The Game Was Unfinished!**',
        }).startGame();
    }
}
//         const embed = new Discord.MessageEmbed()
//             .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
//             .setTitle("Lets Play Rock Paper Scissors")
//             .setDescription("Play Rock Paper Scissors Must React!")
//             .setTimestamp()
//         let msg = await message.lineReplyNoMention(embed)
//         await msg.react("🗻")
//         await msg.react("✂")
//         await msg.react("📄")

//         const filter = (reaction, user) => {
//             return ['🗻', '✂', '📄'].includes(reaction.emoji.name) && user.id === message.author.id;
//         }
//         const choices = ["🗻", "✂", "📄"]
//         const me = choices[Math.floor(Math.random() * choices.length)]
//         msg.awaitReactions(filter, { max: 1, time: 8000, errors: ["time"] }).then(
//             collected => {
//                 const reaction = collected.first()
//                 if ((reaction.emoji.name === '🗻' && me === "✂") ||
//                     (reaction.emoji.name === "✂" && me === "📄") ||
//                     (reaction.emoji.name === "📄" && me === "🗻")) {
//                     const usewon = new Discord.MessageEmbed()
//                         .setTimestamp()
//                         .setColor('#c30202')
//                         .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
//                         .setDescription(`**You Won! 😆**`)
//                     message.lineReplyNoMention(usewon)
//                 } else {
//                     const uselost = new Discord.MessageEmbed()
//                         .setTimestamp()
//                         .setColor('#c30202')
//                         .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
//                         .setDescription(`**You Lost! 😢**`)
//                     message.lineReplyNoMention(uselost)
//                 }


//             }
//         )

//             .catch(collected => {
//                 const nogam = new Discord.MessageEmbed()
//                     .setTimestamp()
//                     .setColor('#c30202')
//                     .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
//                     .setDescription(`**Game \`Ended\` Due To No Response!**`)
//                 message.lineReplyNoMention(nogam)
//             })
//     }


// }