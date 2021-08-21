const { MessageButton } = require("discord-buttons");

module.exports = {
    name: 'moderation',
    aliases: ['mod'],
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    async execute(client, message, cmd, args, Discord) {
        message.react('⛏');

        const button = new MessageButton()
            .setStyle('url')
            .setURL('https://xopbot-gg.glitch.me/')
            .setLabel('Website')

        const embed2 = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
            //.setTitle('__🛠️ Moderation__')
            .setColor('#c30202')
            .setDescription('**__🛠️ Moderation (20)__** \n[dm](https://xopbot-gg.glitch.me/) \n__***Dm A User!***__  \n[ban](https://xopbot-gg.glitch.me/) \n__***Ban A Member From A Server!***__ \n[unban](https://xopbot-gg.glitch.me/) \n__***Unban A Member From A Server!***__  \n[kick](https://xopbot-gg.glitch.me/) \n__***Kick A Member From A Server!***__ \n[mute](https://xopbot-gg.glitch.me/) \n__***Mute A Member From A Server!***__ \n[unmute](https://xopbot-gg.glitch.me/) \n__***Unmute A Member From A Server!***__ \n[nuke](https://xopbot-gg.glitch.me/) \n__***Nuke A Channel!***__ \n[clear](https://xopbot-gg.glitch.me/) \n__***Clear Messages From A Server!***__  \n[command](https://xopbot-gg.glitch.me/) \n__***Gives Basic Server Rules Of A Server!***__  \n[slowmode](https://xopbot-gg.glitch.me/) \n__***Add Slowmode To A Text Channel!***__ \n[addrole](https://xopbot-gg.glitch.me/) \n__***Add A Role To A User!***__ \n[removerole](https://xopbot-gg.glitch.me/) \n__***Remove A Role From A User!***__ \n[createembed](https://xopbot-gg.glitch.me/) \n__***Create A Custom Embed!***__ \n[createtext](https://xopbot-gg.glitch.me/) \n__***Create A Text Channel!***__ \n[createvoice](https://xopbot-gg.glitch.me/) \n__***Create A Voice Channel!***__ \n[deletechannel](https://xopbot-gg.glitch.me/) \n__***Delete A Channel!***__ \n[userlock](https://xopbot-gg.glitch.me/) \n__***Lock A Role From A Specific Channel!***__ \n[userunlock](https://xopbot-gg.glitch.me/) \n__***Unlock A Role From A Specific Channel!***__ \n[channellock](https://xopbot-gg.glitch.me/) \n__***Lock A Channel!***__ \n[channelunlock](https://xopbot-gg.glitch.me/) \n__***Unlock A Channel!***__')
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

        await message.channel.send(embed2, button)
    }
}