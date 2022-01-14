const { MessageButton } = require("discord-buttons");
const color = process.env.Color;
module.exports = {
    name: 'status',
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    async execute(client, message, cmd, args, Discord) {
        message.react('💹');

        const button = new MessageButton()
            .setStyle('url')
            .setURL('https://xopbot.glitch.me/')
            .setLabel('Website')
            .setEmoji(`💻`)

        const embed5 = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
            //.setTitle('__📈 Status__')
            .setColor(`${color}`)
            .setDescription('**__📈 Status (6)__** \n[mcserver](https://xopbot.glitch.me/) \n__***Get MCSERVERS Stats!***__  \n[statusping](https://xopbot.glitch.me/) \n__***Get A Status Ping!***__ \n[serverinfo](https://xopbot.glitch.me/) \n__***Get Server Info!***__ \n[botinfo](https://xopbot.glitch.me/) \n__***Get Bot Info!***__ \n[covid](https://xopbot.glitch.me/) \n__***Get Covid Info!***__ \n[userinfo](https://xopbot.glitch.me/) \n__***Get User Info!***__')
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

        await message.channel.send(embed5, button)
    }
}