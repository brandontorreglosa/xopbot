const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: 'badges',
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    cooldown: 3,
    aliases: ['usersbadge'],
    async execute(client, message, cmd, args, Discord) {
        const user = message.mentions.users.first() || message.author;

        const flags = user.flags.toArray();

        console.log(flags);

        const badgesuser = new Discord.MessageEmbed()
            .setColor('#c30202')
            .setTimestamp()
            .setDescription(`\`${user.username}\`'s badges: \`${flags.join(', ')}\``)
            .setFooter(`Requested By: ${message.author.tag}`, message.author.displayAvatarURL())
        message.lineReplyNoMention(badgesuser)
    }
}

