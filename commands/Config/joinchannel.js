const Discord = require("discord.js")
const welcomeSchema = require("../../models/welcome");
const lineReplyNoMention = require('discord-reply');
module.exports = {
  name: "joinchannel",
  cooldown: 15,
  permissions: ["MANAGE_CHANNELS"],
  clientpermissions: ["MANAGE_CHANNELS", "SEND_MESSAGES", "EMBED_LINKS"],
  description: "Change the welcome channel per server!",
  aliases: ["jchannel", "jwelcome"],
  async execute(client, message, cmd, args, Discord) {
    if (!args[0]) {
      const nospec = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor('#c30202')
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription('**`(prefix)joinchannel <#channel/off>`**')
      return message.lineReplyNoMention(nospec)
    }
    if (message.mentions.channels.first()) {
      const data = await welcomeSchema.findOne({
        GuildID: message.guild.id,
      });

      if (data) {
        await welcomeSchema.findOneAndRemove({
          GuildID: message.guild.id,
        });

        const jc1 = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor('#c30202')
          .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
          .setDescription(`**Join Channel Set To ${message.mentions.channels.first()}!**`)
        message.lineReplyNoMention(jc1)

        let newData = new welcomeSchema({
          Welcome: message.mentions.channels.first().id,
          GuildID: message.guild.id,
        });
        newData.save();
      } else if (!data) {
        const jc2 = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor('#c30202')
          .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
          .setDescription(`**Join Channel Set To ${message.mentions.channels.first()}!**`)
        message.lineReplyNoMention(jc2)

        let newData = new welcomeSchema({
          Welcome: message.mentions.channels.first().id,
          GuildID: message.guild.id,
        });
        newData.save();
      }
    } else if (args[0] === "off") {
      const data2 = await welcomeSchema.findOne({
        GuildID: message.guild.id,
      });

      if (data2) {
        await welcomeSchema.findOneAndRemove({
          GuildID: message.guild.id,
        });

        const jcoff1 = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor('#c30202')
          .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
          .setDescription('**Join Channel Has Been `🔴 Disabled`!**')
        return message.lineReplyNoMention(jcoff1)

      } else if (!data2) {
        const nojcset = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor('#c30202')
          .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
          .setDescription('**Join Channel Not Even Setup Bot!**')
        return message.lineReplyNoMention(nojcset)
      }
    }
  }
}