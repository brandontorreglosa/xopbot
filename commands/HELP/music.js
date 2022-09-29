const disbutpages = require("discord-embeds-pages-buttons");
const color = process.env.Color;
module.exports = {
    name: 'music',
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    async execute(client, message, cmd, args, Discord) {
        message.react('🎵');
        const embed8 = new Discord.MessageEmbed().setThumbnail(client.user.displayAvatarURL()).setTimestamp().setColor(`${color}`).addFields({ name: '`🎶 | Music (10)`', value: '\n[play](https://xopbot.glitch.me/) \n**Play Any `Music`**  \n[stop](https://xopbot.glitch.me/) \n**Stop The `Player`** \n[skip](https://xopbot.glitch.me/) \n**Skip The `Song In Queue`** \n[pause](https://xopbot.glitch.me/) \n**Pause The `Song`** \n[unpause](https://xopbot.glitch.me/) \n**Unpause The `Song`**' }).setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
        const embed9 = new Discord.MessageEmbed().setThumbnail(client.user.displayAvatarURL()).setTimestamp().setColor(`${color}`).addFields({ name: '`🎶 | Music (10)`', value: '\n[jump](https://xopbot.glitch.me/) \n**Jump The `Song In Queue`** \n[loop](https://xopbot.glitch.me/) \n**Loop The `Queue/Song`** \n[volume](https://xopbot.glitch.me/) \n**Set The `Volume`** \n[join](https://xopbot.glitch.me/) \n**Bot Joins `VCC`** \n[leave](https://xopbot.glitch.me/) \n**Bot Leaves `VCC`**' }).setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
        const pages = [embed8, embed9]
        disbutpages.pages(message, pages, { timeout: 540 * 1000, buttons: { delete: { style: "red", emoji: "❌", text: "Delete" }, forward: { style: "blurple", emoji: "⏩", text: "Forward" }, backward: { style: "blurple", emoji: "⏪", text: "Backward" } }, extraRows: [], extraPos: "below", message: "", ephemeral: "**Button Failure! Reasons: \n1.`Not Your Embed!`\n2.`Buttons Timed OUT!`**", })
    }
}