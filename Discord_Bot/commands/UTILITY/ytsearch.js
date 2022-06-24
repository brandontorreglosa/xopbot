const sr = require('yt-search');
const color = process.env.Color;
const lineReplyNoMention = require("discord-reply");
let logo = ("https://cdn.discordapp.com/attachments/868172328998146195/892831378515845130/1280px-YouTube_full-color_icon_2017.svg.png");
module.exports = {
  name: 'ytsearch',
  permissions: ["SEND_MESSAGES"],
  clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  cooldown: 10,
  aliases: ['yts'],
  description: 'Search for a YouTube video',
  async execute(client, message, cmd, args, Discord) {
    const search = async (argument) => {
      const Result = await sr(argument)
      return (Result.videos.length > 1) ? Result.videos[0] : null
    }
    const vid = search(args.join(' '))
    if (vid) {
      const embed = new Discord.MessageEmbed().setTitle((await vid).title).addFields({ name: 'Duration', value: `${(await vid).duration.timestamp} minutes`, inline: true }, { name: 'Created', value: `${(await vid).ago}`, inline: true }, { name: 'Views', value: `${(await vid).views.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`, inline: true },).setURL((await vid).url).setColor(`${color}`).setTimestamp().setImage((await vid).thumbnail).setAuthor((await vid).author.name, logo, (await vid).author.url).setFooter(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
      return message.lineReplyNoMention({ embed: embed })
    } else {
      message.lineReplyNoMention({ content: '**There Was An Error Finding That Command!**' })
    }
  }
}
