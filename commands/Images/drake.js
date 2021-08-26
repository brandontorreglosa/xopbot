const Discord = require("discord.js");

module.exports = {
    name: "drake",
    permissions: ["SEND_MESSAGES"],
    cooldown: 10,
    description: "Image Manipulation Command",
    async execute(client, message, cmd, args, Discord) {
        if (!args[0]) {
            return message.reply({ content: '**You Must Do `x!drake text1 / text2` \nYou Must Add The / For It Work!**', allowedMentions: { repliedUser: true } })
        }
        let splitArgs = args.join(' ').split('/');
        const text = splitArgs[0];
        if (!text) {
            return message.reply({ content: "**Enter Some Text!**", allowedMentions: { repliedUser: true } })
        }
        if (text.length > 70) return message.reply({ content: `**You Cant Go Over 70 Characters!**`, allowedMentions: { repliedUser: true } })

        const text2 = splitArgs[1];
        if (!text2) {
            return message.reply({ content: "**Enter The Second Text!**", allowedMentions: { repliedUser: true } })
        }
        if (text2.length > 70) return message.reply({ content: `**You Cant Go Over 70 Characters!**`, allowedMentions: { repliedUser: true } })

        message.channel.send({ files: [{ attachment: `https://api.popcatdev.repl.co/drake?text1=${text}&text2=${text2}`, name: "xopbotdrake.png" }] });
    }
}