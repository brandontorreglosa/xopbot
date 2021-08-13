const Discord = require('discord.js');

module.exports = {
  name: 'clyde',
  permissions: ["SEND_MESSAGES"],
  cooldown: 3,
  description: 'Get a custom clyde message!',
  async execute(client, message, cmd, args, Discord) {
    if (!args[0]) {
      return message.reply({ content: '`Usage: (prefix)clyde <msg>`', allowedMentions: { repliedUser: true } })
    }
    let clydeMessage = args.slice(0).join(' ');
    if (clydeMessage.length > 65) return message.reply({ content: '**You Are Not Allowed To Go Over 65 Characters!**', allowedMentions: { repliedUser: true } });

    message.channel.send({ files: [{ attachment: `https://ctk-api.herokuapp.com/clyde/${clydeMessage}`, name: 'file.jpg' }] });
  }
}