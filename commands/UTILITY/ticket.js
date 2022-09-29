const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
const { MessageButton, MessageActionRow } = require("discord-buttons");
module.exports = {
  name: "ticket",
  cooldown: 10,
  aliases: ['ticket-set'],
  permissions: ["SEND_MESSAGES"],
  clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS", "MANAGE_CHANNELS"],
  description: "open a ticket!",
  async execute(client, message, cmd, args, Discord) {
    if (cmd === 'ticket-set') {
      message.guild.channels.create("Tickets", {
        type: "category",
        topic: "All the tickets will be here :D",
      })
      const succestxtc = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription('**The \`Ticket`s\` Category Is Now Setup! 😉**')
      message.lineReplyNoMention({ embed: succestxtc })
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
      channel.updateOverwrite(message.guild.id, { SEND_MESSAGE: false, VIEW_CHANNEL: false, });
      channel.updateOverwrite(message.author, { SEND_MESSAGE: true, VIEW_CHANNEL: true, });
      const user = message.author;
      const id1 = "yes"+`${Math.floor(Math.random() * 5000)}`;
      const id2 = "yes1"+`${Math.floor(Math.random() * 5000)}`;
      const id3 = "no"+`${Math.floor(Math.random() * 5000)}`;
      const id4 = "no1"+`${Math.floor(Math.random() * 5000)}`;
      const button11 = new MessageButton().setStyle('green').setID(id1).setLabel('Lock').setEmoji('🔒')
      const button1 = new MessageButton().setStyle('red').setID(id3).setLabel('Close').setEmoji('⛔')
      const fakbutton = new MessageButton().setStyle('green').setLabel('Lock').setID(id2).setEmoji('🔒').setDisabled(true)
      const fakbutton1 = new MessageButton().setStyle('red').setID('no1').setLabel(id4).setEmoji('⛔').setDisabled(true)
      const row = new MessageActionRow().addComponents(button11, button1);
      const row2 = new MessageActionRow().addComponents(fakbutton, fakbutton1);
      const supportembedy = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription('**Hello There, You Contacted Support. Please Wait! \nAccidentely Opened This? React With \`⛔\` To Close It!**')
      const sentMessage = await channel.send({ embed: supportembedy, components: [row] });
      const deltxtc = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription('**Incoming Air Strike ✈️💣! Channel Delteting In 5 Seconds!**').setFooter(`Say Goodbye To ${channel.name}!`)
      const locktxtc = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**The Channel Has Now Been Locked 🔒! The Staff Will Reply Soon!**`).setFooter('Successfully Locked The Channel!')
      client.on("clickButton", async (button) => {
        if (button.id === id1) {
          if (button.clicker.user.id !== message.author.id) {
            await button.reply.defer();
            await button.message.lineReply({ content: `**This Is ${user.username}\'s Embed!**`, ephemeral: true });
          } else if (button.clicker.id === message.author.id) {
            channel.send({ embed: locktxtc })
            await button.reply.defer();
            await sentMessage.edit({ embed: supportembedy, components: [row2] });
          };
        } else if (button.id === id3) {
          if (button.clicker.user.id !== message.author.id) {
            await button.reply.defer();
            await button.message.lineReply({ content: `**This Is ${user.username}\'s Embed!**`, ephemeral: true });
          } else if (button.clicker.id === message.author.id) {
            await button.reply.defer();
            await channel.send({ embed: deltxtc }).then(() => {
              setTimeout(() => channel.delete(), 5000)
            })
          };
        }
      });
      const embed101 = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**Hey, The Server Moderator(s) Will Be Right Wth You! \nMake Sure To Check The TXTC ${channel} For Responses!**`).setFooter(`Opened By ${message.author.username}`)
      message.lineReplyNoMention({ embed: embed101 })
        .catch((err) => {
          throw err;
        });
    }
  },
};