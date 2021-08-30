const lineReplyNoMention = require('discord-reply');
module.exports = {
  name: "give",
  cooldown: 10,
  aliases: [],
  permissions: ["SEND_MESSAGES"],
  description: "give a player some Xocoins",
  async execute(client, message, cmd, args, Discord, profileData) {
    if (!args[0]) {
      return message.lineReplyNoMention({ content: '**`(prefix)give <@user> <xocoins>`**' })
    }

    const user = message.mentions.users.first();
    if (!user) return message.lineReplyNoMention({ content: "**That User Does Not Exist In This Server!**" });

    const amount = args[1];
    if (!args[1]) {
      return message.lineReplyNoMention({ content: '**Please Specify The Coins To Give!**' })
    }

    if ((await client.bal(message.author.id)) < amount) return message.lineReplyNoMention({ content: "**You Dont Have That Many Xocoins!**" });
    if (isNaN(args[1])) return message.lineReplyNoMention({ content: '**That Is Not A Number!**' })

    try {
      await client.rmv(message.author.id, amount)
      await client.add(user.id, amount)
      const embed = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor('#c30202')
        .setTitle(`${message.author.username}`)
        .setDescription(`**This User Has Been Given ${amount} Of Xocoins!** 💸`)
      return message.lineReplyNoMention(embed);
    } catch (err) {
      console.log(err);
    }
  },
};