const { MessageButton } = require("discord-buttons");
const disbutpages = require("discord-embeds-pages-buttons")
const color = process.env.Color;
module.exports = {
    name: 'utility',
    aliases: ['util', 'utils'],
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    async execute(client, message, cmd, args, Discord) {
        message.react('⚙');

        const button = new MessageButton()
            .setStyle('url')
            .setURL('https://xopbot-gg.glitch.me/')
            .setLabel('Website')
            .setEmoji(`💻`)

        const embed3 = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
            //.setTitle('__⚙ Utility__')
            .setColor(`${color}`)
            .setDescription('**__⚙ Utility (9)__** \n[ticket](https://xopbot-gg.glitch.me/) \n__***Generates A Ticket!***__ \n[webhook](https://xopbot-gg.glitch.me/) \n__***Send From A Webhook!***__ \n[xopchat](https://xopbot-gg.glitch.me/) \n__***Request For Xopchat!***__ \n[afk](https://xopbot-gg.glitch.me/) \n__***Get AFK Status!***__ \n[suggest](https://xopbot-gg.glitch.me/) \n__***Make Suggestions!***__')
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

        const embed4 = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
            //.setTitle('__⚙ Utility__')
            .setColor(`${color}`)
            .setDescription('**__⚙ Utility (9)__** \n[nickname](https://xopbot-gg.glitch.me/) \n__***Change Nickname!***__ \n[anime](https://xopbot-gg.glitch.me/) \n__***Search For Anime!***__ \n[wiki](https://xopbot-gg.glitch.me/) \n__***Search On Wiki!***__ \n[google](https://xopbot-gg.glitch.me/) \n__***Search On Google!***__')
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

            const pages = [embed3, embed4]
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