const Discord = require('discord.js');

module.exports = {
  name: 'alert',
  permissions: ["SEND_MESSAGES"],
  cooldown: 5,
  description: 'Get a custom clyde message!',
  async execute(client, message, cmd, args, Discord) {
    if (!args[0]) {
      return message.reply({ content: 'Usage: `(prefix)clyde <msg>`', allowedMentions: { repliedUser: true } })
    }
    let alertMessage = args.slice(0).join(' ');
    if (alertMessage.length > 65) return message.reply({ content: '**You Are Not Allowed To Go Over 65 Characters!**', allowedMentions: { repliedUser: true } });

    message.channel.send({ files: [{ attachment: `https://api.popcatdev.repl.co/alert?text=${alertMessage}`, name: 'xopbotalert.jpg' }] });
  }
}