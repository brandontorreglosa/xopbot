const Discord = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
  name: "bdsm",
  aliases: [],
  description: "Get some wallpapers",
  async execute(client, message, cmd, args, Discord)  {
    
    if(!message.channel.nsfw) {
      return message.reply("This channel dosen't support nsfw content")
      
    } else {
    
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setImage(akaneko.nsfw.bdsm());
    return message.channel.send(embed);
      
    }
  }
}