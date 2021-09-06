const Discord = require('discord.js');
const lineReplyNoMention = require('discord-reply');
module.exports = {
  name: 'alert',
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
        .setDescription(`**\`(prefix)alert <text>\`**`)
      return message.lineReplyNoMention(nopr)
    }
    let alertMessage = args.slice(0).join(' ');
    if (alertMessage.length > 65) {
      const maclen = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor('#c30202')
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**You Are Not Allowed To Go Over \`65\` Characters!**`)
      return message.lineReplyNoMention(maclen)
    }

    const embed = new Discord.MessageEmbed()
      .setTimestamp()
      .setTitle('ALERT')
      .setDescription('**Currently Not Working! Fixing Issue ASAP**')
      .setColor('#c30202')
      .setImage(`https://api.popcat.xyz/alert?text=${alertMessage}`)

    message.lineReplyNoMention(embed)

    //message.channel.send({ files: [{ attachment: `https://api.popcat.xyz/alert?text=${alertMessage}`, name: 'xopbotalert.jpg' }] });
  }
}