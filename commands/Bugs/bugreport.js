const lineReplyNoMention = require('discord-reply');
const logChannel = process.env.logChannel;
const color = process.env.Color;
const mongodburl = process.env.X_MongodbURL;
module.exports = {
    name: "bugreport",
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    aliases: ['bug', 'reportbug'],
    cooldown: 20,
    description: 'let users report bugs',
    async execute(client, message, cmd, args, Discord) {
        const loggerchannel = client.channels.cache.get(logChannel);
        const channel = client.channels.cache.get('839389883486306304')
        const query = args.join(' '); const queryembed = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription('**`(prefix)bugreport <bug>`**')
        if (!query) return message.lineReplyNoMention(queryembed)
        const count = 0; const reportssofar = count + 1; const reportEmbed = new Discord.MessageEmbed().setColor(`${color}`).setTitle('**New Bug Found!**').addField('Author', message.author.toString(), true).addField('Guild', message.guild.name, true).addField('Report', query).addField('Reports So Far:', reportssofar).setThumbnail(message.author.displayAvatarURL({ dynamic: true })).setTimestamp()
        channel.send({ embed: reportEmbed }); message.lineReplyNoMention({ content: "**Bug Report Has Been Sent!**" })
        loggerchannel.send({ content: `**${message.author.username}#${message.author.discriminator} used the command ${this.name} in ${message.guild.name}**` })
    }
}