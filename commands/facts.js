const Discord = module.require("discord.js");
const Jimp = require("jimp");

module.exports = {
    name: "facts",
    permissions: ["SEND_MESSAGES"],
    cooldown: 3,
    description: "Another Fun Command",
    async execute(client, message, cmd, args, Discord) {
            if (message.channel.type === "dm") return;
            let text = args.join(' ')
            if (!text) {
                return message.reply('**You Need To Provide Some Text!**');
            }
            message.channel.send({files : [{attachment: `https://api.alexflipnote.dev/facts?text=${text}`, name: 'file.jpg'}]})
    }
};