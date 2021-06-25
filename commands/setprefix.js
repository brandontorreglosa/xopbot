
const fs = require('fs');

module.exports = {
    name: 'setprefix',
    permissions: ["ADMINISTRATOR"],
   async execute(client, message, cmd, args, Discord){

      if(!args[0]) return msg.channel.send(":warning: Please specify a prefix!"); //If there isn't a prefix then return a message
      
      let prefixes = JSON.parse(fs.readFileSync("../moderation/prefixes.json")); //Read File
      prefixes[msg.guild.id] = { //Let The config be
      prefix: args[0] //Let prefix = arguement 1
      }
      
      fs.writeFile("../../prefixes.json", JSON.stringify(prefixes), (err) => { //Write File
        if(err) console.log(err); //If error log error to the console
      })
      
      msg.channel.send(`Prefix has been set to **${args[0]}**!`); //send message to that channel
      return; //return
    }
}