//const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "cumart",
  permissions: ["SEND_MESSAGES"],
   async execute(client, message, cmd, args, Discord) {
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
        let owo = (await neko.nsfw.cumArts());

        const cumslut = new Discord.MessageEmbed()
        .setTitle("cumArts")
        .setImage(owo.url)
        .setColor(`#FF0000`)
        .setURL(owo.url);
        message.channel.send(cumslut);

}

      work();
}
                };