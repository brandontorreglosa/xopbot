const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "setwelcome",
  permissions: ["ADMINISTRATOR"],
  category: "moderation",
  usage: "setwelcome <#channel>",
  description: "Set the welcome channel",
  async execute(client, message, cmd, args, Discord)  {
    
    let channel = message.mentions.channels.first()
    
    if(!channel) {
      return message.channel.send("**Please Mention The Channel First**")
    }
    
    //Now we gonna use quick.db
    
    db.set(`welchannel_${message.guild.id}`, channel.id)
    
    message.channel.send(`**Welcome Channel is Has Been Set On ${channel}**`)
  }
}