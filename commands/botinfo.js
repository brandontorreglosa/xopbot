
const os = require('os')

module.exports = {
    name: "botinfo",
    aliases: ['bi'],
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
     async execute(client, message, cmd, args, Discord) {

        let status;
        switch (client.presence.status) {
            case "online":
                status = "🟢 Online";
                break;
            case "dnd":
                status = "🔴 Dnd";
                break;
            case "idle":
                status = "🟡 Idle";
                break;
            case "offline":
                status = "⚫ Offline";
                break;
        }

        const embed = new Discord.MessageEmbed()
            //.setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
            .setTitle('Bot Information', client.user.displayAvatarURL({ dynamic: true }))
            .setColor('#000000')
            .addFields(
                {
                    name: '👷‍♂ Developer',
                    value: `👑HACKERPROᵈᵉᵛ#1498`,
                    inline: true
                },
                {
                    name: '⛏ Prefix',
                    value: 'x!',
                    inline: true
                },
                {
                    name: '🤖 Bot Version',
                    value: 'v50.5.5',
                    inline: true
                },
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
                    name: '🤖 Bot Status',
                    value: status,
                    inline: true
                },
                {
                    name: '⏳ Ping',
                    value: `${Math.round(client.ws.ping)}ms`,
                    inline: true
                },
                {
                    name: '🎉 Creation Date',
                    value: client.user.createdAt,
                    inline: true
                }
                // {
                //     name: '🌎 Server Info',
                //     value: `Cores: ${os.cpus().length}`,
                //     inline: true
                // }
            )
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

        await message.channel.send(embed)
    }
}