const Discord = require("discord.js");

module.exports = {
    name: "drake",
    permissions: ["SEND_MESSAGES"],
    cooldown: 3,
    description: "Image Manipulation Command",
    async execute(client, message, cmd, args, Discord) {
    const text = args.slice(0).join(" ");
    if (!text) {
        return message.channel.send("**Enter Some Text!**")
    }
    if (text.length > 15) return message.channel.send('**You Are Not Allowed To Go Over 15 Characters!**');

    const text2 = args.slice(1).join(" ");
    if (!text2) {
        return message.channel.send("**Enter The Second Text!**")
    }
    if (text2.length > 15) return message.channel.send('**You Are Not Allowed To Go Over 15 Characters!**');

        message.channel.send({ files: [{ attachment: `https://api.popcatdev.repl.co/drake?text1=${text}&text2=${text2}`, name: "xopbotdrake.png"}]});
    }
    }