const { MessageButton } = require("discord-buttons");
const disbutpages = require("discord-embeds-pages-buttons")
module.exports = {
    name: 'moderation',
    aliases: ['mod'],
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    async execute(client, message, cmd, args, Discord) {

        message.react('⛏');

        const embed2 = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
            //.setTitle('__🛠️ Moderation__')
            .setColor('#c30202')
            .setDescription('**__🛠️ Moderation (20)__** \n[dm](https://xopbot-gg.glitch.me/) \n__***Dm A User!***__  \n[ban](https://xopbot-gg.glitch.me/) \n__***Ban A Member From A Server!***__ \n[unban](https://xopbot-gg.glitch.me/) \n__***Unban A Member From A Server!***__  \n[kick](https://xopbot-gg.glitch.me/) \n__***Kick A Member From A Server!***__ \n[mute](https://xopbot-gg.glitch.me/) \n__***Mute A Member From A Server!***__')
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

        const embed3 = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
            //.setTitle('__🛠️ Moderation__')
            .setColor('#c30202')
            .setDescription('**__🛠️ Moderation (20)__** \n[unmute](https://xopbot-gg.glitch.me/) \n__***Unmute A Member From A Server!***__ \n[nuke](https://xopbot-gg.glitch.me/) \n__***Nuke A Channel!***__ \n[clear](https://xopbot-gg.glitch.me/) \n__***Clear Messages!***__  \n[command](https://xopbot-gg.glitch.me/) \n__***Basic Server Rules, Only!***__  \n[slowmode](https://xopbot-gg.glitch.me/) \n__***Set Slowmode On A Channel!***__')
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

         const embed4 = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
            //.setTitle('__🛠️ Moderation__')
            .setColor('#c30202')
            .setDescription('**__🛠️ Moderation (20)__** \n[addrole](https://xopbot-gg.glitch.me/) \n__***Add Role To User!***__ \n[removerole](https://xopbot-gg.glitch.me/) \n__***Remove Role From User!***__ \n[createembed](https://xopbot-gg.glitch.me/) \n__***Create Custom Embed!***__ \n[createtext](https://xopbot-gg.glitch.me/) \n__***Create TX Channel!***__ \n[createvoice](https://xopbot-gg.glitch.me/) \n__***Create VC Channel!***__')
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

        const embed5 = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
            //.setTitle('__🛠️ Moderation__')
            .setColor('#c30202')
            .setDescription('**__🛠️ Moderation (20)__** \n[deletechannel](https://xopbot-gg.glitch.me/) \n__***Delete Channel!***__ \n[userlock](https://xopbot-gg.glitch.me/) \n__***Lock Role From Channel!***__ \n[userunlock](https://xopbot-gg.glitch.me/) \n__***Unlock Role From Channel!***__ \n[channellock](https://xopbot-gg.glitch.me/) \n__***Lock Channel!***__ \n[channelunlock](https://xopbot-gg.glitch.me/) \n__***Unlock Channel!***__')
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

        const pages = [embed2, embed3, embed4, embed5]
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