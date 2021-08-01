const Discord = require("discord.js");

module.exports = {
    name: "batmanslap",
    permissions: ["SEND_MESSAGES"],
    aliases: ['bmanslap', 'batslap'],
    cooldown: 3,
    description: "Image Manipulation Command",
    async execute(client, message, cmd, args, Discord) {

        if(!args[0]) {
            return message.reply('**`(preifx)batmanslap @user{optional} text1 / text2` \nMust Add / For It To Work!**')
        }

        const mention = message.mentions.members.first() || message.member;
        const avatar = mention.user.displayAvatarURL({ size: 2048, format: "png" });

        let splitargs = args.join(' ').split('/');

        const text = splitargs[0];
        if (!text) {
            return message.channel.send("**Enter Some Text!**")
        }
        if (text.length > 50) return message.reply(`**You Cant Go Over 50 Characters!**`)

        const text2 = splitargs[1];
        if (!text2) {
            return message.channel.send("**Enter The Second Text!**")
        }
        if (text2.length > 50) return message.reply(`**You Cant Go Over 50 Characters!**`)

        message.channel.send({ files: [{ attachment: `https://vacefron.nl/api/batmanslap?text1=${text}&text2=${text2}&batman=${avatar}&robin=https://cdn.discordapp.com/avatars/831824859066925087/be9c11f1817e227ac146cbacd0660aac.webp`, name: "xopbotdockofshame.png" }] });
    }
}