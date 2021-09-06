const Discord = require('discord.js');
const lineReplyNoMention = require('discord-reply');
module.exports = {
  name: 'biden',
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
        .setDescription(`**\`(prefix)biden <text>\`**`)
      return message.lineReplyNoMention(nopr)
    }
    let bidenMessage = args.slice(0).join(' ');
    if (bidenMessage.length > 65) {
      const maxlen = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor('#c30202')
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**You Are Not Allowed To Go Over \`65\` Characters!**`)
      return message.lineReplyNoMention(maxlen)
    }

    // const embed = new Discord.MessageEmbed()
    //   .setTimestamp()
    //   .setTitle('BIDEN')
    //   .setColor('#c30202')
    //   .setImage(`https://api.popcat.xyz/biden?text=${bidenMessage}`)

    // message.lineReplyNoMention(embed)

    message.lineReplyNoMention({ files: [{ attachment: `https://api.popcat.xyz/biden?text=${bidenMessage}`, name: 'xopbotbiden.jpg' }] });
  }
}