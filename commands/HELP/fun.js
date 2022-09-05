const { MessageButton } = require("discord-buttons");
const disbutpages = require("discord-embeds-pages-buttons")
const color = process.env.Color;
module.exports = {
    name: 'fun',
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    async execute(client, message, cmd, args, Discord) {
        message.react('😜');
        const embed7 = new Discord.MessageEmbed().setThumbnail(client.user.displayAvatarURL()).setTimestamp().setColor(`${color}`).setDescription('**`🤪 | Fun (18)`** \n[ping](https://xopbot.glitch.me/) \n**Ping The `Bot`** \n[avatar](https://xopbot.glitch.me/) \n**View A `User\'s Avatar`** \n[badges](https://xopbot.glitch.me/) \n**Fetch A `User\'s Badges`** \n[8ball](https://xopbot.glitch.me/) \n**Ask 8ball A `Question`** \n[reverse](https://xopbot.glitch.me/) \n**Reverse A `Word`**').setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
        const embed8 = new Discord.MessageEmbed().setThumbnail(client.user.displayAvatarURL()).setTimestamp().setColor(`${color}`).setDescription('**`🤪 | Fun (18)`** \n[coinflip](https://xopbot.glitch.me/) \n**Flip A `Coin`** \n[meme](https://xopbot.glitch.me/) \n**Get `Memes From Reddit`** \n[say](https://xopbot.glitch.me/) \n**Your Word Gets `Repeated`** \n[ascii](https://xopbot.glitch.me/) \n**Convert Text To `Ascii`** \n[fliptext](https://xopbot.glitch.me/) \n**Flip Your `Word`**').setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
        const embed9 = new Discord.MessageEmbed().setThumbnail(client.user.displayAvatarURL()).setTimestamp().setColor(`${color}`).setDescription('**`🤪 | Fun (18)`** \n[dog](https://xopbot.glitch.me/) \n**Get `Random Dog Images`** \n[cat](https://xopbot.glitch.me/) \n**Get `Random Cat Images`** \n[respect](https://xopbot.glitch.me/) \n**Show Respect To A `User`** \n[hack](https://xopbot.glitch.me/) \n**Ima `Hack` LMAO**  \n[kill](https://xopbot.glitch.me/) \n**You Are Now `Dead`**').setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
        const embed10 = new Discord.MessageEmbed().setThumbnail(client.user.displayAvatarURL()).setTimestamp().setColor(`${color}`).setDescription('**`🤪 | Fun (18)`** \n[hug](https://xopbot.glitch.me/) \n**Hug A `User`** \n[kiss](https://xopbot.glitch.me/) \n**Kiss A `User`** \n[pp](https://xopbot.glitch.me/) \n**Get A User\'s `PP`**').setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
        const pages = [embed7, embed8, embed9, embed10]
        disbutpages.pages(message, pages, { timeout: 540 * 1000, buttons: { delete: { style: "red", emoji: "❌", text: "Delete" }, forward: { style: "blurple", emoji: "⏩", text: "Forward" }, backward: { style: "blurple", emoji: "⏪", text: "Backward" } }, extraRows: [], extraPos: "below", message: "", ephemeral: "**Button Failure! Reasons: \n1.`Not Your Embed!`\n2.`Buttons Timed OUT!`**", })
    }
}