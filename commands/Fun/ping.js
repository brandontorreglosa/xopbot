const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: 'ping',
    permissions: ["SEND_MESSAGES"],
    cooldown: 2,
    description: "this is a ping command!",
    execute(client, message, cmd, args, Discord) {
        message.lineReplyNoMention({ content: '**Pong!**' });
    }
}