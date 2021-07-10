module.exports = {
    name: 'websiteinvite',
    permissions: ["SEND_MESSAGES"],
    aliases: ['winv', 'webinvite', 'wi'],
    description: "Embeds!",
    execute(client, message, cmd, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setTimestamp()
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
            .setColor('#0404fc')
            .setTitle('Bot Website Invite')
            .setURL('https://bubble-traveling-entrance.glitch.me/')
            .setDescription('**This Is The Bot Website Invite Link**')
            .addFields(
                { name: 'Bot Website Invite Link', value: '[Bot Website](https://xopbot-gg.glitch.me/)' }

            )
            .setFooter(`Requested By: ${message.author.tag}`, message.author.displayAvatarURL())


        message.channel.send(newEmbed);
    }

}