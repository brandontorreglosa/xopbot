const lineReplyNoMention = require('discord-reply');
const errorChannel = process.env.errorChannel;
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
        const nopr = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor('#c30202')
          .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
          .setDescription(`**\`(prefix)ban <@user> <reason>\`**`)
        return message.lineReplyNoMention(nopr)
      }
      const reason = args.slice(1).join(" ")
      if (!reason) {
        const norr = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor('#c30202')
          .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
          .setDescription(`**Please Give A Reason To Ban That User!**`)
        return message.lineReplyNoMention(norr)
      }

      if (message.author.id === user.id) {
        const cantbanyourself = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor('#c30202')
          .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
          .setDescription(`**Are You Alright? You Can Not Ban Yourself!**`)
        return message.lineReplyNoMention(cantbanyourself)
      }
      if (user.id === client.user.id) {
        const nobanbot = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor('#c30202')
          .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
          .setDescription(`**You Can't Just Ban Me Through Me, Thats Way Too Evil!**`)
        return message.lineReplyNoMention(nobanbot)
      }
      if (user.id === message.guild.owner.id) {
        const nobanowner = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor('#c30202')
          .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
          .setDescription(`**You Jerk, How Can You Ban Server Owner! 👿**`)
        return message.lineReplyNoMention(nobanowner)
      }

      const idkr12 = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor('#c30202')
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**I Searched Everywhere And Could Not Find \`${catcherban}\`!**`)
        
      if (user) {
        const userTarger = message.guild.members.cache.get(user.id);
        const unsucer = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor('#c30202')
          .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
          .setDescription(`**Could Not Send To \`${userTarger.user.id}\` Reason Of Ban!**`)

        const funsucer = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor('#c30202')
          .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
          .setDescription(`**Could Not Ban \`${userTarger.user.id}\`!**`)

        const successful = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor('#c30202')
          .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
          .setDescription(`**Banned Successfully \`${userTarger.user.id}\` For \`${reason}\`!**`)

        const embed = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor('#c30202')
          .setTitle(`You Are Banned From ${message.guild.name} 😢`)
          .setDescription(`**Banned By: ${message.author.username} \nReason: \`${reason}\`**`)
        userTarger.send(embed).catch(() => message.lineReplyNoMention(unsucer))
        message.guild.member(userTarger).ban({ reason: `**Banned By ${message.author.username} \nReason: \`${reason}\`**` }).catch(() => message.lineReplyNoMention(funsucer))
          .then(() => message.lineReplyNoMention(successful))
      } else {
        message.lineReplyNoMention(idkr12);
      }
    } catch (err) {
      const errorlogs = client.channels.cache.get(errorChannel);
      message.lineReplyNoMention({ content: "**Looks Like An Error Has Occured!**" });
      errorlogs.send({ content: `**Error On Ban Command!\n\nError:\n\n ${err}**` })
    }
  }
}
