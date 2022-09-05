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
        const embed9 = new Discord.MessageEmbed().setThumbnail(client.user.displayAvatarURL()).setTimestamp().setColor(`${color}`).addFields({ name: '`🤑 | Economy (20)`', value: '\n[profile](https://xopbot.glitch.me/) \n**Fetch Your `Profile`** \n[balance](https://xopbot.glitch.me/) \n**View Your `Balance`**  \n[deposit](https://xopbot.glitch.me/) \n**Deposit Xocoins To Your `Bank`**  \n[withdraw](https://xopbot.glitch.me/) \n**Withdraw Xocoins From Your `Bank`**  \n[beg](https://xopbot.glitch.me/) \n**Beg For `Xocoins`**' }).setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
        const embed10 = new Discord.MessageEmbed().setThumbnail(client.user.displayAvatarURL()).setTimestamp().setColor(`${color}`).addFields({ name: '`🤑 | Economy (20)`', value: '\n[rob](https://xopbot.glitch.me/) \n**Rob A `User\'s Xocoins`**  \n[give](https://xopbot.glitch.me/) \n**Donate Your `Xocoins`**  \n[search](https://xopbot.glitch.me/) \n**Search For `Xocoins`** \n[work](https://xopbot.glitch.me/) \n**Work To Gain `Xocoins`** \n[inventory](https://xopbot.glitch.me/) \n**View Your `Inventory`**' }).setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
        const embed11 = new Discord.MessageEmbed().setThumbnail(client.user.displayAvatarURL()).setTimestamp().setColor(`${color}`).addFields({ name: '`🤑 | Economy (20)`', value: '\n[doubleornothing](https://xopbot.glitch.me/) \n**Make A `Bet To XOPBOT`** \n[daily](https://xopbot.glitch.me/) \n**Claim Your `Daily Bonus`** \n[weekly](https://xopbot.glitch.me/) \n**Claim Your `Weekly Bonus`** \n[monthly](https://xopbot.glitch.me/) \n**Claim Your `Monthly Bonus`** \n[yearly](https://xopbot.glitch.me/) \n**Claim Your `Yearly Bonus`**' }).setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
        const embed12 = new Discord.MessageEmbed().setThumbnail(client.user.displayAvatarURL()).setTimestamp().setColor(`${color}`).addFields({ name: '`🤑 | Economy (20)`', value: '\n[shop](https://xopbot.glitch.me/) \n**View The `Dealer\'s Shop`** \n[fish](https://xopbot.glitch.me/) \n**Catch Fish To Get `Paid`** \n[hunt](https://xopbot.glitch.me/) \n**Hunt Animals For` Cash`** \n[buy](https://xopbot.glitch.me/) \n**Buy Items From The `Shop`** \n[rich](https://xopbot.glitch.me/) \n**View The `Richest Users`**' }).setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
        const pages = [embed9, embed10, embed12, embed11]
        disbutpages.pages(message, pages, { timeout: 540 * 1000, buttons: { delete: { style: "red", emoji: "❌", text: "Delete" }, forward: { style: "blurple", emoji: "⏩", text: "Forward" }, backward: { style: "blurple", emoji: "⏪", text: "Backward" } }, extraRows: [], extraPos: "below", message: "", ephemeral: "**Button Failure! Reasons: \n1.`Not Your Embed!`\n2.`Buttons Timed OUT!`**", })
    }
}