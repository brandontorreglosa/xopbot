const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: 'clearbug',
    aliases: ['clearbugs', 'cb'],
    permissions: ["ADMINISTRATOR"],
    cooldown: 4200,
    description: 'kill a user',
    async execute(client, message, cmd, args, Discord) {

        message.lineReplyNoMention({ content: `**XOPBOT Cleared All Bugs From ${message.guild.name}! \nSome Bugs Will Stay Not All Can Be Removed!**`, allowedMentions: { repliedUser: true } });

    }
}