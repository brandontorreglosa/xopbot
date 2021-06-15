const Discord = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
  name: "bdsm",
  permissions: ["SEND_MESSAGES"],
  aliases: [],
  description: "Get some wallpapers",
 async execute(client, message, cmd, args, Discord)  {
    
    if (!message.channel.nsfw) return message.channel.send('**This Is Not A NSFW Channel! 🔞**') 

    var lo = new Discord.MessageEmbed()
    .setDescription(`Sending 4k...`)
    .setTimestamp()

message.channel.send(lo).then(m => {
    
    let akanekoSan = new Discord.MessageEmbed()
    akanekoSan.setTimestamp()
    akanekoSan.setImage(akaneko.nsfw.bdsm());
    akanekoSan.setFooter('Nice Huh :)')
    return message.channel.send(akanekoSan);
      
    });
}
}