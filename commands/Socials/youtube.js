
module.exports = {
  name: 'youtube',
  cooldown: 3,
  permissions: ["SEND_MESSAGES"],
  description: "Sends The Owners Youtube Channel!",
  execute(client, message, cmd, args, Discord) {
    message.channel.send({ content: 'https://www.youtube.com/channel/UCCfKUHKPwTullX7aoFUjCIQ' });
  }
}