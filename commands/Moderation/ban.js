const lineReplyNoMention = require('discord-reply');
const errorChannel = process.env.errorChannel;
const color = process.env.Color;
module.exports = {
  name: 'ban',
  clientpermissions: ["BAN_MEMBERS", "SEND_MESSAGES", "EMBED_LINKS"],
  permissions: ["BAN_MEMBERS"],
  cooldown: 5,
  description: "This Command Bans Member",
  async execute(client, message, cmd, args, Discord) {
    try {
      const user = message.mentions.users.first()
      const catcherban = args[0];
      if (!args[0]) {
        const nopr = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`(prefix)ban <@user> <reason>\`**`)
        return message.lineReplyNoMention({ embed: nopr })
      }
      const reason = args.slice(1).join(" ");
      if (!reason) {
        const norr = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**Please Give A Reason To Ban That User!**`)
        return message.lineReplyNoMention({ embed: norr })
      }
      if (message.author.id === user.id) {
        const cantbanyourself = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**Are You Alright? You Can Not Ban Yourself!**`)
        return message.lineReplyNoMention({ embed: cantbanyourself })
      }
      if (user.id === client.user.id) {
        const nobanbot = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**You Can't Just Ban Me Through Me, Thats Way Too Evil!**`)
        return message.lineReplyNoMention({ embed: nobanbot })
      }
      if (user.id === message.guild.owner.id) {
        const nobanowner = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**You Jerk, How Can You Ban Server Owner! 👿**`)
        return message.lineReplyNoMention({ embed: nobanowner })
      }
      if (!user) {
        const idkr12 = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**I Searched Everywhere And Could Not Find \`${catcherban}\`!**`)
        return message.lineReplyNoMention({ embed: idkr12 })
      }
      const rapdab = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`${catcherban}\` Is Currently Not Bannable!**`)
      if (user) {
        const userTarger = message.guild.members.cache.get(user.id);
        const unsucer = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**Could Not Send To \`${user.username}\` Reason Of Ban!**`)
        const funsucer = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**Could Not Ban \`${user.username}\`!**`)
        const successful = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**Banned Successfully \`${user.username}\` For \`${reason}\`!**`)
        const embed = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setTitle(`You Are Banned From ${message.guild.name} 😢`).setDescription(`**Banned By: ${message.author.username} \nReason: \`${reason}\`**`)
        userTarger.send({ embed: embed }).catch(() => message.lineReplyNoMention({ embed: unsucer }))
        message.guild.member(userTarger).ban({ reason: `**Banned By ${message.author.username} \nReason: \`${reason}\`**` }).catch(() => message.lineReplyNoMention({ embed: funsucer }))
          .then(() => message.lineReplyNoMention({ embed: successful }))
      } else {
        message.lineReplyNoMention({ embed: idkr12 });
      }
    } catch (err) {
      const errorlogs = client.channels.cache.get(errorChannel);
      message.lineReplyNoMention({ content: "**Looks Like An Error Has Occured!**" });
      errorlogs.send({ content: `**Error On Ban Command!\n\nError:\n\n ${err}**` })
    }
  }
}
