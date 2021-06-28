const Discord = require("discord.js");
const Jimp = require("jimp");

module.exports = {
    name: "drake",
    permissions: ["SEND_MESSAGES"],
    cooldown: 3,
    description: "Another Fun Command",
    async execute(client, message, cmd, args, Discord)  {
            if (message.channel.type === "dm") return;
            let text = args[0];
            let text2 = args[1];
            if (!text) {
                return message.reply('`Usage: (prefix)drake <msg1> <msg2>`');
            }
            message.channel.send({files : [{attachment: `https://api.alexflipnote.dev/drake?top=${text}&bottom=${text2}`, name: 'file.jpg'}]})
    }
};