const superagent = require("snekfetch");
const Discord = require('discord.js')


module.exports = {
  name: "cat",
  permissions: ["SEND_MESSAGES"],
  cooldown: 2,
  category: "FUN",
  description: "Sends a random image of a cat",
  usage: "[command]",
  async execute(client, message, cmd, args, Discord) {
    //command
    superagent.get('https://nekos.life/api/v2/img/meow')
      .end((err, response) => {
        const lewdembed = new Discord.MessageEmbed()
          .setTimestamp()
          .setTitle("🐱")
          .setImage(response.body.url)
          .setColor('#c30202')
          .setFooter(`owo`)
          .setURL(response.body.url);
        message.channel.send({ embeds: [lewdembed] });
      })
  }
};