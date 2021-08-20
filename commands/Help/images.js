const { MessageButton } = require("discord-buttons");

module.exports = {
    name: 'images',
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    async execute(client, message, cmd, args, Discord) {

        message.react('📸');

        const button = new MessageButton()
        .setStyle('url')
        .setURL('https://xopbot-gg.glitch.me/')
        .setLabel('Website')

        const embed15 = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
            //.setTitle('__🎮 Games__')
            .setColor('#c30202')
            .setDescription('**__📷 Images (26)__** \n[ad](https://xopbot-gg.glitch.me/) \n__***Wow You Became A AD!***__ \n[pet](https://xopbot-gg.glitch.me/) \n__***Aww You Got Pet!***__ \n[m&m](https://xopbot-gg.glitch.me/) \n__***Wow You Are A M&M!***__ \n[phub](https://xopbot-gg.glitch.me/) \n__***What Are You Doing?***__ \n[drip](https://xopbot-gg.glitch.me/) \n__***Get A Image Of A Drip User!***__ \n[alert](https://xopbot-gg.glitch.me/) \n__***Alert The World!***__ \n[facts](https://xopbot-gg.glitch.me/) \n__***Facts Only Mate!***__ \n[clown](https://xopbot-gg.glitch.me/) \n__***Wow You Are A Clown!***__ \n[drake](https://xopbot-gg.glitch.me/) \n__***The Drake Meme!***__ \n[water](https://xopbot-gg.glitch.me/) \n__***I Need Water Guide Me!***__ \n[clyde](https://xopbot-gg.glitch.me/) \n__***Get An Image Of Clyde Sending!***__ \n[biden](https://xopbot-gg.glitch.me/) \n__***Make Biden Tweet Something!***__  \n[grave](https://xopbot-gg.glitch.me/) \n__***Get An Image Of A User In A Grave!***__ \n[stonks](https://xopbot-gg.glitch.me/) \n__***Wow Im Rich ASF!***__ \n[heaven](https://xopbot-gg.glitch.me/) \n__***Get A Image Of A User In Heaven!***__ \n[pikachu](https://xopbot-gg.glitch.me/) \n__***Pikachu Meme If You Know!***__ \n[uncover](https://xopbot-gg.glitch.me/) \n__***The Rick And Morty Meme!***__ \n[iamspeed](https://xopbot-gg.glitch.me/) \n__***Yes Im Fast Asf Boi You See!***__ \n[rickroll](https://xopbot-gg.glitch.me/) \n__***You Just Got Rickrolled!***__ \n[tableflip](https://xopbot-gg.glitch.me/) \n__***Get A Image Doing A Tableflip!***__ \n[fbiopenup](https://xopbot-gg.glitch.me/) \n__***Oh Shoot The FBI Is Here!***__ \n[batmanslap](https://xopbot-gg.glitch.me/) \n__***Batman Slap XOPBOT!***__ \n[carreverse](https://xopbot-gg.glitch.me/) \n__***Reverse The Car From The Cringe!***__ \n[wideavatar](https://xopbot-gg.glitch.me/) \n__***Get A Image Of A Users Wide Pfp!***__ \n[dockofshame](https://xopbot-gg.glitch.me/) \n__***Get A Image Of A User On The Dock!***__ \n[changemymind](https://xopbot-gg.glitch.me/) \n__***Change A Users Mind!***__')
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

        await message.channel.send(embed15)
    }
}