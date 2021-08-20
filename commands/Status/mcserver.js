const util = require('minecraft-server-util');

module.exports = {
    name: 'mcserver',
    permissions: ["SEND_MESSAGES"],
    aliases: ['mcs'],
    cooldown: 5,
    description: 'get information about a minecraft server',
    execute(client, message, cmd, args, Discord) {
        if (!args[0]) return message.channel.send({ content: '**Please Enter A Minecraft Server Ip \nDont Know? Visit: https://minecraftservers.org/**' });
        if (!args[1]) return message.channel.send({ content: '**Please Enter A Minecraft Server Port \nDont Know? Visit: https://minecraftservers.org/**' });

        util.status(args[0], { port: parseInt(args[1]) }).then((response) => {
            console.log(response);
            const embed = new Discord.MessageEmbed()
                .setColor('#029602')
                .setTitle('**MC Server Status**')
                .setURL('https://minecraftservers.org/')
                .addFields(
                    { name: 'Server IP', value: response.host },
                    { name: 'Online Players', value: response.onlinePlayers },
                    { name: 'Max Players', value: response.maxPlayers },
                    { name: 'Version', value: response.version }
                )
                .setFooter('MC Server By Bot Developer Team');

            message.channel.send(embed);
        })
            .catch((error) => {
                message.channel.send({ content: '**There Was An Error Finding This Server**' });
                throw error;
            })
    }
}