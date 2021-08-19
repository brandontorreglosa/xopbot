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
            .addFields(
                { name: '__🥳 Fun (18)__', value: '`ping`-__***Not Real Ping!***__ \n`avatar`-__***Shows A Users Avatar!***__ \n`badges`-__***Gives You A Users Badge!***__ \n`8ball`-__***Ask 8ball A Question!***__ \n`reverse`-__***Reverse A Word That You Send!***__ \n`coinflip`-__***Flip A Coin!***__ \n`meme`-__***Get Memes From Reddit!***__ \n`say`-__***XOPBOT Repeats The Word!***__ \n`ascii`-__***Convert Text To Ascii!***__ \n`fliptext`-__***Flip Your Text!***__ \n`dog`-__***Get A Random Dog!***__ \n`cat`-__***Get A Random Cat!***__ \n`respect`-__***Respect A User!***__ \n`hack`-__***Hack A User!***__  \n`kill`-__***Kill A User!***__ \n`hug`-__***Hug A User!***__ \n`kiss`-__***Kiss A User!***__ \n`pp`-__***Get A Users PP!***__' }
            )
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

        await message.channel.send(embed7)
    }
}