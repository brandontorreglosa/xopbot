const Discord = module.require("discord.js");
const Jimp = require("jimp");

module.exports = {
    name: "phb",
    permissions: ["SEND_MESSAGES"],
    cooldown: 3,
    description: "Another Fun Command",
    async execute(client, message, cmd, args, Discord)  {
            if (message.channel.type === "dm") return;
            let text = args[0];
            let text2 = args[1];
            if (!text) {
                return message.reply('**You Need To Provide The First Text!**');
            }
            if (!text2) {
                return message.channel.send('**You Need To Provide The Second Text!**')
            }
            message.channel.send({files : [{attachment: `https://api.alexflipnote.dev/pornhub?text=${text}&text2=${text2}`, name: 'file.jpg'}]})
    }
};