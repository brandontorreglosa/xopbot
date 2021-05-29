module.exports = {
    name: "balance",
    permissions: ["SEND_MESSAGES"],
    aliases: ["bal", "bl"],
    cooldown: 2,
    permissions: [],
    description: "Check the user balance",
    execute(client, message, cmd, args, Discord, profileData) {
      const user = message.mentions.members.first() || message.guild.members.cache.find(member => member.user.username.toLowerCase() === args.join(" ").toLowerCase()) || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(member => member.displayName.toLowerCase() === args.join(" ").toLowerCase()) || message.member

      // let coins = profileData.coins(`${user.id}`) // You Can Keep `money_${message.guild.id}_${user.id}` If You Want Different Amount In, Eg:- If I Am In 2 Servers And You Keep `money_${user.id}` I Will Have Same Money In Both Servers But If you Keep `money_${message.guild.id}_${user.id}` Then I Will Have Different Amount In Both Servers
      // if(coins === null) coins = '0'

      // let bank = profileData.bank(`${user.id}`) // You Can Keep `bank_${message.guild.id}_${user.id}` If You Want Different Amount In, Eg:- If I Am In 2 Servers And You Keep `bank_${user.id}` I Will Have Same Money In Both Servers But If you Keep `bank_${message.guild.id}_${user.id}` Then I Will Have Different Amount In Both Servers
      // if(bank === null) bank = '0'

      const newEmbed = new Discord.MessageEmbed()
      .setTimestamp()
      .setAuthor(`${user.user.username} Balance`, user.user.displayAvatarURL({ dynamic: true }))
      .setColor('#c30202')
      .setDescription(`
      **💸 Wallet- ${profileData.coins} Xocoins** 
      **🏦 Bank- ${profileData.bank} Xocoins**
      `)
      message.channel.send(newEmbed)
    },
  };