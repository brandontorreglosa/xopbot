module.exports = {
    name: 'amino',
    cooldown: 2,
    permissions: ["SEND_MESSAGES"],
    description: "Sends The Owners Youtube Channel!",
    execute(client, message, cmd, args, Discord) {
        message.channel.send('https://aminoapps.com/c/splatoon/page/user/hackerpro-tm-sc/065i_afjvjXqMXB1d68dB0Y5oqM8pnB');
     }
}