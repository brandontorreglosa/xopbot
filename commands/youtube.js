
module.exports = {
    name: 'youtube',
    permissions: ["SEND_MESSAGES"],
    description: "Sends The Owners Youtube Channel!",
    execute(client, message, cmd, args, Discord) {
        message.channel.send('https://www.youtube.com/channel/UCCfKUHKPwTullX7aoFUjCIQ');

      }
}