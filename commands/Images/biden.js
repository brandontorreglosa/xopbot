const Discord = require('discord.js');

module.exports = {
  name: 'biden',
  permissions: ["SEND_MESSAGES"],
  cooldown: 5,
  description: 'Get a custom clyde message!',
  async execute(client, message, cmd, args, Discord) {
    if (!args[0]) {
      return message.reply({ content: '`Usage: (prefix)biden <msg>`', allowedMentions: { repliedUser: true } })
    }
    let bidenMessage = args.slice(0).join(' ');
    if (bidenMessage.length > 65) return message.reply({ content: '**You Are Not Allowed To Go Over 65 Characters!**', allowedMentions: { repliedUser: true } });

    message.channel.send({ files: [{ attachment: `https://api.popcatdev.repl.co/biden?text=${bidenMessage}`, name: 'xopbotbiden.jpg' }] });
  }
}