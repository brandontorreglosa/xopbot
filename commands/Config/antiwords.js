const Discord = require("discord.js")
const antiwordsSchema = require("../../models/antiwords");
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
const gcolor = process.env.Gcolor;
const rcolor = process.env.Rcolor;
module.exports = {
  name: "antiwords",
  cooldown: 15,
  permissions: ["ADMINISTRATOR"],
  clientpermissions: ["ADMINISTRATOR"],
  description: "Setup antilink per server!",
  async execute(client, message, cmd, args, Discord) {
    if (!args[0]) {
      const nospec = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor(`${color}`)
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription('**`(prefix)antiwords <on/off>`**')
      return message.lineReplyNoMention(nospec)
    }
    if (args[0] === "On" || args[0] === "on") {
      const data = await antiwordsSchema.findOne({
        GuildID: message.guild.id,
      });

      if (data) {
        await antiwordsSchema.findOneAndRemove({
          GuildID: message.guild.id,
        });

        const on1 = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(`${gcolor}`)
          .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
          .setDescription('**Antiwords Is Now `🟢 Enabled`!**')
        message.lineReplyNoMention(on1);

        let newData = new antiwordsSchema({
          GuildID: message.guild.id,
        });
        newData.save();
      } else if (!data) {
        const on2 = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(`${gcolor}`)
          .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
          .setDescription('**Antiwords Is Now `🟢 Enabled`!**')
        message.lineReplyNoMention(on2);

        let newData = new antiwordsSchema({
          GuildID: message.guild.id,
        });
        newData.save();
      }
    } else if (args[0] === "Off" || args[0] === "off") {
      const data2 = await antiwordsSchema.findOne({
        GuildID: message.guild.id,
      });

      if (data2) {
        await antiwordsSchema.findOneAndRemove({
          GuildID: message.guild.id,
        });

        const off1 = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(`${rcolor}`)
          .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
          .setDescription('**Antiwords Is Now `🔴 Disabled`!**')
        return message.lineReplyNoMention(off1);

      } else if (!data2) {
        const noset = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(`${color}`)
          .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
          .setDescription('**Antiwords Not Even Setup Bot!**')
        return message.lineReplyNoMention(noset);
      }
    }
  }
}