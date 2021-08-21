module.exports = {
    name: 'utility',
    aliases: ['util', 'utils'],
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    async execute(client, message, cmd, args, Discord) {
        message.react('⚙');

        const button = new MessageButton()
        .setStyle('url')
        .setURL('https://xopbot-gg.glitch.me/')
        .setLabel('Website')

        const embed3 = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
            //.setTitle('__⚙ Utility__')
            .setColor('#c30202')
            .setDescription('**__⚙ Utility (9)__** \n[ticket](https://xopbot-gg.glitch.me/) \n__***Generates Private Text Channel!***__ \n[webhook](https://xopbot-gg.glitch.me/) \n__***Send Something From A Webhook!***__ \n[xopchat](https://xopbot-gg.glitch.me/) \n__***Request For Xopchat!***__ \n[afk](https://xopbot-gg.glitch.me/) \n__***Get AFK Status!***__ \n[suggest](https://xopbot-gg.glitch.me/) \n__***Make A Suggestion On A Server!***__ \n[nickname](https://xopbot-gg.glitch.me/) \n__***Change Someones Nickname!***__ \n[anime](https://xopbot-gg.glitch.me/) \n__***Search For Anime!***__ \n[wiki](https://xopbot-gg.glitch.me/) \n__***Search Something On Wiki!***__ \n[google](https://xopbot-gg.glitch.me/) \n__***Search Something On Google!***__')
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

        await message.channel.send(embed3, button)
    }
}