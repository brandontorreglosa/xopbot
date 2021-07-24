const superagent = require("snekfetch");
const Discord = require('discord.js')



module.exports = {
  name: "dog",
  permissions: ["SEND_MESSAGES"],
  cooldown: 3,
  category: "fun",
  description: "Sends a random dog image",
  usage: "[command]",
  async execute(client, message, cmd, args, Discord) {
    //command
    superagent.get('https://nekos.life/api/v2/img/woof')
      .end((err, response) => {
        const lewdembed = new Discord.MessageEmbed()
          .setTimestamp()
          .setTitle("🐶")
          .setImage(response.body.url)
          .setColor('#c30202')
          .setFooter(`🤣WHAT A DOG🤣`)
          .setURL(response.body.url);
        message.channel.send(lewdembed);
      })
  }
};