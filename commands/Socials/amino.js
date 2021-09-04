const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: 'amino',
    cooldown: 2,
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    description: "Sends The Owners Youtube Channel!",
    async execute(client, message, cmd, args, Discord) {
        const amino = new Discord.MessageEmbed()
            .setColor('#c30202')
            .setTimestamp()
            .setTitle('My Amino Account')
            .setURL('https://aminoapps.com/c/splatoon/page/user/hackerpro-tm-sc/065i_afjvjXqMXB1d68dB0Y5oqM8pnB')
            .setDescription('`Amino Link` \n[Click Here](https://aminoapps.com/c/splatoon/page/user/hackerpro-tm-sc/065i_afjvjXqMXB1d68dB0Y5oqM8pnB)')
        message.lineReplyNoMention(amino);
    }
}