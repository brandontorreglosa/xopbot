module.exports = {
    name: 'utility',
    aliases: ['util', 'utils'],
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    async execute(client, message, cmd, args, Discord) {
        message.react('⚙');

        const embed3 = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
            //.setTitle('__⚙ Utility__')
            .setColor('#c30202')
            .addFields(
                { name: '__⚙ Utility (9)__', value: '`ticket`-__***Generates Private Text Channel!***__ \n`webhook`-__***Send Something From A Webhook!***__ \n`xopchat`-__***Request For Xopchat!***__ \n`afk`-__***Get AFK Status!***__ \n`suggestions`-__***Make A Suggestion To The Admins!***__ \n`nickname`-__***Change Someones Nickname!***__ \n`anime`-__***Search For Anime!***__ \n`wiki`-__***Search Something On Wiki!***__ \n`google`-__***Search Something On Google!***__' }
            )
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

        await message.channel.send({ embeds: [embed3] })
    }
}