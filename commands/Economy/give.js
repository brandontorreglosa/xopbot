const lineReplyNoMention = require('discord-reply');
module.exports = {
  name: "give",
  cooldown: 10,
  aliases: [],
  permissions: ["SEND_MESSAGES"],
  clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  description: "give a player some Xocoins",
  async execute(client, message, cmd, args, Discord) {
    const maxtodep = 10000000;
    if (!args[0]) {
      const nopr = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor('#c30202')
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**\`(prefix)give <@user> <xocoins>\`**`)
      return message.lineReplyNoMention(nopr)
    }

    const giveuser1 = args[0];
    const user = message.mentions.users.first();
    if (!user) {
      const nouserhere = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor('#c30202')
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**\`${giveuser1}\` Does Not Exist In This Server!**`)
      return message.lineReplyNoMention(nouserhere)
    }

    const amount = args[1];
    if (!args[1]) {
      const noxocspec = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor('#c30202')
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**Please Specify The Xocoins To Give!**`)
      return message.lineReplyNoMention(noxocspec)
    }

    if ((await client.bal(message.author.id)) < amount) {
      const noxocamount = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor('#c30202')
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**You Dont Have \`${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Xocoins To Bet!**`)
      return message.lineReplyNoMention(noxocamount)
    }

    if ((await client.bal(user.id)) = maxtodep) {
      const maxbanmyd = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor('#c30202')
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**The User\`s Wallet Cant Hold More Than \`${maxtodep.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Xocoins!**`)
      message.lineReplyNoMention(maxbanmyd)
    }

    if (isNaN(args[1])) {
      const xocnonum = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor('#c30202')
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**\`${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Is Not A Number!**`)
      return message.lineReplyNoMention(xocnonum)
    }

    try {
      await client.rmv(message.author.id, amount)
      await client.add(user.id, amount)
      const embed = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor('#c30202')
        .setTitle(`${message.author.username}`)
        .setDescription(`**This User Has Been Given \`${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Of Xocoins!** 💸`)
      return message.lineReplyNoMention(embed);
    } catch (err) {
      console.log(err);
    }
  },
};