const Discord = require('discord.js');
const lineReplyNoMention = require('discord-reply');
module.exports = {
  name: 'pikachu',
  permissions: ["SEND_MESSAGES"],
  cooldown: 5,
  description: 'Get a custom clyde message!',
  async execute(client, message, cmd, args, Discord) {
    if (!args[0]) {
      return message.lineReplyNoMention({ content: '**`(prefix)pikachu <text>`**' }) //, allowedMentions: { repliedUser: true } })
    }
    let pikachuMessage = args.slice(0).join(' ');
    if (pikachuMessage.length > 35) return message.lineReplyNoMention({ content: '**You Are Not Allowed To Go Over 35 Characters!**' }) //, allowedMentions: { repliedUser: true } });

    const embed = new Discord.MessageEmbed()
      .setTimestamp()
      .setTitle('PIKACHU')
      .setColor('#c30202')
      .setImage(`https://api.popcat.xyz/pikachu?text=${pikachuMessage}`)

    message.lineReplyNoMention(embed)

    //message.channel.send({ files: [{ attachment: `https://api.popcatdev.repl.co/pikachu?text=${pikachuMessage}`, name: 'xopbotpikachu.jpg' }] });
  }
}