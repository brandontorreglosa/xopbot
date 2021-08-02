module.exports = {
    name: 'rickroll',
    permissions: ["SEND_MESSAGES"],
    cooldown: 5,
    description: 'get Rickrolled',
    async execute(client, message, cmd, args, Discord) {
        const user = message.mentions.users.first() || message.author;
        const embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#c30202')
            .setTitle(`OMG! You Just Got Rickrolled By The Legendary ${message.author.username}`)
            .setImage('https://tenor.com/view/dance-moves-dancing-singer-groovy-gif-17029825')
            .setFooter('You Just Got Rickrolled 😆')
            user.send(embed)
    }
}