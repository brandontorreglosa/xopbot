module.exports = {
    name: 'scratch',
    permissions: ["SEND_MESSAGES"],
    description: "Sends The Owners Youtube Channel!",
    execute(client, message, cmd, args, Discord) {
        message.channel.send('https://scratch.mit.edu/users/COOLBLUEINKLINGTM/');

    }
}