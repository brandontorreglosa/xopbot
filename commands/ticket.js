module.exports = {
  name: "ticket",
  cooldown: 10,
  aliases: [],
  permissions: ["SEND_MESSAGES"],
  description: "open a ticket!",
  async execute(client, message, cmd, args, Discord) {
    const channel = await message.guild.channels.create(`ticket: ${message.author.tag}`);

    channel.setParent("835210724284039199");

    channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGE: false,
      VIEW_CHANNEL: false,
    });
    channel.updateOverwrite(message.author, {
      SEND_MESSAGE: true,
      VIEW_CHANNEL: true,
    });

    const reactionMessage = await channel.send("**Thank You For Contacting Support!**");

    try {
      await reactionMessage.react("🔒");
      await reactionMessage.react("⛔");
    } catch (err) {
      channel.send("**Error Sending Emojis!**");
      throw err;
    }

    const collector = reactionMessage.createReactionCollector(
      (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).hasPermission("SEND_MESSAGES"),
      { dispose: true }
    );

    collector.on("collect", (reaction, user) => {
      switch (reaction.emoji.name) {
        case "🔒":
          channel.updateOverwrite(message.author, { SEND_MESSAGES: false });
          break;
        case "⛔":
          channel.send("**Deleting This Channel In 5 Seconds!**");
          setTimeout(() => channel.delete(), 5000);
          break;
      }
    });

    message.channel
      .send(`We Will Be Right With You! ${channel}`)
      .then((msg) => {
        setTimeout(() => msg.delete(), 7000);
        setTimeout(() => message.delete(), 3000);
      })
      .catch((err) => {
        throw err;
      });
  },
};
