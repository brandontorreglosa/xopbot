//const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();


module.exports = {
  name: "spank",
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
        const user = message.mentions.users.first();
        if(!user)
        return message.reply('Mention someone to spank');

        async function work() {
        let owo = (await neko.nsfw.spank());

        const cuddleembed = new Discord.MessageEmbed()
        .setTitle(user.username + " You have been spanked! ")
        .setDescription((user.toString() + " has been spanked by " + message.author.toString() + "!"))
        .setImage(owo.url)
        .setColor(`#000000`)
        .setURL(owo.url);
        message.channel.send(cuddleembed);

}

      work();
}
                };
