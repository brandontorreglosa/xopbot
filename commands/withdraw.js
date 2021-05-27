const profileModel = require("../models/profileSchema");
module.exports = {
  name: "withdraw",
  permissions: ["SEND_MESSAGES"],
  aliases: ["wd"],
  permissions: [],
  description: "withdraw coins from your bank",
  async execute(client, message, cmd, args, Discord, profileData) {
    const amount = args[0];
    if (amount % 1 != 0 || amount <= 0) return message.channel.send("**Withdraw Amount Must Be A Whole Number!**");

    try {
      if (amount > profileData.bank) return message.channel.send(`**You Don't Have That Amount Of Xocoins To Withdraw!**`);

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

      return message.channel.send(`**You Withdrew ${amount} Xocoins Into Your Wallet** 💸`);
    } catch (err) {
      console.log(err);
    }
  },
};