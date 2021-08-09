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
        return message.channel.send(
          `You did not mention a user, or you gave an invalid id`
        );
      const dmmessage = args.slice(1).join(" ")
      if (!dmmessage)
        return message.channel.send("**You did not specify your message**");

      const embed = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor('#c30202')
        .setDescription(`${dmmessage}`)
        .setFooter(`Sent By ${message.author.username}`)
      user.user
        .send(embed)
        .catch(() => message.channel.send("**That User Could Not Be DMED!**"))
        .then(() => message.channel.send(`**Sent A Message To ${user.user.tag}!**`));
    } catch (error) {
      const errorlogs = client.channels.cache.get(errorChannel);
      message.channel.send("**Looks Like An Error Has Occured**");
      errorlogs.send("Error on DM command\n Error:\n" + error)
    }
  }
}