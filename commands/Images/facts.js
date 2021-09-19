const Discord = require('discord.js');
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
  name: 'facts',
  permissions: ["SEND_MESSAGES"],
  clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  cooldown: 5,
  description: 'Get a custom clyde message!',
  async execute(client, message, cmd, args, Discord) {
    if (!args[0]) {
      const nopr = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor(`${color}`)
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**\`(prefix)facts <text>\`**`)
      return message.lineReplyNoMention(nopr)
    }
    let factsMessage = args.slice(0).join(' ');
    if (factsMessage.length > 25) {
      const maxlen = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor(`${color}`)
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**You Are Not Allowed To Go Over \`25\` Characters!**`)
      return message.lineReplyNoMention(maxlen)
    }

    // const embed = new Discord.MessageEmbed()
    //   .setTimestamp()
    //   .setTitle('FACTS')
    //   .setColor(`${color}`)
    //   .setImage(`https://api.popcat.xyz/facts?text=${factsMessage}`)

    // message.lineReplyNoMention(embed)

    message.lineReplyNoMention({ files: [{ attachment: `https://api.popcat.xyz/facts?text=${factsMessage}`, name: 'xopbotfacts.jpg' }] });
  }
}