const ms = require('ms')
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'giveaway',
  permissions: ["MANAGE_MESSAGES"],
  cooldown: 10,
  async execute(client, message, cmd, args, Discord) {
    if (!args[0]) return message.channel.send(`You Did Not Specify Your Time By (m/h/d)!`);
    if (
      !args[0].endsWith("d") &&
      !args[0].endsWith("h") &&
      !args[0].endsWith("m")
    )
      return message.channel.send(
        `**You did not use the correct formatting for the time!**`
      );
    if (isNaN(args[0][0])) return message.channel.send(`**That Is Not A number!**`);
    let channel = message.mentions.channels.first();
    if (!channel)
      return message.channel.send(
        `**I Could Not Find That Channel In The Guild!**`
      );
    let prize = args.slice(2).join(" ");
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
          `**😭 Not Enough People Rreacted For XOPBOT To Draw A Winner!**`
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

 //         const channel = message.mentions.channels.first()
//         if(!channel) return message.channel.send('**Please Specify A Channel!**')

//         const duration = args[1]
//         if(!duration) return message.channel.send('**Please Enter A Valid Duration!**')

//         const winners = args[2]
//         if(!winners) return message.channel.send('**Please Specify An Amount Of Winners!**')

//         const prize = args.slice(3).join(" ")
//         if(!prize) return message.channel.send('**Please Specify A Prize To Win**')

//         client.giveaways.startGiveaway(channel, {
//             time : ms(duration),
//             prize : prize,
//             winnerCount: winners,
//             hostedBy: message.author,
//             messages: {
//                 giveaway:  "🎉🎉 **GIVEAWAY** 🎉🎉",
//                 giveawayEnd:  "🎉🎉 **GIVEAWAY ENDED** 🎉🎉",
//                 timeRemaining: "Time Remaining **{duration}**",
//                 inviteToParticipate: "React with 🎉 to join the giveaway",
//                 winMessage: "Congrats {winners}, You Have Won This Giveaway",
//                 embedFooter: "Giveaway Time!",
//                 noWinner: "Could not determine a winner",
//                 hostedBy: 'Hosted by {user}',
//                 winners: "winners",
//                 endedAt: 'Ends at',
//                 units: {
//                     seconds: "seconds",
//                     minutes: "minutes",
//                     hours: 'hours',
//                     days: 'days',
//                     pluralS: false
//                 }
//             },

//         })
//         message.channel.send(`**Giveaway Is Starting In ${channel}**`)