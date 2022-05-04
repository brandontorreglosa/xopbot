// const mongodburl = process.env.X_MongodbURL;
// //const { Database } = require("quickmongo");
// //const quick = new Database(mongodburl)
// const lineReplyNoMention = require('discord-reply');
// const color = process.env.Color;
// const errorChannel = process.env.errorChannel;
// module.exports = {
//   name: 'afkset',
//   cooldown: 10,
//   permissions: ["SEND_MESSAGES"],
//   clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS", "MANAGE_NICKNAMES"],
//   aliases: ['afk', 'setafk'],
//   description: 'Set your afk status',
//   async execute(client, message, cmd, args, Discord) {
//     try {
//       quick.set(`${message.author.id}_${message.guild.id}_afk`, {
//         username: message.member.displayName.replace('[AFK]', ''),
//         active: true,
//         date: Date.now(),
//       });
//       message.member
//         .setNickname(`[AFK] ${message.member.displayName.replace('[AFK]', '')}`)
//         .then(() => {
//           const success = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**Status Successfully Set To \`[AFK]\`!**`)
//           return message.lineReplyNoMention({ embed: success })
//         })
//         .catch(_e => {
//           const errdem = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription('**Failed To Set Your Status Due To Very High Role Try Demoting!**').setFooter('Try Also Moving My Role On Top Of All!')
//           quick.delete(`${message.author.id}_${message.guild.id}_afk`);
//           return message.lineReplyNoMention({ embed: errdem });
//         });
//     } catch (err) {
//       const errorlogs = client.channels.cache.get(errorChannel)
//       errorlogs.send({ content: `**Error On AFK Command!\n\nError:\n\n ${err}**` })
//     };
//   },
// };