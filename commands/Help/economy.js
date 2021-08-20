const { MessageButton } = require("discord-buttons");

module.exports = {
    name: 'economy',
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    async execute(client, message, cmd, args, Discord) {
        message.react('💵');

        const button = new MessageButton()
            .setStyle('url')
            .setURL('https://xopbot-gg.glitch.me/')
            .setLabel('Website')

        const embed9 = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
            // .setTitle('__🤑 Economy__')
            .setColor('#c30202')
            .addFields(
                { name: '__🤑 Economy (10)__', value: '\n[profile](https://xopbot-gg.glitch.me/) \n__***Get Your Profile***__ \n[balance](https://xopbot-gg.glitch.me/) \n__***Get Your Banks And Wallet Balance!***__  \n[deposit](https://xopbot-gg.glitch.me/) \n__***Deposit Xocoins Into Your Bank!***__  \n[withdraw](https://xopbot-gg.glitch.me/) \n__***Withdraw Money Out Of Your Bank!***__  \n[beg](https://xopbot-gg.glitch.me/) \n__***Beg From XOPBOT For Xocoins!***__ \n[coins-set](https://xopbot-gg.glitch.me/) \n__***Private Command!***__  \n[give](https://xopbot-gg.glitch.me/) \n__***Private Command!***__  \n[search](https://xopbot-gg.glitch.me/) \n__***Search For Xocoins On Locations!***__ \n[work](https://xopbot-gg.glitch.me/) \n__***Work For Xocoins!***__ \n[daily](https://xopbot-gg.glitch.me/) \n__***Get Daily Xocoins!***__' }
            )
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

        await message.channel.send(embed9, button)
    }
}