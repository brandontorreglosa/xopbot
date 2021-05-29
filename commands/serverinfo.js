

module.exports = {
    name: 'serverinfo',
    aliases: ['si'],
    cooldown: 20,
    permissions: ["SEND_MESSAGES"],
 execute(client, message, cmd, args, Discord) {
    const { guild } = message

    const { name, region, memberCount, owner, afkTimeout, prefix} = guild
    const icon = guild.iconURL()

    const embed = new Discord.MessageEmbed()
      .setTitle(`Server info for "${name}"`)
      .setThumbnail(icon)
      .addFields(
        {
          name: 'Server Creation Date',
          value: guild.createdAt,
        },
        {
        name: 'Server Name',
        value: name,
        },
        {
        name: 'Prefix',
        value: process.env.PREFIX,
        },
        {
          name: 'Region',
          value: region,
        },
        {
          name: 'Members',
          value: memberCount,
        },
        {
          name: 'Channels',
          value: guild.channels.cache.size,
        },
        {
          name: 'Owner',
          value: owner.user.tag,
        },
        {
          name: 'AFK Timeout',
          value: afkTimeout / 60,
        }
      )
      .setFooter(`Requested By: ${message.author.tag} \nServer Information Coded By  @👑HACKERPROᵈᵉᵛ#1498`, message.author.displayAvatarURL() .setTimestamp())

    message.channel.send(embed)
  }
}