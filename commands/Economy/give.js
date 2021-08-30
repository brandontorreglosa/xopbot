const lineReplyNoMention = require('discord-reply');
module.exports = {
  name: "give",
  cooldown: 3,
  aliases: [],
  permissions: ["SEND_MESSAGES"],
  description: "give a player some Xocoins",
  async execute(client, message, cmd, args, Discord, profileData) {
    if (!args[0]) {
      return message.lineReplyNoMention('**`(prefix)give <@user> <coins>`**')
    }

    const user = message.mentions.users.first();
    if (!user) return message.lineReplyNoMention({ content: "**That User Does Not Exist In This Server!**" });

    const amount = args[1];
    if (!args[1]) {
      return message.lineReplyNoMention('**Please Specify The Coins To Give!**')
    }

    if ((await client.bal(message.author.id)) < amount) return message.lineReplyNoMention({ content: "**You Dont Have That Many Xocoins!**" });

    try {
      await client.rmv(message.author.id, amount)
      await client.add(user.id, amount)
      return message.lineReplyNoMention({ content: `**This User Has Been Given ${amount} Of Xocoins!** 💸` });
    } catch (err) {
      console.log(err);
    }
  },
};