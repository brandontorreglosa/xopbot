const Discord = require("discord.js");
const Jimp = require("jimp");

module.exports = {
    name: "challenge",
    permissions: ["SEND_MESSAGES"],
    cooldown: 3,
    description: "Another Fun Command",
    async execute(client, message, cmd, args, Discord)  {
            if (message.channel.type === "dm") return;
            let text = args.join(" ");
            if (!text) {
                return message.reply('`Usage: (prefix)challenge <text>`');
            }
            message.channel.send({files : [{attachment: `https://api.alexflipnote.dev/challenge?text=${text}`, name: 'file.jpg'}]})
    }
};