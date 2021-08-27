const ms = require('ms')
const { MessageEmbed } = require('discord.js')
const lineReplyNoMention = require('discord-reply');
module.exports = {
  name: 'giveaway',
  permissions: ["MANAGE_MESSAGES"],
  cooldown: 10,
  async execute(client, message, cmd, args, Discord) {
    if (!args[0]) return message.lineReplyNoMention({ content: `**You Did Not Specify Your Time By (s/m/h/d)!**` });
    if (
      !args[0].endsWith("d") &&
      !args[0].endsWith("h") &&
      !args[0].endsWith("m") &&
      !args[0].endsWith("s")
    )
      return message.lineReplyNoMention({
        content:
          `**You Did Not Use The Correct Formatting For The Time!**`
      });
    if (isNaN(args[0][0])) return message.lineReplyNoMention({ content: `**That Is Not A Number!**` });
    let channel = message.mentions.channels.first();
    if (!channel)
      return message.lineReplyNoMention({
        content:
          `**I Could Not Find That Channel In The Guild!**`
      });
    let prize = args.slice(2).join(" ");
    if (!prize) return message.lineReplyNoMention({ content: `**No Prize Was Specified!**` });
    message.lineReplyNoMention({ content: `**Giveaway Has Been Created In ${channel}**` });
    const Embed = new MessageEmbed()
      .setTitle(`New giveaway!`)
      .setDescription(`**🎁 ${prize} \n\nReact With 🎉 To Enter! \n\n1 Winner! \n\nHosted By ${message.author}!**`)
      .setTimestamp(Date.now() + ms(args[0]))
      .setColor(`BLUE`);
    let m = await channel.send(Embed);
    m.react("🎉");
    setTimeout(() => {
      if (m.reactions.cache.get("🎉").count <= 1) {
        message.lineReplyNoMention({ content: `**Reactions: ${m.reactions.cache.get("🎉").count}**` });
        return message.lineReplyNoMention({
          content:
            `**😭 Not Enough People Reacted For XOPBOT To Draw A Winner!**`
        });
      }

      let winner = m.reactions.cache
        .get("🎉")
        .users.cache.filter((u) => !u.bot)
        .random();
      channel.send({
        content:
          `**🥳 The Winner Of The Giveaway For ${prize} Is... ${winner}**`
      });
    }, ms(args[0]));
  },
};
