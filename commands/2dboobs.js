const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "2dboobs",
permissions: ["SEND_MESSAGES"],
  async execute(client, message, cmd, args, Discord)  {
  //command

  //Checks channel for nsfw
  var errMessage = "This is not an NSFW Channel";
  if (!message.channel.nsfw) {
      message.react('💢');

      return message.reply(errMessage)
      .then(msg => {
      msg.delete({ timeout: 3000 })
      })
      
  }

        async function work() {
        let owo = (await neko.nsfw.boobs());

        const boobs = new Discord.MessageEmbed()
        .setTitle("2D Boobs")
        .setImage(owo.url)
        .setColor(`#FF0000`)
        .setURL(owo.url);
        message.channel.send(boobs);

}

      work();
}
                };