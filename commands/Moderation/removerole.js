module.exports = {
  name: 'removerole',
  cooldown: 5,
  aliases: ['delrole', 'deleterole'],
  permissions: ["MANAGE_ROLES"],
  async execute(client, message, cmd, args, Discord) {
    let target = message.mentions.members.first();

    if (!target) return message.reply({ content: `**I Am Unable To Find That User!**`, allowedMentions: { repliedUser: true } })

    let rrole = message.mentions.roles.first();

    if (!rrole) return message.reply({ content: `**I Am Unable To Find That Role!**`, allowedMentions: { repliedUser: true } })

    const embed = new Discord.MessageEmbed()
      .setColor('#c30202')
      .setDescription(`**${rrole} Was Removed From ${target}**`)
      .setFooter(`👑HACKERPROᵈᵉᵛ#1498`)
      .setTimestamp()

    await message.channel.send({ embeds: [embed] })

    target.roles.remove(rrole)

  }
}
