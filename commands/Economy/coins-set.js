// const profileModel = require("../../models/profileSchema");
// const lineReplyNoMention = require('discord-reply');
// module.exports = {
//   name: "coins-set",
//   cooldown: 3,
//   aliases: ['cs', 'cst'],
//   permissions: ["SEND_MESSAGES"],
//   description: "give a player some Xocoins",
//   async execute(client, message, cmd, args, Discord, profileData) {
//     if (message.member.id != "600094534386319370") return message.lineReplyNoMention({ content: `**Sorry Only 👑HACKERPROᵈᵉᵛ#1498 Can Run This Command 😔**`}) //, allowedMentions: { repliedUser: true } });
//     if (!args.length) return message.lineReplyNoMention({ content: "**You Need To Mention A Player To Set Their Xocoins!**" });
//     const amount = args[1];
//     const target = message.mentions.users.first();
//     if (!target) return message.lineReplyNoMention({ content: "**That User Does Not Exist In This Server!**" });

//     if (amount % 1 != 0 || amount <= 0) return message.lineReplyNoMention({ content: "**Deposit Amount Must Be A Whole Number!**" });

//     try {
//       const targetData = await profileModel.findOne({ userID: target.id });
//       if (!targetData) return message.lineReplyNoMention({ content: `**This User Does Not Exist In The Database!**` });

//       await profileModel.findOneAndUpdate(
//         {
//           userID: target.id,
//         },
//         {
//           coins: amount,
//         },
//       );

//       return message.lineReplyNoMention({ content: `**This User's Xocoins Have Been Set To ${amount} Xocoins!** 💸` });
//     } catch (err) {
//       console.log(err);
//     }
//   },
// };