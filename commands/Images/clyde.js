const Discord = require('discord.js');
const lineReplyNoMention = require('discord-reply');
module.exports = {
  name: 'clyde',
  permissions: ["SEND_MESSAGES"],
  cooldown: 5,
  description: 'Get a custom clyde message!',
  async execute(client, message, cmd, args, Discord) {
    if (!args[0]) {
      return message.lineReplyNoMention({ content: '**`(prefix)clyde <text>`**' }) //, allowedMentions: { repliedUser: true } })
    }
    let clydeMessage = args.slice(0).join(' ');
    if (clydeMessage.length > 65) return message.lineReplyNoMention({ content: '**You Are Not Allowed To Go Over 65 Characters!**' }) //, allowedMentions: { repliedUser: true } });

    // const embed = new Discord.MessageEmbed()
    //   .setTimestamp()
    //   .setTitle('CLYDE')
    //   .setColor('#c30202')
    //   .setImage(`https://ctk-api.herokuapp.com/clyde/${clydeMessage}`)

    // message.lineReplyNoMention(embed)

    message.lineReplyNoMention({ files: [{ attachment: `https://ctk-api.herokuapp.com/clyde/${clydeMessage}`, name: 'file.jpg' }] });
  }
}