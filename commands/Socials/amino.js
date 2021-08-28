const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: 'amino',
    cooldown: 2,
    permissions: ["SEND_MESSAGES"],
    description: "Sends The Owners Youtube Channel!",
    execute(client, message, cmd, args, Discord) {
        const amino = new Discord.MessageEmbed()
            .setColor('#c30202')
            .setTimestamp()
            .setTitle('My Amino Account')
            .setURL('https://aminoapps.com/c/splatoon/page/user/hackerpro-tm-sc/065i_afjvjXqMXB1d68dB0Y5oqM8pnB')
            .addField(
                { name: 'Amino Link', value: '[Click Here](https://aminoapps.com/c/splatoon/page/user/hackerpro-tm-sc/065i_afjvjXqMXB1d68dB0Y5oqM8pnB)' }
            )
        message.lineReplyNoMention(amino);
    }
}