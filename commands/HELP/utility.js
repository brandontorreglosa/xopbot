const { MessageButton } = require("discord-buttons");
const disbutpages = require("discord-embeds-pages-buttons");
const color = process.env.Color;
module.exports = {
    name: 'utility',
    aliases: ['util', 'utils'],
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    async execute(client, message, cmd, args, Discord) {
        message.react('⚙️');
        const button = new MessageButton().setStyle('url').setURL('https://xopbot.glitch.me/').setLabel('Website').setEmoji(`💻`)
        const embed3 = new Discord.MessageEmbed().setThumbnail(client.user.displayAvatarURL()).setTimestamp().setColor(`${color}`).setDescription('**`⛏️ | Utility (10)`** \n[ticket](https://xopbot.glitch.me/) \n**Generate A `Ticket`** \n[webhook](https://xopbot.glitch.me/) \n**Send A `Webhook`** \n[xopchat](https://xopbot.glitch.me/) \n**Request For `Xopchat`** \n[afk](https://xopbot.glitch.me/) \n**Get `AFK Status`** \n[suggest](https://xopbot.glitch.me/) \n**Make A `Suggestion`**').setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
        const embed4 = new Discord.MessageEmbed().setThumbnail(client.user.displayAvatarURL()).setTimestamp().setColor(`${color}`).setDescription('**`⛏️ | Utility (10)`** \n[nickname](https://xopbot.glitch.me/) \n**Change `Nickname`** \n[anime](https://xopbot.glitch.me/) \n**Search An `Anime`** \n[playstore](https://xopbot.glitch.me/) \n**Search The `Playstore`** \n[query](https://xopbot.glitch.me/) \n**Search All `Querys`** \n[imdb](https://xopbot.glitch.me/) \n**Find `Movie/Series Info`**').setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
        const pages = [embed3, embed4]
        disbutpages.pages(message, pages, { timeout: 540 * 1000, buttons: { delete: { style: "red", emoji: "❌", text: "Delete" }, forward: { style: "blurple", emoji: "⏩", text: "Forward" }, backward: { style: "blurple", emoji: "⏪", text: "Backward" } }, extraRows: [], extraPos: "below", message: "", ephemeral: "**Button Failure! Reasons: \n1.`Not Your Embed!`\n2.`Buttons Timed OUT!`**", })
    }
}