client.on("guildCreate", async (guild) => {
    const newEmbed = new Discord.MessageEmbed()
    const channel = guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
     .setColor('#2f3136')
     .setTitle("Hi! I'm XOPBOT A Multipurpose Bot!")
     .setDescription('Thanks for inviting me! Do -help to find all my commands!\nBot Name: XOPBOT\n Prefix: - \n[Bot Website](https://bubble-traveling-entrance.glitch.me/)')
     .setFooter('Sometimes I Get Very Mad Dont Worry I Wont Hurt Anyone(Yet)!')
    channel.send(newEmbed);
  });