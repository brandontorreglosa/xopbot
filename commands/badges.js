module.exports = {
    name: 'badges',
    permissions: ["SEND_MESSAGES"],
    cooldown: 3,
    aliases: ['usersbadge'],
    async execute(client, message, cmd, args, Discord) {
        const user = message.mentions.users.first() || message.author;

        const flags = user.flags.toArray();

        console.log(flags);

        const badgesuser = new Discord.MessageEmbed()
            .setColor('#c30202')
            .setTimestamp()
            .setDescription(`${user}'s badges: ${flags.join(', ')}`)
            .setFooter(`Requested By: ${message.author.tag}`, message.author.displayAvatarURL())
        message.channel.send(badgesuser)
    }
}

