const ms = require('ms')
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'giveaway',
  permissions: ["MANAGE_MESSAGES"],
  cooldown: 10,
  async execute(client, message, cmd, args, Discord) {
    if (!args[0]) return message.channel.send(`**You Did Not Specify Your Time By (s/m/h/d)!**`);
    if (
      !args[0].endsWith("d") &&
      !args[0].endsWith("h") &&
      !args[0].endsWith("m") &&
      !args[0].endsWith("s")
    )
      return message.channel.send(
        `**You Did Not Use The Correct Formatting For The Time!**`
      );
    if (isNaN(args[0][0])) return message.channel.send(`**That Is Not A Number!**`);
    let channel = message.mentions.channels.first();
    if (!channel)
      return message.channel.send(
        `**I Could Not Find That Channel In The Guild!**`
      );
    let prize = args.slice(3).join(" ");
    if (!prize) return message.channel.send(`**No Prize Was Specified!**`);
    message.channel.send(`**Giveaway Has Been Created In ${channel}**`);
    let Embed = new MessageEmbed()
      .setTitle(`New giveaway!`)
      .setDescription(
        `**🎁 ${prize} \n\nReact With 🎉 To Enter! \n\n1 Winner! \n\nHosted By ${message.author}!**`
      )
      .setTimestamp(Date.now() + ms(args[0]))
      .setColor(`BLUE`);
    let m = await channel.send(Embed);
    m.react("🎉");
    setTimeout(() => {
      if (m.reactions.cache.get("🎉").count <= 1) {
        message.channel.send(`**Reactions: ${m.reactions.cache.get("🎉").count}**`);
        return message.channel.send(
          `**😭 Not Enough People Reacted For XOPBOT To Draw A Winner!**`
        );
      }

      let winner = m.reactions.cache
        .get("🎉")
        .users.cache.filter((u) => !u.bot)
        .random();
      channel.send(
        `**🥳 The Winner Of The Giveaway For ${prize} Is... ${winner}**`
      );
    }, ms(args[0]));
  },
};
