const imdb = require("imdb-api");
const color = process.env.Color;
const lineReplyNoMention = require("discord-reply");
module.exports = {
  name: "imdb",
  permissions: ["SEND_MESSAGES"],
  clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  cooldown: 10,
  description: "Get the information about series and movie",
  async execute(client, message, cmd, args, Discord) {
    if (!args[0]) {
      const nopr = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor(`${color}`)
        .setAuthor(`${message.author.username}`)
        .setDescription(`**\`(prefix)imdb <movie/series name>\`**`)
      return message.lineReplyNoMention(nopr)
    }
    const imob = new imdb.Client({ apiKey: "5e36f0db" });
    let movie = await imob.get({ name: args.slice(0).join(" ") });
    let embed = new Discord.MessageEmbed()
      .setTimestamp()
      .setAuthor(`${movie.title}`, message.author.displayAvatarURL({ dynamic: true }))
      .setColor(`${color}`)
      .setThumbnail(movie.poster)
      .setDescription(`**${movie.plot}**`)
      .setFooter(`Ratings: ${movie.rating}`)
      .addField("Country", movie.country, true)
      .addField("Languages", movie.languages, true)
      .addField("Type", movie.type, true);
    message.lineReplyNoMention(embed);
  }
};