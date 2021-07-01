const fetch = require("node-fetch");

module.exports = {
  name: "anime",
  permissions: ["SEND_MESSAGES"],
  cooldown: 10,
  category: "info",
  aliases: ["kitsu"],
  description: "Get anime information",
  usage: "`a!anime <anime_name>`",
  async execute(client, message, cmd, args, Discord) {

    if(!args.length) {

      return message.channel.send("**Please Give Anime Name For XOPBOT To Find!**")

    }
  await message.channel.send("Loading Anime....")

    try {

    let body = await fetch(`https://kitsu.io/api/edge/anime?filter[text]=${args.join(" ")}`)

    body = await body.json()

        const embed = new Discord.MessageEmbed()
        .setTitle(body.data[0].attributes.slug)
        .setColor("RED")
        .setDescription(body.data[0].attributes.synopsis)
        .setThumbnail(body.data[0].attributes.posterImage.original)
        .addField("Ratings", body.data[0].attributes.averageRating)
        .addField("TOTAL EPISODES", body.data[0].attributes.episodeCount)

        //.setImage(body.data[0].attributes.coverImage.large)

        //try it
        message.channel.send(embed)
      } catch (err) {


         return message.channel.send("**XOPBOT Was Unable To Find This Anime!**");

       }               

  }

}