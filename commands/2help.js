const os = require('os')

module.exports = {
    name: "2help",
    aliases: ['2mod'],
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
     async execute(client, message, cmd, args, Discord) {

        if(cmd === '2help') {
        const embed = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
            .setTitle('Bot Stats')
            .setColor('#000000')
            .addFields(
                {
                    name: '🌐 Servers',
                    value: `Serving ${client.guilds.cache.size} Servers.`,
                    inline: true
                },
                {
                    name: '📺 Channels',
                    value: `Serving ${client.channels.cache.size} Channels.`,
                    inline: true
                },
                {
                    name: '👥 Server Users',
                    value: `Serving ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} Users`,
                    inline: true
                },
                {
                    name: '⏳ Ping',
                    value: `${Math.round(client.ws.ping)}ms`,
                    inline: true
                },
                {
                    name: 'Join Date',
                    value: client.user.createdAt,
                    inline: true
                },
                {
                    name: 'Server Info',
                    value: `Cores: ${os.cpus().length}`,
                    inline: true
                }
            )
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

        await message.channel.send(embed)
    }

    else if(cmd === '2mod') {
        const embed2 = new Discord.MessageEmbed()
        .setThumbnail(client.user.displayAvatarURL())
        .setTimestamp()
        .setTitle('Bot Stats')
        .setColor('#000000')
        .addFields(
            {
                name: '🌐 Servers 2',
                value: `Serving ${client.guilds.cache.size} Servers.`,
                inline: true
            },
            {
                name: '📺 Channels',
                value: `Serving ${client.channels.cache.size} Channels.`,
                inline: true
            },
            {
                name: '👥 Server Users',
                value: `Serving ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} Users`,
                inline: true
            },
            {
                name: '⏳ Ping',
                value: `${Math.round(client.ws.ping)}ms`,
                inline: true
            },
            {
                name: 'Join Date',
                value: client.user.createdAt,
                inline: true
            },
            {
                name: 'Server Info',
                value: `Cores: ${os.cpus().length}`,
                inline: true
            }
        )
        .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

    await message.channel.send(embed2)
    }
}
}