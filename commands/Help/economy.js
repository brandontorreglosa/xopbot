module.exports = {
    name: 'economy',
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    async execute(client, message, cmd, args, Discord) {
        message.react('💵');

        const embed9 = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
            // .setTitle('__🤑 Economy__')
            .setColor('#c30202')
            .addFields(
                { name: '__🤑 Economy (10)__', value: '`profile`-__***Get Your Profile***__ \n`balance`-__***Get Your Banks And Wallet Balance!***__  \n`deposit`-__***Deposit Xocoins Into Your Bank!***__  \n`withdraw`-__***Withdraw Money Out Of Your Bank!***__  \n`beg`-__***Beg From XOPBOT For Xocoins!***__ \n`coins-set`-__***Private Command!***__  \n`give`-__***Private Command!***__  \n`search`-__***Search For Xocoins On Locations!***__ \n`work`-__***Work For Xocoins!***__ \n`daily`-__***Get Daily Xocoins!***__' }
            )
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

        await message.channel.send({ embeds: [embed9] })
    }
}