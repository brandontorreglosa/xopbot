const profileModel = require("../../models/profileSchema");
const lineReplyNoMention = require('discord-reply');
module.exports = {
  name: "deposit",
  permissions: ["SEND_MESSAGES"],
  aliases: ["dep"],
  cooldown: 3,
  permissions: [],
  description: "Deposit Xocoins into your bank!",
  async execute(client, message, cmd, args, Discord, profileData) {
    const amount = args[0];
    if (amount % 1 != 0 || amount <= 0) return message.lineReplyNoMention({ content: "**`(prefix)deposit <number>`**" });
    try {
      if (amount > profileData.coins) return message.lineReplyNoMention({ content: `**You Don't Have That Amount Of Coins to Deposit!**` });
      await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            coins: -amount,
            bank: amount,
          },
        }
      );
      const embed = new Discord.MessageEmbed()
        .setTimestamp()
        .setTitle(`${message.author.username}`)
        .setDescription(`You Deposited **${amount} Xocoins** Into Your **Bank** 💸`)
        .setColor('#c30202')
      message.lineReplyNoMention(embed);
    } catch (err) {
      console.log(err);
    }
  },
};