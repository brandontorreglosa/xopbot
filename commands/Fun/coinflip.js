const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "coinflip",
    cooldown: 2,
    aliases: ['cf'],
    permissions: ["SEND_MESSAGES"],
    description: "flips a coin!",
    async execute(client, message, cmd, args, Discord) {
        const choices = ["Heads", "Tails"];
        const choice = choices[Math.floor(Math.random() * choices.length)];
        let embed = new MessageEmbed()
            .setColor('#c30202')
            .setTimestamp()
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
            .setTitle("Coinflip!")
            .setDescription(`You Flipping Flipped **${choice}**!`)
        message.channel.send({ embeds: [embed] })
    }
}