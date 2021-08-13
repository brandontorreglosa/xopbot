module.exports = {
    name: 'voteinvite',
    cooldown: 3,
    permissions: ["SEND_MESSAGES"],
    aliases: ['vinv', 'voin'],
    description: "Embeds!",
    execute(client, message, cmd, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setTimestamp()
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
            .setColor('#c30202')
            .setTitle('Vote Invite')
            .setURL('https://top.gg/bot/831824859066925087')
            .setDescription('**Love XOPBOT? 😍 Well Then! \nYou Can Vote Down Here ⤵**')
            .addFields(
                { name: 'Vote Invite Link', value: '[Vote Here](https://top.gg/bot/831824859066925087)' }

            )
            .setFooter(`Requested By: ${message.author.tag}`, message.author.displayAvatarURL())


        message.channel.send(newEmbed);
    }

}
