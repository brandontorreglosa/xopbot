const disbutpages = require("discord-embeds-pages-buttons")
module.exports = {
    name: 'music',
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    async execute(client, message, cmd, args, Discord) {
        message.react('🎵');

        const embed8 = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
            // .setTitle('__🎶 Music__')
            .setColor('#c30202')
            .addFields(
                { name: '__🎶 Music (10)__', value: '\n[play](https://xopbot-gg.glitch.me/) \n__***Play Any Music!***__  \n[stop](https://xopbot-gg.glitch.me/) \n__***Stop The Player!***__ \n[skip](https://xopbot-gg.glitch.me/) \n__***Skip The Song In Queue!***__ \n[pause](https://xopbot-gg.glitch.me/) \n__***Pause The Song!***__ \n[unpause](https://xopbot-gg.glitch.me/) \n__***Unpause The Song!***__' }
            )
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

        const embed9 = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
            // .setTitle('__🎶 Music__')
            .setColor('#c30202')
            .addFields(
                { name: '__🎶 Music (10)__', value: '\n[jump](https://xopbot-gg.glitch.me/) \n__***Jump The Song In Queue!***__ \n[loop](https://xopbot-gg.glitch.me/) \n__***Loop The Queue/etc.***__ \n[volume](https://xopbot-gg.glitch.me/) \n__***Set The Volume!***__ \n[join](https://xopbot-gg.glitch.me/) \n__***Bot Joins VCC!***__ \n[leave](https://xopbot-gg.glitch.me/) \n__***Bot Leaves VCC!***__' }
            )
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

        const pages = [embed8, embed9]
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