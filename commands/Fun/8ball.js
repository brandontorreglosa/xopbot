const lineReplyNoMention = require('discord-reply');
module.exports = {
  name: '8ball',
  permissions: ["SEND_MESSAGES"],
  clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  aliases: ['8b', '8ba'],
  cooldown: 5,
  description: 'Asks a question and let the bot determine your fate :sparkler:',
  async execute(client, message, cmd, args, Discord) {
    if (!args[0]) {
      const nopr = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor('#c30202')
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**\`(prefix)8ball <question>\`**`)
      return message.lineReplyNoMention(nopr)
    }
    const replies = ['Yes.', 'No.', 'Never.', 'Definitely.', 'Ask again later.', 'You Wish.', 'No You Aint You Bot!'];

    const result = Math.floor(Math.random() * replies.length);
    const question = args.join(' ');

    const embed = new Discord.MessageEmbed()
      .setTimestamp()
      .setAuthor('**🎱 The 8 Ball says...**')
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
      .setColor('#c30202').addField('Question:', question)
      .addField('Answer:', replies[result]);
    await message.lineReplyNoMention(embed);
  },
};