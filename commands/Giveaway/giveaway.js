const ms = require('ms')
const { MessageEmbed } = require('discord.js')
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
  name: 'giveaway',
  permissions: ["MANAGE_MESSAGES"],
  clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS", "MANAGE_MESSAGES"],
  cooldown: 10,
  async execute(client, message, cmd, args, Discord) {
    const noformat = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**You Did Not Use The Correct Formatting!**`)
    if (!args[0]) {
      const nopr = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`(prefix)giveaway <time(s)(m)(h)(d)> <#channel> <prize>\`**`)
      return message.lineReplyNoMention({ embed: nopr })
    }
    const timetogive = args[0]; if (!args[0].endsWith("d") && !args[0].endsWith("h") && !args[0].endsWith("m") && !args[0].endsWith("s"))
      return message.lineReplyNoMention({ embed: noformat })
    if (isNaN(args[0][0])) {
      const nonum = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`${timetogive}\` Is Not A Number!**`)
      return message.lineReplyNoMention({ embed: nonum })
    }
    const channel = message.mentions.channels.first(); const thatnotxtc = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**I Could Not Find The Channel \`${channel}\`!**`)
    if (!channel)
      return message.lineReplyNoMention({ embed: thatnotxtc })
    const prize = args.slice(2).join(" "); if (!prize) {
      const thatnopriz = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**No Prize Was Specified!**`)
      return message.lineReplyNoMention({ embed: thatnopriz })
    }
    const successch = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**Giveaway Has Been Created In ${channel}!**`)
    message.lineReplyNoMention({ embed: successch }); const Embed = new MessageEmbed().setTitle(`New giveaway!`).setDescription(`**🎁 ${prize}\n\nReact With 🎉 To Enter!\n\n1 Winner!\n\nHosted By ${message.author}!**`).setTimestamp(Date.now() + ms(args[0])).setColor(`BLUE`); let m = await channel.send({ embed: Embed }); m.react("🎉"); setTimeout(() => {
      if (m.reactions.cache.get("🎉").count <= 1) {
        const ractcatch = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**Reactions: \`${m.reactions.cache.get("🎉").count}\`!**`)
        message.lineReplyNoMention({ embed: ractcatch }); const nooneract = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**Not Enough people Reacted For XOPBOT To Draw A Winner! 😭**`)
        return message.lineReplyNoMention({ embed: nooneract })
      }
      const winner = m.reactions.cache.get("🎉").users.cache.filter((u) => !u.bot).random(); const winisok = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**The Winner Of The Giveaway For \`${prize}\` Is... \`${winner}\`**`)
      channel.send({ embed: winisok });
    }, ms(args[0]));
  },
};