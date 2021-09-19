const fetch = require("node-fetch");
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
  name: "anime",
  permissions: ["SEND_MESSAGES"],
  clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  cooldown: 10,
  category: "info",
  aliases: ["kitsu"],
  description: "Get anime information",
  usage: "`a!anime <anime_name>`",
  async execute(client, message, cmd, args, Discord) {
    const load = new Discord.MessageEmbed()
      .setTimestamp()
      .setColor(`${color}`)
      .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(`**Loading...**`)

    if (!args[0]) {
      const nopr = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor(`${color}`)
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**\`(prefix)anime <series>\`**`)
      return message.lineReplyNoMention(nopr)
    }
    await message.lineReplyNoMention(load)

    try {
      const body = await fetch(`https://kitsu.io/api/edge/anime?filter[text]=${args.join(" ")}`)
      body = await body.json()

      const embed = new Discord.MessageEmbed()
        .setTimestamp()
        .setTitle(body.data[0].attributes.slug)
        .setColor(`${color}`)
        .setDescription(body.data[0].attributes.synopsis)
        .setThumbnail(body.data[0].attributes.posterImage.original)
        .addField("Ratings", body.data[0].attributes.averageRating)
        .addField("TOTAL EPISODES", body.data[0].attributes.episodeCount)
        .setFooter(`Requested By: ${message.author.tag}`, message.author.displayAvatarURL())
      message.lineReplyNoMention(embed)
    } catch (err) {
      return message.lineReplyNoMention({ content: "**XOPBOT Was Unable To Find This Anime Series!**" });
    }

  }

}