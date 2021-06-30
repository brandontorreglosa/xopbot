const Discord = require('discord.js');

module.exports = {
  name: 'clyde',
  permissions: ["SEND_MESSAGES"],
  cooldown: 3,
  description: 'Get a custom clyde message!',
  async execute(client, message, cmd, args, Discord)  {
    if (!args[0]) {
    return message.channel.send('`Usage: (prefix)clyde <msg>`')
    }
    let clydeMessage = args.slice(0).join(' ');
    if (clydeMessage.length > 80) return message.channel.send('**You Are Not Allowed To Go Over 80 Characters!**');

    message.channel.send({files : [{attachment: `https://ctk-api.herokuapp.com/clyde/${clydeMessage}`, name: 'file.jpg'}]});
  }
}