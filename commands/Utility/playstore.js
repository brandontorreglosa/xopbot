const Discord = require('discord.js');
const play = require('google-play-scraper');

module.exports = {
  name: "playstore",
  description: "Get info about application on playstore",
  permissions: ["SEND_MESSAGES"],
  category: "general",
  clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    cooldown: 5,
  usage: "playstore <app name>",
  aliases: ["app", "playstore", "ps"],
  async execute(client, message, cmd, args, Discord) {
    if (cmd.startsWith === 'playstore')
    let kata = args.join(" ") 
    if(!kata) return message.reply(`What's The Name Of Application Will You Search??`);
    
    play.search({term: kata,num:1})
    .then(data => {
      
    let app = data[0].appId
    play.app({appId:app})
    .then(lata => {
    let price = lata.price === 0? "Free" : `${lata.price}`
    
    let embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle(lata.title)
    .setThumbnail(lata.icon)
    .setDescription(lata.summary)
    .addField('Developer', lata.developer, true)
    .addField('Price', price, true)
    .addField('Ratings', lata.scoreText, true)
    .addField('Install', lata.installs === undefined ? "None" : lata.installs, true)
    .addField('Genre', lata.genre === undefined ? "None" : lata.genre, true)
    .addField('Released Date', lata.released === undefined ? "None" : lata.released, true)
    .addField('Application Link', `[App Link](${lata.url})`, true)
    .addField('Comment', lata.comments[0] === undefined ? "None" : lata.comments[0], true)
    .setFooter(`Request by: ${message.author.tag}`, message.author.displayAvatarURL({ format: "png", dynamic: true }))
    .setTimestamp()
    return message.channel.send(embed);
    })
    })
  }
}