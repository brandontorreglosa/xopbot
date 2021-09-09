const { Connect4 } = require("discord-gamecord")

module.exports = {
    name: "connect4",
    cooldown: 10,
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    description: "connect4 in discord!",
    async execute(client, message, cmd, args, Discord) {
        new Connect4({
            message: message,
            opponent: message.mentions.users.first(),
            embed: {
                title: 'Connect 4 v2',
                color: '#c30202',
            },
            emojis: {
                player1: '🔴',
                player2: '🟡'
            },
            turnMessage: 'Its Now **{player}** Turn!',
            winMessage: '**{winner}** Won The Game!',
            gameEndMessage: 'The Game Was Unfinished!',
            drawMessage: 'The Game Ended With A Draw!!',
            askMessage: 'Hey **{opponent}**, **{challenger}** Challenged You For A Game Of Connect 4!',
            cancelMessage: 'Looks Like They Didn\`t Want To Play!',
            timeEndMessage: 'Since The Opponent Didnt Answer, I Ended The Game!',
        }).startGame();
    },
};