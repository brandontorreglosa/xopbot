const Discord = require('discord.js');

module.exports = {
  name: 'pikachu',
  permissions: ["SEND_MESSAGES"],
  cooldown: 3,
  description: 'Get a custom clyde message!',
  async execute(client, message, cmd, args, Discord) {
    if (!args[0]) {
      return message.channel.send('`Usage: (prefix)pikachu <msg>`')
    }
    let pikachuMessage = args.slice(0).join(' ');
    if (pikachuMessage.length > 35) return message.channel.send('**You Are Not Allowed To Go Over 35 Characters!**');

    message.channel.send({ files: [{ attachment: `https://api.popcatdev.repl.co/pikachu?text=${pikachuMessage}`, name: 'xopbotpikachu.jpg' }] });
  }
}