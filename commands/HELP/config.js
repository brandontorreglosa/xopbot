const { MessageButton } = require("discord-buttons");
const disbutpages = require("discord-embeds-pages-buttons")
const color = process.env.Color;
module.exports = {
    name: 'config',
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    async execute(client, message, cmd, args, Discord) {
        message.react('🌘');
        const embed15 = new Discord.MessageEmbed().setThumbnail(client.user.displayAvatarURL()).setTimestamp().setColor(`${color}`).addFields({ name: '`⚙️ | Config (8)`', value: '\n[antiwords](https://xopbot.glitch.me/) \n**Set A `Antiword`** \n[antilink](https://xopbot.glitch.me/) \n**Set A `Antilink`** \n[autoany](https://xopbot.glitch.me/) \n**Fetch Any `Subreddit`** \n[joinchannel](https://xopbot.glitch.me/) \n**Set A `Join Channel`**' }).setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
        const embed16 = new Discord.MessageEmbed().setThumbnail(client.user.displayAvatarURL()).setTimestamp().setColor(`${color}`).addFields({ name: '`⚙️ | Config (8)`', value: '\n[leavechannel](https://xopbot.glitch.me/) \n**Set A `Leave Channel`** \n\[joinmessage](https://xopbot.glitch.me/) \n**Set A `Join Message`** \n\[leavemessage](https://xopbot.glitch.me/) \n**Set A `Leave Message`** \n[setprefix](https://xopbot.glitch.me/) \n**Set A `Custom Prefix`**' }).setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
        const pages = [embed15, embed16]
        disbutpages.pages(message, pages, { timeout: 540 * 1000, buttons: { delete: { style: "red", emoji: "❌", text: "Delete" }, forward: { style: "blurple", emoji: "⏩", text: "Forward" }, backward: { style: "blurple", emoji: "⏪", text: "Backward" } }, extraRows: [], extraPos: "below", message: "", ephemeral: "**Button Failure! Reasons: \n1.`Not Your Embed!`\n2.`Buttons Timed OUT!`**", })
    }
}