const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: 'ping',
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES"],
    cooldown: 2,
    description: "this is a ping command!",
    async execute(client, message, cmd, args, Discord) {
        message.lineReplyNoMention({ content: '**Pong!**' });
    }
}