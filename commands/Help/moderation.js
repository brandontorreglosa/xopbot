const { MessageButton } = require("discord-buttons");
const disbutpages = require("discord-embeds-pages-buttons")
const color = process.env.Color;
module.exports = {
    name: 'moderation',
    aliases: ['mod'],
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    async execute(client, message, cmd, args, Discord) {

        message.react('⛏');

        const embed2 = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
            //.setTitle('__🛠️ Moderation__')
            .setColor(`${color}`)
            .setDescription('**__🛠️ Moderation (20)__** \n[dm](https://xopbot-gg.glitch.me/) \n__***Dm A User!***__  \n[ban](https://xopbot-gg.glitch.me/) \n__***Ban A Member!***__ \n[unban](https://xopbot-gg.glitch.me/) \n__***Unban A Member!***__  \n[kick](https://xopbot-gg.glitch.me/) \n__***Kick A Member!***__ \n[mute](https://xopbot-gg.glitch.me/) \n__***Mute A Member!***__')
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

        const embed3 = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
            //.setTitle('__🛠️ Moderation__')
            .setColor(`${color}`)
            .setDescription('**__🛠️ Moderation (20)__** \n[unmute](https://xopbot-gg.glitch.me/) \n__***Unmute A Member!***__ \n[nuke](https://xopbot-gg.glitch.me/) \n__***Nuke A Channel!***__ \n[clear](https://xopbot-gg.glitch.me/) \n__***Clear Messages!***__  \n[command](https://xopbot-gg.glitch.me/) \n__***Basic Server Rules!***__  \n[slowmode](https://xopbot-gg.glitch.me/) \n__***Set A Slowmode!***__')
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

         const embed4 = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
            //.setTitle('__🛠️ Moderation__')
            .setColor(`${color}`)
            .setDescription('**__🛠️ Moderation (20)__** \n[addrole](https://xopbot-gg.glitch.me/) \n__***Add Role To User!***__ \n[removerole](https://xopbot-gg.glitch.me/) \n__***Remove Role From User!***__ \n[createembed](https://xopbot-gg.glitch.me/) \n__***Create Custom Embed!***__ \n[createtext](https://xopbot-gg.glitch.me/) \n__***Create TX Channel!***__ \n[createvoice](https://xopbot-gg.glitch.me/) \n__***Create VC Channel!***__')
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

        const embed5 = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
            //.setTitle('__🛠️ Moderation__')
            .setColor(`${color}`)
            .setDescription('**__🛠️ Moderation (20)__** \n[deletechannel](https://xopbot-gg.glitch.me/) \n__***Delete Channel!***__ \n[rolelock](https://xopbot-gg.glitch.me/) \n__***Lock Role From Channel!***__ \n[roleunlock](https://xopbot-gg.glitch.me/) \n__***Unlock Role From Channel!***__ \n[channellock](https://xopbot-gg.glitch.me/) \n__***Lock Channel!***__ \n[channelunlock](https://xopbot-gg.glitch.me/) \n__***Unlock Channel!***__')
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

        const pages = [embed2, embed3, embed4, embed5]
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