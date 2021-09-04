const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: 'avatar',
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    aliases: ['icon', 'pfp', 'profilepic'],
    cooldown: 5,
    description: 'Return a user(s) avatar picture!',
    async execute(client, message, cmd, args, Discord) {

        const user = message.mentions.users.first() || message.author;

        const avatar_list = new Discord.MessageEmbed()
            .setAuthor(`${user.username}`, user.displayAvatarURL({ dynamic: true }))
            .setColor(`#c30202`)
            .setTimestamp()
            .setTitle(`Avatar Link`)
            .setURL(`${user.displayAvatarURL({ dynamic: true })}`)
            .setImage(`${user.displayAvatarURL({ size: 2048, dynamic: true })}`)
        message.lineReplyNoMention(avatar_list);
    }
}