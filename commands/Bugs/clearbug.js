const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
const logChannel = process.env.logChannel;
module.exports = {
    name: 'clearbug',
    aliases: ['clearbugs', 'cb'],
    permissions: ["ADMINISTRATOR"],
    clientpermissions: ["ADMINISTRATOR"],
    cooldown: 4200, description: 'kill a user',
    async execute(client, message, cmd, args, Discord) {
        const clearbugembed = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**XOPBOT Cleared All Bugs From ${message.guild.name}!\nSome Bugs Will Stay Not All Can Be Removed!**`);
        message.lineReplyNoMention(clearbugembed)
        logChannel.send({ content: `**${message.author.username} used the command ${this.name} in ${message.guild.name}**` })
    }
}