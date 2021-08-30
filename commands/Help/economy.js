const { MessageButton } = require("discord-buttons");
const disbutpages = require("discord-embeds-pages-buttons")
module.exports = {
    name: 'economy',
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    async execute(client, message, cmd, args, Discord) {
        message.react('💵');

        const embed9 = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
            // .setTitle('__🤑 Economy__')
            .setColor('#c30202')
            .addFields(
                { name: '__🤑 Economy (10)__', value: '\n[profile](https://xopbot-gg.glitch.me/) \n__***Get Your Profile***__ \n[balance](https://xopbot-gg.glitch.me/) \n__***Your Total Balance!***__  \n[deposit](https://xopbot-gg.glitch.me/) \n__***Deposit Into Your Bank!***__  \n[withdraw](https://xopbot-gg.glitch.me/) \n__***Withdraw From Your Bank!***__  \n[beg](https://xopbot-gg.glitch.me/) \n__***Beg For Xocoins!***__' }
            )
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

        const embed10 = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
            // .setTitle('__🤑 Economy__')
            .setColor('#c30202')
            .addFields(
                { name: '__🤑 Economy (10)__', value: '\n[rob](https://xopbot-gg.glitch.me/) \n__***Rob A Users Xocoins!***__  \n[give](https://xopbot-gg.glitch.me/) \n__***Give Some Xocoins!***__  \n[search](https://xopbot-gg.glitch.me/) \n__***Search For Xocoins, In Places!***__ \n[work](https://xopbot-gg.glitch.me/) \n__***Work For Xocoins!***__ \n[daily](https://xopbot-gg.glitch.me/) \n__***Get Daily Xocoins!***__' }
            )
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

        const pages = [embed9, embed10]
        disbutpages.pages(message, pages, {
            timeout: 120 * 1000,
            buttons: {
                delete: {
                    style: "red",
                    emoji: "❌",
                    text: "Delete"
                },
                forward: {
                    style: "blurple",
                    emoji: "⏩",
                    text: "Forward"
                },
                backward: {
                    style: "blurple",
                    emoji: "⏪",
                    text: "Backward"
                }
            },
            extraRows: [],
            extraPos: "below",
            message: "",
            ephemeral: "**Button Failure! Reasons: \n1.`Not Your Embed!`\n2.`Buttons Timed OUT!`**",
        })
    }
}