const { MessageEmbed } = require('discord.js')
const sr = require ('yt-search')
let logo = ("https://cdn.discordapp.com/attachments/868172328998146195/892831378515845130/1280px-YouTube_full-color_icon_2017.svg.png")
module.exports = {
  name: 'ytsearch',
  permissions: ["SEND_MESSAGES"],
  clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  cooldown: 10,
  aliases: ['yts'],
  description: 'Search for a YouTube video',
  run: async (client, message, args, Discord) => {
    const search = async (argument) => {
      const Result = await sr(argument)
      return (Result.videos.length > 1) ? Result.videos[0] : null
    }

    const vid = search(args.join(' '))
    if (vid) {
      const embed = new MessageEmbed()
      .setTitle((await vid).title)
      .addFields(
        {
          name: 'Duration',
          value: `${(await vid).duration.timestamp} minutes`,
          inline: true
      },
      {
          name: 'Created',
          value: `${(await vid).ago}`,
          inline: true
      },
      {
          name: 'Views',
          value: `${(await vid).views}`,
          inline: true
      },
    )
      .setURL((await vid).url)
      .setColor('RED')
      .setTimestamp()
      .setImage((await vid).thumbnail)
      .setAuthor((await vid).author.name, logo, (await vid).author.url)
      .setFooter(message.author.username, message.author.avatarURL({ dynamic: true} ))
      return message.channel.send ({ embeds: [embed] })
    } else {
      message.reply({ content: 'No search results found.'})
    }
  }
}