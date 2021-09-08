const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: "bugreport",
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    aliases: ['bug', 'reportbug'],
    cooldown: 20,
    description: 'let users report bugs',
    async execute(client, message, cmd, args, Discord) {
        const channel = client.channels.cache.get('839389883486306304')
        const query = args.join(' ');
        const queryembed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#c30202')
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription('**`(prefix)bugreport <bug>`**')
        if (!query) return message.lineReplyNoMention(queryembed) //, allowedMentions: { repliedUser: true } })
        const reportEmbed = new Discord.MessageEmbed()
            .setColor('#c30202')
            .setTitle('**New Bug Found!**')
            .addField('Author', message.author.toString(), true)
            .addField('Guild', message.guild.name, true)
            .addField('Report', query)
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
        channel.send(reportEmbed);
        message.lineReplyNoMention({ content: "**Bug Report Has Been Sent!**" }) //, allowedMentions: { repliedUser: true } })
    }
}