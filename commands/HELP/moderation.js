const { MessageButton } = require("discord-buttons");
const disbutpages = require("discord-embeds-pages-buttons");
const color = process.env.Color;
module.exports = {
    name: 'moderation',
    aliases: ['mod'],
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    async execute(client, message, cmd, args, Discord) {
        message.react('⚒️');
        const embed2 = new Discord.MessageEmbed().setThumbnail(client.user.displayAvatarURL()).setTimestamp().setColor(`${color}`).setDescription('**`🔨 | Moderation (20)`** \n[dm](https://xopbot.glitch.me/) \n**Dm A `Member`**  \n[ban](https://xopbot.glitch.me/) \n**Ban A `Member`** \n[unban](https://xopbot.glitch.me/) \n**Unban A `Member`**  \n[kick](https://xopbot.glitch.me/) \n**Kick A `Member`** \n[mute](https://xopbot.glitch.me/) \n**Mute A `Member`**').setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
        const embed3 = new Discord.MessageEmbed().setThumbnail(client.user.displayAvatarURL()).setTimestamp().setColor(`${color}`).setDescription('**`🔨 | Moderation (20)`** \n[unmute](https://xopbot.glitch.me/) \n**Unmute A `User`** \n[nuke](https://xopbot.glitch.me/) \n**Nuke A `Channel`** \n[clear](https://xopbot.glitch.me/) \n**Clear `Messages`**  \n[command](https://xopbot.glitch.me/) \n**Basic `Server Rules`**  \n[slowmode](https://xopbot.glitch.me/) \n**Set `Slowmode`**').setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
        const embed4 = new Discord.MessageEmbed().setThumbnail(client.user.displayAvatarURL()).setTimestamp().setColor(`${color}`).setDescription('**`🔨 | Moderation (20)`** \n[addrole](https://xopbot.glitch.me/) \n**Add Role To `User`** \n[removerole](https://xopbot.glitch.me/) \n**Remove Role From `User`** \n[createembed](https://xopbot.glitch.me/) \n**Make A `Custom Embed`** \n[createtext](https://xopbot.glitch.me/) \n**Make A `TXT Channel`** \n[createvoice](https://xopbot.glitch.me/) \n**Make A `VC Channel`**').setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
        const embed5 = new Discord.MessageEmbed().setThumbnail(client.user.displayAvatarURL()).setTimestamp().setColor(`${color}`).setDescription('**`🔨 | Moderation (20)`** \n[deletechannel](https://xopbot.glitch.me/) \n**Delete A `Channel`** \n[rolelock](https://xopbot.glitch.me/) \n**Lock Role From `Channel`** \n[roleunlock](https://xopbot.glitch.me/) \n**Unlock Role From `Channel`** \n[channellock](https://xopbot.glitch.me/) \n**Lock A `Channel`** \n[channelunlock](https://xopbot.glitch.me/) \n**Unlock A `Channel`**').setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
        const pages = [embed2, embed3, embed4, embed5]
        disbutpages.pages(message, pages, { timeout: 540 * 1000, buttons: { delete: { style: "red", emoji: "❌", text: "Delete" }, forward: { style: "blurple", emoji: "⏩", text: "Forward" }, backward: { style: "blurple", emoji: "⏪", text: "Backward" } }, extraRows: [], extraPos: "below", message: "", ephemeral: "**Button Failure! Reasons: \n1.`Not Your Embed!`\n2.`Buttons Timed OUT!`**", })
    }
}