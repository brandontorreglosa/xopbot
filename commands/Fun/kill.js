const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: 'kill',
    permissions: ["SEND_MESSAGES"],
    aliases: ['slaughter', 'cut'],
    cooldown: 2,
    description: 'kill a user',
    async execute(client, message, cmd, args, Discord) {
        if (!args[0]) {
            return message.lineReplyNoMention('**`(prefix)kill <@user>`**')
        }
        const randomNumber = Math.floor(Math.random() * 500) + 1;
        const kill_list = message.mentions.users.map(user => {
            return `**${user.username} Was Killed By ${message.author.username} Who Used ${randomNumber} Power!**`;
        });

        message.lineReplyNoMention({ content: kill_list });
    }
}