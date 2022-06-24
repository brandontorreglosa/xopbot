const { XOPSnake } = require("xoppack")
const color = process.env.Color;
module.exports = {
    name: "snake",
    cooldown: 10,
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    description: "snake in discord!",
    async execute(client, message, cmd, args, Discord) {
        new XOPSnake({ message: message, embed: { color: `${color}`, OverTitle: "**Game Over!**", }, snake: { head: '🔴', body: '🟥', tail: '🔴' }, emojis: { board: '⬛', food: '🍌', up: '⬆️', right: '➡️', down: '⬇️', left: '⬅️', }, othersuserMessage: '**You Are Not Allowed To Use The Buttons For The Snake Game!**', }).startGame();
    },
};