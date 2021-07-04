const Discord = require('discord.js');

module.exports = {
  name: 'facts',
  permissions: ["SEND_MESSAGES"],
  cooldown: 3,
  description: 'Get a custom clyde message!',
  async execute(client, message, cmd, args, Discord)  {
    if (!args[0]) {
    return message.channel.send('`Usage: (prefix)facts <msg>`')
    }
    let factsMessage = args.slice(0).join(' ');
    if (factsMessage.length > 25) return message.channel.send('**You Are Not Allowed To Go Over 25 Characters!**');

    message.channel.send({files : [{attachment: `https://api.popcatdev.repl.co/facts?text=${factsMessage}`, name: 'xopbotfacts.jpg'}]});
  }
}