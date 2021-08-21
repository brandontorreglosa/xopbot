const { MessageButton } = require("discord-buttons");
const disbutpages = require("discord-embeds-pages-buttons")
module.exports = {
    name: 'images',
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    async execute(client, message, cmd, args, Discord) {

        message.react('📸');

        const embed15 = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
            //.setTitle('__🎮 Games__')
            .setColor('#c30202')
            .setDescription('**__📷 Images (26)__** \n[ad](https://xopbot-gg.glitch.me/) \n__***Wow You Became A AD!***__ \n[pet](https://xopbot-gg.glitch.me/) \n__***Aww You Got Pet!***__ \n[m&m](https://xopbot-gg.glitch.me/) \n__***Wow You Are A M&M!***__ \n[phub](https://xopbot-gg.glitch.me/) \n__***What Are You Doing Here??***__ \n[drip](https://xopbot-gg.glitch.me/) \n__***Im So Freaking Drippy!***__')
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

        const embed16 = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
            //.setTitle('__🎮 Games__')
            .setColor('#c30202')
            .setDescription('**__📷 Images (26)__** \n[alert](https://xopbot-gg.glitch.me/) \n__***Alert The World OP!***__ \n[facts](https://xopbot-gg.glitch.me/) \n__***Facts Only Mate!***__ \n[clown](https://xopbot-gg.glitch.me/) \n__***Wow You Are A Clown!***__ \n[drake](https://xopbot-gg.glitch.me/) \n__***The Drake Meme!***__ \n[water](https://xopbot-gg.glitch.me/) \n__***I Need Water Guide Me!***__')
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

        const embed17 = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
            //.setTitle('__🎮 Games__')
            .setColor('#c30202')
            .setDescription('**__📷 Images (26)__** \n[clyde](https://xopbot-gg.glitch.me/) \n__***Clyde Is Sending LOL!***__ \n[biden](https://xopbot-gg.glitch.me/) \n__***Im The President!***__  \n[grave](https://xopbot-gg.glitch.me/) \n__***Oh No I Died R.I.P!***__ \n[stonks](https://xopbot-gg.glitch.me/) \n__***Wow Im Rich ASF!***__ \n[heaven](https://xopbot-gg.glitch.me/) \n__***OMG Its So Nice!***__')
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

        const embed18 = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
            //.setTitle('__🎮 Games__')
            .setColor('#c30202')
            .setDescription('**__📷 Images (26)__** \n[pikachu](https://xopbot-gg.glitch.me/) \n__***Pikachu Meme!***__ \n[uncover](https://xopbot-gg.glitch.me/) \n__***Rick And Morty Meme!***__ \n[iamspeed](https://xopbot-gg.glitch.me/) \n__***Im Fast Asf Boii!***__ \n[rickroll](https://xopbot-gg.glitch.me/) \n__***Get Rickrolled!***__ \n[tableflip](https://xopbot-gg.glitch.me/) \n__***I Lost Great!***__')
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

        const embed19 = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
            //.setTitle('__🎮 Games__')
            .setColor('#c30202')
            .setDescription('**__📷 Images (26)__** \n[fbiopenup](https://xopbot-gg.glitch.me/) \n__***FBI Is Here, Run!***__ \n[batmanslap](https://xopbot-gg.glitch.me/) \n__***Why Slap XOPBOT!***__ \n[carreverse](https://xopbot-gg.glitch.me/) \n__***The Cringe Is Too Much!***__ \n[wideavatar](https://xopbot-gg.glitch.me/) \n__***Why Is My PFP Wide?***__ \n[dockofshame](https://xopbot-gg.glitch.me/) \n__***Loser, Get Outta Here!***__')
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

        // const embed19 = new Discord.MessageEmbed()
        //     .setThumbnail(client.user.displayAvatarURL())
        //     .setTimestamp()
        //     //.setTitle('__🎮 Games__')
        //     .setColor('#c30202')
        //     .setDescription('**__📷 Images (26)__** \n[changemymind](https://xopbot-gg.glitch.me/) \n__***Change A Users Mind!***__')
        //     .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

        const pages = [embed15, embed16, embed17, embed18, embed19]
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