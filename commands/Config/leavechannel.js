const Discord = module.require("discord.js")
const goodbyeSchema = require("../../models/leavechannel");
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
const gcolor = process.env.Gcolor;
const rcolor = process.env.Rcolor;
module.exports = {
  name: "leavechannel",
  cooldown: 15,
  permissions: ["MANAGE_CHANNELS"],
  clientpermissions: ["MANAGE_CHANNELS", "SEND_MESSAGES", "EMBED_LINKS"],
  description: "Change the goodbye channel per server!",
  aliases: ["gchannel", "goodbye"],
  async execute(client, message, cmd, args, Discord) {
    if (!args[0]) {
      const nopr = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor(`${color}`)
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription('**`(prefix)leavechannel <#channel/off>`**')
      return message.lineReplyNoMention(nopr)
    }
    if (message.mentions.channels.first()) {
      const data = await goodbyeSchema.findOne({
        GuildID: message.guild.id,
      });

      if (data) {
        await goodbyeSchema.findOneAndRemove({
          GuildID: message.guild.id,
        });

        const lvc1 = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(`${gcolor}`)
          .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
          .setDescription(`**Leave Channel Set To ${message.mentions.channels.first()}!**`)
        message.lineReplyNoMention(lvc1)

        let newData = new goodbyeSchema({
          Bye: message.mentions.channels.first().id,
          GuildID: message.guild.id,
        });
        newData.save();
      } else if (!data) {
        const lvc2 = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(`${gcolor}`)
          .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
          .setDescription(`**Leave Channel Set To ${message.mentions.channels.first()}!**`)
        message.lineReplyNoMention(lvc2)

        let newData = new goodbyeSchema({
          Bye: message.mentions.channels.first().id,
          GuildID: message.guild.id,
        });
        newData.save();
      }
    } else if (args[0] === "off") {
      const data2 = await goodbyeSchema.findOne({
        GuildID: message.guild.id
      });

      if (data2) {
        await goodbyeSchema.findOneAndRemove({
          GuildID: message.guild.id,
        });
        const lvcoff = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(`${rcolor}`)
          .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
          .setDescription(`**Leave Channel Has Been \`🔴 Disabled\`!**`)
        return message.lineReplyNoMention(lvcoff)

      } else if (!data2) {
        const lvcnoset = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(`${color}`)
          .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
          .setDescription(`**Leave Channel Not Even Setup Bot!**`)
        message.lineReplyNoMention(lvcnoset)
      }
    }
  },
};