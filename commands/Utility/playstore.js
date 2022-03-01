const play = require("google-play-scraper");
const lineReplyNoMention = require("discord-reply");
const color = process.env.Color;
module.exports = {
  name: "playstore",
  permissions: ["SEND_MESSAGES"],
  clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  cooldown: 10,
  aliases: ['app', 'playstore'],
  description: 'Look on the playstore for an app!',
  async execute(client, message, cmd, args, Discord) {
    if (!args[0]) {
      const nopr = new Discord.MessageEmbed()
        .setTimestamp()
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor(`${color}`)
        .setDescription(`**\`(prefix)playstore <app name>\`**`)
      return message.lineReplyNoMention(nopr);
    }

    const kata = args.slice(0).join(" ");

    play.search({ term: kata, num: 1 })
      .then(data => {

        let app = data[0].appId
        play.app({ appId: app })
          .then(data => {
            let price = data.price === 0 ? "Free" : `${data.price}`

            let embed = new Discord.MessageEmbed()
              .setTimestamp()
              .setColor(`${color}`)
              .setAuthor(`${data.title}`, message.author.displayAvatarURL({ dynamic: true }))
              .setThumbnail(data.icon)
              .setDescription(`**${data.summary}**`)
              .addField('🧑‍🔧 Developer', data.developer, true)
              .addField('💰 Price', price, true)
              .addField('👍 Ratings', data.scoreText, true)
              .addField('⬇️ Downloads', data.installs === undefined ? "None" : data.installs, true)
              .addField('😕 Genre', data.genre === undefined ? "None" : data.genre, true)
              .addField('⏲️ Released Date', data.released === undefined ? "None" : data.released, true)
              .addField('🔗 Application Link', `[App Link](${data.url})`, true)
              .addField('💬 Comment', data.comments[0] === undefined ? "None" : data.comments[0], true)
              .setFooter(`Created by: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
            return message.lineReplyNoMention(embed);
          })
      })
  }
}