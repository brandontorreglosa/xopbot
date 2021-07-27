module.exports = {
  name: 'removerole',
  cooldown: 5,
  aliases: ['delrole', 'deleterole'],
  permissions: ["MANAGE_ROLES"],
  async execute(client, message, cmd, args, Discord) {
    let target = message.mentions.members.first();

    if (!target) return message.reply(`**I am unable to find the user**`)

    let rrole = message.mentions.roles.first();

    if (!rrole) return message.reply(`**I am unable to find the role**`)

    // let ticon = target.user.avatarURL({ dynamic: true, size: 2048 });
    // let aicon = message.author.avatarURL({ dynamic: true, size: 2048 });

    const embed = new Discord.MessageEmbed()
      //   .setAuthor(target.user.username, ticon)
      //   .setThumbnail(target.user.displayAvatarURL({ dynamic: true }))
      .setColor('#c30202')
      .setDescription(`**${rrole} Was Removed From ${target}**`)
      .setFooter(`👑HACKERPROᵈᵉᵛ#1498`)
      .setTimestamp()

    await message.channel.send(embed)

    target.roles.remove(rrole)

  }
}
