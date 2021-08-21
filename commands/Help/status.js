const { MessageButton } = require("discord-buttons");

module.exports = {
    name: 'status',
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    async execute(client, message, cmd, args, Discord) {
        message.react('💹');

        const button = new MessageButton()
            .setStyle('url')
            .setURL('https://xopbot-gg.glitch.me/')
            .setLabel('Website')

        const embed5 = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
            //.setTitle('__📈 Status__')
            .setColor('#c30202')
            .setDescription('**__📈 Status (6)__** \n[mcserver](https://xopbot-gg.glitch.me/) \n__***Get Real-Time Status Of MCServers!***__  \n[statusping](https://xopbot-gg.glitch.me/) \n__***Get A Status Ping Of Your Server!***__ \n[serverinfo](https://xopbot-gg.glitch.me/) \n__***Get Your Servers Information!***__ \n[botinfo](https://xopbot-gg.glitch.me/) \n__***Get The Bots Information!***__ \n[covid](https://xopbot-gg.glitch.me/) \n__***Get Covid Information Of A Area!***__ \n[userinfo](https://xopbot-gg.glitch.me/) \n__***Get A Real User Info!***__')
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

        await message.channel.send(embed5)
    }
}