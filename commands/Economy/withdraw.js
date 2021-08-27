const profileModel = require("../../models/profileSchema");
const lineReplyNoMention = require('discord-reply');
module.exports = {
  name: "withdraw",
  cooldown: 3,
  permissions: ["SEND_MESSAGES"],
  aliases: ["wd"],
  permissions: [],
  description: "withdraw coins from your bank",
  async execute(client, message, cmd, args, Discord, profileData) {
    const amount = args[0];
    if (amount % 1 != 0 || amount <= 0) return message.lineReplyNoMention({ content: "**Withdraw Amount Must Be A Whole Number!**" });

    try {
      if (amount > profileData.bank) return message.lineReplyNoMention({ content: `**You Don't Have That Amount Of Xocoins To Withdraw!**` });

      await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            coins: amount,
            bank: -amount,
          },
        }
      );
      const embed = new Discord.MessageEmbed()
        .setTimestamp()
        .setTitle(`${message.author.username}`)
        .setDescription(`You Withdrew **${amount} Xocoins** Into Your **Wallet** 💸`)
        .setColor('#c30202')

      message.lineReplyNoMention(embed);
    } catch (err) {
      console.log(err);
    }
  },
};