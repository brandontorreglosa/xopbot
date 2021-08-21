const { MessageButton } = require("discord-buttons");

module.exports = {
    name: 'fun',
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    async execute(client, message, cmd, args, Discord) {
        message.react('🤪');

        const embed7 = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
            //.setTitle('__🥳 Fun__')
            .setColor('#c30202')
            .setDescription('**__🥳 Fun (18)__** \n[ping](https://xopbot-gg.glitch.me/) \n__***Not Real Ping!***__ \n[avatar](https://xopbot-gg.glitch.me/) \n__***Shows A Users Avatar!***__ \n[badges](https://xopbot-gg.glitch.me/) \n__***Gives You A Users Badge!***__ \n[8ball](https://xopbot-gg.glitch.me/) \n__***Ask 8ball A Question!***__ \n[reverse](https://xopbot-gg.glitch.me/) \n__***Reverse A Word That You Send!***__ \n[coinflip](https://xopbot-gg.glitch.me/) \n__***Flip A Coin!***__ \n[meme](https://xopbot-gg.glitch.me/) \n__***Get Memes From Reddit!***__ \n[say](https://xopbot-gg.glitch.me/) \n__***XOPBOT Repeats The Word!***__ \n[ascii](https://xopbot-gg.glitch.me/) \n__***Convert Text To Ascii!***__ \n[fliptext](https://xopbot-gg.glitch.me/) \n__***Flip Your Text!***__ \n[dog](https://xopbot-gg.glitch.me/) \n__***Get A Random Dog!***__ \n[cat](https://xopbot-gg.glitch.me/) \n__***Get A Random Cat!***__ \n[respect](https://xopbot-gg.glitch.me/) \n__***Respect A User!***__ \n[hack](https://xopbot-gg.glitch.me/) \n__***Hack A User!***__  \n[kill](https://xopbot-gg.glitch.me/) \n__***Kill A User!***__ \n[hug](https://xopbot-gg.glitch.me/) \n__***Hug A User!***__ \n[kiss](https://xopbot-gg.glitch.me/) \n__***Kiss A User!***__ \n[pp](https://xopbot-gg.glitch.me/) \n__***Get A Users PP!***__')
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

        await message.channel.send(embed7)
    }
}