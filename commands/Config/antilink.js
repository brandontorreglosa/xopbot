const Discord = require("discord.js")
const antilinkSchema = require("../../models/antilink");
const lineReplyNoMention = require('discord-reply');
module.exports = {
  name: "antilink",
  cooldown: 15,
  permissions: ["ADMINISTRATOR"],
  clientpermissions: ["ADMINISTRATOR"],
  description: "Setup antilink per server!",
  async execute(client, message, cmd, args, Discord) {
    if (!args[0]) {
      const nospec = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor('#c30202')
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription('**`(prefix)antilink <on/off>`**')
      return message.lineReplyNoMention(nospec)
    }
    if (args[0] === "On" || args[0] === "on") {
      const data = await antilinkSchema.findOne({
        GuildID: message.guild.id,
      });

      if (data) {
        await antilinkSchema.findOneAndRemove({
          GuildID: message.guild.id,
        });

        const on1 = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor('#c30202')
          .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
          .setDescription('**Antilink Is Now `🟢 Enabled`!**')
        message.lineReplyNoMention(on1);

        let newData = new antilinkSchema({
          GuildID: message.guild.id,
        });
        newData.save();
      } else if (!data) {
        const on2 = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor('#c30202')
          .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
          .setDescription('**Antilink Is Now `🟢 Enabled`!**')
        message.lineReplyNoMention(on2);

        let newData = new antilinkSchema({
          GuildID: message.guild.id,
        });
        newData.save();
      }
    } else if (args[0] === "Off" || args[0] === "off") {
      const data2 = await antilinkSchema.findOne({
        GuildID: message.guild.id,
      });

      if (data2) {
        await antilinkSchema.findOneAndRemove({
          GuildID: message.guild.id,
        });
        const off1 = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor('#c30202')
          .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
          .setDescription('**Antilink Is Now `🔴 Disabled`!**')
        return message.lineReplyNoMention(off1);

      } else if (!data2) {
        const noset = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor('#c30202')
          .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
          .setDescription('**Antilink Not Even Setup Bot!**')
        return message.lineReplyNoMention(noset);
      }
    }
  }
}