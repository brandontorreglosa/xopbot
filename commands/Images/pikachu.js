const Discord = require('discord.js');
const lineReplyNoMention = require('discord-reply');
module.exports = {
  name: 'pikachu',
  permissions: ["SEND_MESSAGES"],
  clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  cooldown: 5,
  description: 'Get a custom clyde message!',
  async execute(client, message, cmd, args, Discord) {
    if (!args[0]) {
      const nopr = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor('#c30202')
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**\`(prefix)pikachu <text>\`**`)
      return message.lineReplyNoMention(nopr)
    }
    let pikachuMessage = args.slice(0).join(' ');
    if (pikachuMessage.length > 35) {
      const maxlen = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor('#c30202')
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**You Are Not allowed To Go Over \`35\` Characters!**`)
      return message.lineReplyNoMention(maxlen)
    }

    // const embed = new Discord.MessageEmbed()
    //   .setTimestamp()
    //   .setTitle('PIKACHU')
    //   .setColor('#c30202')
    //   .setImage(`https://api.popcat.xyz/pikachu?text=${pikachuMessage}`)

    // message.lineReplyNoMention(embed)

    message.lineReplyNoMention({ files: [{ attachment: `https://api.popcat.xyz/pikachu?text=${pikachuMessage}`, name: 'xopbotpikachu.jpg' }] });
  }
}