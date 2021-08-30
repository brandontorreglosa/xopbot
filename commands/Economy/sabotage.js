// const lineReplyNoMention = require('discord-reply');
// const profileModel = require("../../models/profileSchema");
// module.exports = {
//     name: 'sabotage',
//     permissions: ["SEND_MESSAGES"],
//     cooldown: 10800,
//     description: "sabotage Command!",
//     async execute(client, message, cmd, args, Discord) {
//         const user = message.mentions.users.first()
//         if (!user) return message.lineReplyNoMention({ content: '**`(prefix)sabotage <@user>`**' })

//         function random() {
//             const num = Math.floor(Math.random() * 2)
//             return num === 1
//         }
//         const targetData = await profileModel.findOne({ userID: user.id });
//         if (!targetData) return message.channel.send({ content: `**This User Does Not Exist In The Database!**` });
//         if (random() === true) {
//             const RobAmount = Math.floor(Math.random() * 20000)
//             message.lineReplyNoMention({ content: `**Congrats You Sabotaged ${RobAmount} From ${user.username}**` })
//             await profileModel.findOneAndUpdate(
//                 {
//                     userID: user.id,
//                 },
//                 {
//                     $inc: {
//                         coins: -RobAmount,
//                     },
//                 }
//             );
//         } else {
//             const LooseAmount = Math.floor(Math.random() * 10000)
//             message.lineReplyNoMention({ content: `**Oh! You Got Caught, And Lost ${LooseAmount}. Better Luck Next Time!**` })
//             await profileModel.findOneAndUpdate(
//                 {
//                     userID: message.author.id,
//                 },
//                 {
//                     $inc: {
//                         coins: -LooseAmount,
//                     },
//                 }
//             );
//         }
//     }
// }