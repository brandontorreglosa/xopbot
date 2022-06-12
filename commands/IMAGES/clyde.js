const Discord = require('discord.js');
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
    name: 'clyde',
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    cooldown: 5,
    description: 'Get a custom clyde message!',
    async execute(client, message, cmd, args, Discord) {
        if (!args[0]) {
            const nopr = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor(`${color}`)
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**\`(prefix)clyde <text>\`**`)
            return message.lineReplyNoMention(nopr)
        }
        let clydeMessage = args.slice(0).join(' ');
        if (clydeMessage.length > 65) {
            const maxlen = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor(`${color}`)
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**You Are Not Allowed To Go Over \`65\` Characters!**`)
            return message.lineReplyNoMention(maxlen)
        }
        message.lineReplyNoMention({ files: [{ attachment: `https://ctk-api.herokuapp.com/clyde/${clydeMessage}`, name: 'xopbotclyde.jpg' }] });
    }
}