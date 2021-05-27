module.exports = {
    name: 'invitewebsite',
    permissions: ["SEND_MESSAGES"],
    aliases: ['invw', 'inviteweb', 'iw'],
    description: "Embeds!",
    execute(client, message, cmd, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        .setColor('#0404fc')
        .setTitle('Bot Website Invite')
        .setURL('https://bubble-traveling-entrance.glitch.me/')
        .setDescription('**This Is The Bot Website Invite Link**')
        .addFields(
            {name: 'Bot Website Invite Link', value: '[Bot Website](https://bubble-traveling-entrance.glitch.me/)'}

        )
        .setFooter(`Requested By: ${message.author.tag}`, message.author.displayAvatarURL())


        message.channel.send(newEmbed);
    }
    
}