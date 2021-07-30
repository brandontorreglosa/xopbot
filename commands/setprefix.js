
const fs = require('fs');

module.exports = {
  name: 'setprefix',
  cooldown: 10,
  permissions: ["ADMINISTRATOR"],
  async execute(client, message, cmd, args, Discord) {

    if (!args[0]) return message.reply("Please Specify A Prefix!"); //If there isn't a prefix then return a message
    let Prefixset = args.slice(0).join(" ");
    if (Prefixset.length > 5) return message.reply('**Prefix Can Not Be Longer Than 5 Characters!**')

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json")); //Read File
    prefixes[message.guild.id] = { //Let The config be
      prefix: Prefixset //Let prefix = arguement 1
    }

    fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => { //Write File
      if (err) console.log(err); //If error log error to the console
    })

    message.channel.send(`Prefix Has Been Set To **${args[0]}**!`); //send message to that channel
    return; //return
  }
}