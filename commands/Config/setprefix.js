
const fs = require('fs');

module.exports = {
  name: 'setprefix',
  cooldown: 10,
  permissions: ["ADMINISTRATOR"],
  async execute(client, message, cmd, args, Discord) {

    if (!args[0]) return message.reply({ content: "Please Specify A Prefix!", allowedMentions: { repliedUser: true } });
    let Prefixset = args.slice(0).join(" ");
    if (Prefixset.length > 5) return message.reply({ content: '**Prefix Can Not Be Longer Than 5 Characters!**', allowedMentions: { repliedUser: true } })

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json")); 
    prefixes[message.guild.id] = { 
      prefix: Prefixset 
    }

    fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => { 
      if (err) console.log(err);
    })

    message.channel.send({ content: `Prefix Has Been Set To ||**${Prefixset}**||` }); 
    return; //return
  }
}