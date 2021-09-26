const lineReplyNoMention = require('discord-reply')
const { XOPRockPaperScissors } = require('xoppack')
const color = process.env.Color;
module.exports = {
    name: "rps",
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    aliases: [],
    cooldown: 10,
    description: "play rock paper sciccors",
    async execute(client, message, cmd, args, Discord) {
        if (!args[0]) {
            const noch = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor(`${color}`)
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**\`(prefix)rps <@user>\`**`)
            return message.lineReplyNoMention(noch)
        }
        new XOPRockPaperScissors({
            message: message,
            opponent: message.mentions.users.first(),
            embed: {
                title: 'Rock Paper Scissors Game',
                description: '**Press A Button Below To Start!**',
                color: `${color}`,
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
            timerEndMessage: '**Since The Opponent Didnt Answer I Ended The Game!**',
            drawMessage: '**The Game Ended With a Draw!**',
            winMessage: '**{winner} Won The Game!**',
            gameEndMessage: '**The Game Was Unfinished!**',
        }).startGame();
    },
};