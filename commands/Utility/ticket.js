const lineReplyNoMention = require('discord-reply');
module.exports = {
  name: "ticket",
  cooldown: 10,
  aliases: ['ticket-set'],
  permissions: ["SEND_MESSAGES"],
  description: "open a ticket!",
  async execute(client, message, cmd, args, Discord) {

    if (cmd === 'ticket-set') {
      message.guild.channels.create("Tickets", {
        type: "category",
        topic: "All the mail will be here :D",
      })
      message.lineReplyNoMention({ content: '**Ticket`s Category Is Now Setup! 😃**' })
    }

    else if (cmd === 'ticket') {
      const category = message.guild.channels.cache.find((x) => x.name == "Tickets")

      if (!category) {
        return message.lineReplyNoMention({ content: "**XOPBOT Ticket System Not Setup! Do `(prefix)ticket-set`**" })
      }

      const channel = await message.guild.channels.create(`ticket: ${message.author.tag}`, {
        type: 'text',
        parent: category.id,
        topic: `Ticket Made For ${message.author.username}`
      });

      channel.updateOverwrite(message.guild.id, {
        SEND_MESSAGE: false,
        VIEW_CHANNEL: false,
      });
      channel.updateOverwrite(message.author, {
        SEND_MESSAGE: true,
        VIEW_CHANNEL: true,
      });

      const reactionMessage = await channel.send({ content: "**Thank You For Contacting Support!**" });

      try {
        await reactionMessage.react("🔒");
        await reactionMessage.react("⛔");
      } catch (err) {
        channel.send({ content: "**Error Sending Emojis!**" });
        throw err;
      }

      const collector = reactionMessage.createReactionCollector(
        (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).permissions.has("SEND_MESSAGES"),
        { dispose: true }
      );

      collector.on("collect", (reaction, user) => {
        switch (reaction.emoji.name) {
          case "🔒":
            channel.updateOverwrite(message.author, { SEND_MESSAGES: false });
            break;
          case "⛔":
            channel.send({ content: "**Deleting This Channel In 5 Seconds!**" });
            setTimeout(() => channel.delete(), 5000);
            break;
        }
      });

      const embed101 = new Discord.MessageEmbed()
        .setTimestamp()
        .setTitle(`${message.author.username}`)
        .setDescription(`We Will Be Right With You! ${channel}`)

      message
        .lineReplyNoMention(embed101)
        .then(() => {
          setTimeout(() => message.delete(), 7000);
          // setTimeout(() => message.delete(), 3000);
        })
        .catch((err) => {
          throw err;
        });
    }
  },
};
