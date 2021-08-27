const Discord = require("discord.js");

module.exports = {
    name: "m&m",
    aliases: ['mnm'],
    permissions: ["SEND_MESSAGES"],
    cooldown: 5,
    description: "Image Manipulation Command",
    async execute(client, message, cmd, args, Discord) {

        const mention = message.mentions.members.first() || message.member;
        const avatar = mention.user.displayAvatarURL({ size: 2048, format: "png" });


        const embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setTitle('M&M')
            .setColor('#c30202')
            .setImage(`https://api.popcatdev.repl.co/mnm?image=${avatar}`)

        message.channel.send(embed)

        //message.channel.send({ files: [{ attachment: `https://api.popcatdev.repl.co/mnm?image=${avatar}`, name: "xopbotm&m.png" }] });
    }
}