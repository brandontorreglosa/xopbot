const { MessageButton } = require("discord-buttons");
const disbutpages = require("discord-embeds-pages-buttons")
const color = process.env.Color;
module.exports = {
    name: 'economy',
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    async execute(client, message, cmd, args, Discord) {
        message.react('💵');

        const embed9 = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
            // .setTitle('__🤑 Economy__')
            .setColor(`${color}`)
            .addFields(
                { name: '__🤑 Economy (20)__', value: '\n[profile](https://xopbot.glitch.me/) \n__***Get Your Profile***__ \n[balance](https://xopbot.glitch.me/) \n__***Your Total Balance!***__  \n[deposit](https://xopbot.glitch.me/) \n__***Deposit Into Your Bank!***__  \n[withdraw](https://xopbot.glitch.me/) \n__***Withdraw From Your Bank!***__  \n[beg](https://xopbot.glitch.me/) \n__***Beg For Xocoins!***__' }
            )
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

        const embed10 = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
            // .setTitle('__🤑 Economy__')
            .setColor(`${color}`)
            .addFields(
                { name: '__🤑 Economy (20)__', value: '\n[rob](https://xopbot.glitch.me/) \n__***Rob A Users Xocoins!***__  \n[give](https://xopbot.glitch.me/) \n__***Give Some Xocoins!***__  \n[search](https://xopbot.glitch.me/) \n__***Search For Xocoins!***__ \n[work](https://xopbot.glitch.me/) \n__***Work For Xocoins!***__ \n[inventory](https://xopbot.glitch.me/) \n__***View Your Inventory!***__' }
            )
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

        const embed11 = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
            // .setTitle('__🤑 Economy__')
            .setColor(`${color}`)
            .addFields(
                { name: '__🤑 Economy (20)__', value: '\n[doubleornothing](https://xopbot.glitch.me/) \n__***Make A Bet To XOPBOT!***__ \n[daily](https://xopbot.glitch.me/) \n__***Get Daily Xocoins!***__ \n[weekly](https://xopbot.glitch.me/) \n__***Get Weekly Xocoins!***__ \n[monthly](https://xopbot.glitch.me/) \n__***Get Monthly Xocoins!***__ \n[yearly](https://xopbot.glitch.me/) \n__***Get Yearly Xocoins!***__' }
            )
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

        const embed12 = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
            // .setTitle('__🤑 Economy__')
            .setColor(`${color}`)
            .addFields(
                { name: '__🤑 Economy (20)__', value: '\n[shop](https://xopbot.glitch.me/) \n__***View The Dealer\`s Shop!***__ \n[fish](https://xopbot.glitch.me/) \n__***Catch Fish To Get Paid!***__ \n[hunt](https://xopbot.glitch.me/) \n__***Hunt Animals For Cash!***__ \n[buy](https://xopbot.glitch.me/) \n__***Buy From The Shop!***__ \n[rich](https://xopbot.glitch.me/) \n__***The Richest Xocoins Users!***__' }
            )
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

        const pages = [embed9, embed10, embed12, embed11]
        disbutpages.pages(message, pages, {
            timeout: 540 * 1000,
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