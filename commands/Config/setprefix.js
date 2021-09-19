const fs = require('fs');
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
const gcolor = process.env.Gcolor;
module.exports = {
  name: 'setprefix',
  cooldown: 10,
  permissions: ["ADMINISTRATOR"],
  clientpermissions: ["SEND_MESSAGES", "MANAGE_MESSAGES", "EMBED_LINKS"],
  async execute(client, message, cmd, args, Discord) {

    if (!args[0]) {
      const nopr = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor(`${color}`)
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**\`(prefix)setprefix <newprefix>\`**`)
      return message.lineReplyNoMention(nopr)
    }
    const Prefixset = args.slice(0).join(" ");
    if (Prefixset.length > 5) {
      const maxpr = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor(`${color}`)
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**Prefix Can Not Be Longer Than \`5\` Characters!**`)
      return message.lineReplyNoMention(maxpr)
    }

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json"));
    prefixes[message.guild.id] = {
      prefix: Prefixset
    }

    fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
      if (err) console.log(err);
    })
    const newpr = new Discord.MessageEmbed()
      .setTimestamp()
      .setColor(`${gcolor}`)
      .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(`**Prefix Has Been Set To \`${Prefixset}\`!**`)
    message.lineReplyNoMention(newpr);
    return; //return
  }
}