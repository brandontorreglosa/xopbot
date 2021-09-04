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
      return message.lineReplyNoMention({ content: '**`(prefix)alert <text>`**' }) // allowedMentions: { repliedUser: true } })
    }
    let alertMessage = args.slice(0).join(' ');
    if (alertMessage.length > 65) return message.lineReplyNoMention({ content: '**You Are Not Allowed To Go Over 65 Characters!**' }) //, allowedMentions: { repliedUser: true }});

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