module.exports = {
    name: 'status',
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    async execute(client, message, cmd, args, Discord) {
        message.react('💹');

        const embed5 = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
            //.setTitle('__📈 Status__')
            .setColor('#c30202')
            .addFields(
                { name: '__📈 Status (6)__', value: '`mcserver`-__***Get Real-Time Status Of MCServers!***__  \n`statusping`-__***Get A Status Ping Of Your Server!***__ \n`serverinfo`-__***Get Your Servers Information!***__ \n`botinfo`-__***Get The Bots Information!***__ \n`covid`-__***Get Covid Information Of A Area!***__ \n`userinfo`-__***Get A Real User Info!***__' }
            )
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

        await message.channel.send({ embeds: [embed5] })
    }
}