const Levels = require('discord-xp');
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
  name: 'leaderboard',
  aliases: ['lb', 'ldb'],
  permissions: ["SEND_MESSAGES"],
  clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  cooldown: 10,
  description: "Top 10 members!",
  async execute(client, message, cmd, args, Discord) {

    const { guild } = message

    const { name } = guild


    const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 10); // We grab top 10 users with most xp in the current server.

    if (rawLeaderboard.length < 1) {
      const nopr = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor(`${color}`)
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**No User Is Currently In The Leaderboard Of \`${name}\`!**`)
      return message.lineReplyNoMention(nopr)
    }

    const leaderboard = await Levels.computeLeaderboard(client, rawLeaderboard, true); // We process the leaderboard.

    const lb = leaderboard.map(e => `**${e.position}. ${e.username}#${e.discriminator}\nLevel: ${e.level}\nXP: ${e.xp.toLocaleString()}**`); // We map the outputs.


    const newEmbed = new Discord.MessageEmbed()
      .setTimestamp()
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
      .setTitle('LeaderBoard')
      .setColor(`${color}`)
      .addFields(
        { name: '**Level Leaderboard**', value: `\n\n${lb.join("\n\n")}` }
      )
      .setFooter(`This Leaderboard Is Only For ${name} And Not Worldwide Servers!`)

    message.lineReplyNoMention(newEmbed);
  }
}