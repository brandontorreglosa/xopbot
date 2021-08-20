const ButtonPages = require('discord-button-pages');
const DiscordButtons = require('discord-buttons');
module.exports = {
    name: 'config',
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    async execute(client, message, cmd, args, Discord) {
        message.react('🌘');

        const embed15 = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
            //.setTitle('__🎮 Games__')
            .setColor('#c30202')
            .addFields(
                { name: '__⚠ Config (9)__', value: '\n[antiwords](https://xopbot-gg.glitch.me/) \n__***Setup Bad Words Detector!***__ \n[antilink](https://xopbot-gg.glitch.me/) \n__***Setup Antilink On A Server!***__ \n[autonsfw](https://xopbot-gg.glitch.me/) \n__***Setup Autonsfw On A Server!***__ \n[automeme](https://xopbot-gg.glitch.me/) \n__***Setup Automeme On A Server!***__ \n[joinchannel](https://xopbot-gg.glitch.me/) \n__***Setup The Join Channel!***__' }
            )
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

        const embed16 = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
            //.setTitle('__🎮 Games__')
            .setColor('#c30202')
            .addFields(
                { name: '__⚠ Config (9)__', value: '\n[leavechannel](https://xopbot-gg.glitch.me/) \n__***Setup The Leave Channel!***__ \n\[joinmessage](https://xopbot-gg.glitch.me/) \n__***Setup The Join Message!***__ \n\[leavemessage](https://xopbot-gg.glitch.me/) \n__***Setup The Leave Message!***__ \n[setprefix](https://xopbot-gg.glitch.me/) \n__***Set The Server`s Custom Prefix!***__' }
            )
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

        const embedPages = [embed15, embed16]
        ButtonPages.createPages(client, message, embedPages, 60 * 1000, "blurple", "⏩", "⏪", "❌");
    }
}