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
            .addFields(
                { name: '__📷 Images (13)__', value: '`ad`-__***Wow You Became A AD!***__ \n`pet`-__***Aww You Got Pet!***__ \n`m&m`-__***Wow You Are A M&M!***__ \n`phub`-__***What Are You Doing?***__ \n`drip`-__***Get A Image Of A Drip User!***__ \n`alert`-__***Alert The World!***__ \n`facts`-__***Facts Only Mate!***__ \n`clown`-__***Wow You Are A Clown!***__ \n`drake`-__***The Drake Meme!***__ \n`water`-__***I Need Water Guide Me!***__ \n`clyde`-__***Get An Image Of Clyde Sending!***__ \n`biden`-__***Make Biden Tweet Something!***__  \n`grave`-__***Get An Image Of A User In A Grave!***__ ' },
                { name: '__📷 Images 2 (13)__', value: '\n`stonks`-__***Wow Im Rich ASF!***__ \n`heaven`-__***Get A Image Of A User In Heaven!***__ \n`pikachu`-__***Pikachu Meme If You Know!***__ \n`uncover`-__***The Rick And Morty Meme!***__ \n`iamspeed`-__***Yes Im Fast Asf Boi You See!***__ \n`rickroll`-__***You Just Got Rickrolled!***__ \n`tableflip`-__***Get A Image Doing A Tableflip!***__ \n`fbiopenup`-__***Oh Shoot The FBI Is Here!***__ \n`batmanslap`-__***Batman Slap XOPBOT!***__ \n`carreverse`-__***Reverse The Car From The Cringe!***__ \n`wideavatar`-__***Get A Image Of A Users Wide Pfp!***__ \n`dockofshame`-__***Get A Image Of A User On The Dock!***__ \n`changemymind`-__***Change A Users Mind!***__' },
                { name: 'Total Images', value: '```26```' }
            )
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

        await message.channel.send(embed15)
    }
}