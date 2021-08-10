const Discord = require("discord.js");

module.exports = {
    name: "drake",
    permissions: ["SEND_MESSAGES"],
    cooldown: 3,
    description: "Image Manipulation Command",
    async execute(client, message, cmd, args, Discord) {
        if (!args[0]) {
            return message.reply('**You Must Do `x!drake text1 / text2` \nYou Must Add The / For It Work!**')
        }
        let splitArgs = args.join(' ').split('/');
        const text = splitArgs[0];
        if (!text) {
            return message.channel.send("**Enter Some Text!**")
        }
        if (text.length > 70) return message.reply(`**You Cant Go Over 70 Characters!**`)

        const text2 = splitArgs[1];
        if (!text2) {
            return message.channel.send("**Enter The Second Text!**")
        }
        if (text2.length > 70) return message.reply(`**You Cant Go Over 70 Characters!**`)

        message.channel.send({ files: [{ attachment: `https://api.popcatdev.repl.co/drake?text1=${text}&text2=${text2}`, name: "xopbotdrake.png" }] });
    }
}