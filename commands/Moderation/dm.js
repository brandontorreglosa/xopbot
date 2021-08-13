const errorChannel = process.env.errorChannel;

const Discord = module.require("discord.js");

module.exports = {
  name: "dm",
  cooldown: 8,
  permissions: ["MANAGE_MESSAGES"],
  description: "Send DM message to a user",
  async execute(client, message, cmd, args, Discord) {
    try {
      let user =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]);
      if (!user)
        return message.channel.send({
          content:
            `**You Did Not Mention A User!**`
        });
      if (message.mentions.users.first().bot) {
        return message.reply({ content: '**You Can Not DM Bot`s As They Will Never Send Back!**', allowedMentions: { repliedUser: true } })
      }
      if (message.author.id === user.id) {
        return message.reply({ content: '**Are You Alright? You Can Not DM Yourself!**', allowedMentions: { repliedUser: true } });
      }
      const dmmessage = args.slice(1).join(" ")
      if (!dmmessage)
        return message.channel.send({ content: "**You Did Not Specify Your Message!**" });

      const embed = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor('#c30202')
        .setDescription(`${dmmessage}`)
        .setFooter(`Sent By ${message.author.username}`)
      user.user
        .send({ embeds: [embed] })
        .catch(() => message.channel.send({ content: "**That User Could Not Be DMED!**" }))
        .then(() => message.channel.send({ content: `**Sent A Message To ${user.user.tag}!**` }));
    } catch (error) {
      const errorlogs = client.channels.cache.get(errorChannel);
      message.channel.send({ content: "**Looks Like An Error Has Occured**" });
      errorlogs.send({ content: "Error on DM command\n Error:\n" + error })
    }
  }
}