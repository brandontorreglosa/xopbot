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
            .setTitle(`OMG! You Just Got Rickrolled By ${message.author.username}`)
            .setImage('https://media1.tenor.com/images/23aeaaa34afd591deee6c163c96cb0ee/tenor.gif?itemid=7220603')
            .setFooter('You Just Got Rickrolled 😆')
            user.send(embed)
    }
}