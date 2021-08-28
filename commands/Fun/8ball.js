const { MessageEmbed } = require('discord.js');
const lineReplyNoMention = require('discord-reply');
module.exports = {
  name: '8ball',
  permissions: ["SEND_MESSAGES"],
  aliases: ['8b', '8ba'],
  cooldown: 5,
  description: 'Asks a question and let the bot determine your fate :sparkler:',
  async execute(client, message, cmd, args, Discord) {
    if (!args[0]) return message.lineReplyNoMention({ content: '**`(prefix)8ball <question>`**' }); // return if no question is commenced
    const replies = ['Yes.', 'No.', 'Never.', 'Definitely.', 'Ask again later.', 'You Wish.', 'No You Aint You Bot!']; // random responses

    const result = Math.floor(Math.random() * replies.length); // Get a random respons for the array
    const question = args.join(' '); // join the args(Array<string>) to a question string
    // check permissions for embed
    const embed = new MessageEmbed() // create embed 
      .setTimestamp()
      .setAuthor('**🎱 The 8 Ball says...**')
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
      .setColor('#c30202').addField('Question:', question)
      .addField('Answer:', replies[result]);
    await message.lineReplyNoMention(embed); // send embed message
  },
};