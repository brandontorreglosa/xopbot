module.exports = {
    name: 'ping',
    permissions: ["SEND_MESSAGES"],
    cooldown: 2,
    description: "this is a ping command!",
    execute(client, message, cmd, args, Discord) {
        message.channel.send({ content: '**Pong!**' });
    }
}