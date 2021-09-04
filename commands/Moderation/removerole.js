const lineReplyNoMention = require('discord-reply');
module.exports = {
  name: 'removerole',
  cooldown: 5,
  aliases: ['delrole', 'deleterole'],
  permissions: ["MANAGE_ROLES"],
  clientpermissions: ["MANAGE_ROLES", "SEND_MESSAGES", "EMBED_LINKS"],
  async execute(client, message, cmd, args, Discord) {
    let target = message.mentions.members.first();

    if (!target) return message.lineReplyNoMention({ content: '**`(prefix)removerole <@user> <@role>`**' }) //, allowedMentions: { repliedUser: true } })

    let rrole = message.mentions.roles.first();

    if (!rrole) return message.lineReplyNoMention({ content: `**I Am Unable To Find That Role!**` }) //, allowedMentions: { repliedUser: true } })

    const embed = new Discord.MessageEmbed()
      .setColor('#c30202')
      .setDescription(`**${rrole} Was Removed From ${target}**`)
      .setFooter(`👑HACKERPROᵈᵉᵛ#1498`)
      .setTimestamp()

    await message.lineReplyNoMention(embed)

    target.roles.remove(rrole)

  }
}
