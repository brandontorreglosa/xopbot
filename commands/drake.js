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

        const text2 = splitArgs[1];
        if (!text2) {
            return message.channel.send("**Enter The Second Text!**")
        }

        message.channel.send({ files: [{ attachment: `https://api.popcatdev.repl.co/drake?text1=${text}&text2=${text2}`, name: "xopbotdrake.png" }] });
    }
}