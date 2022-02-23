const { MessageEmbed } = require('discord.js');
const quick = require('quick.db');
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
  name: 'statusping',
  permissions: ["SEND_MESSAGES"],
  clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  aliases: ['stp', 'sping'],
  cooldown: 5,
  description: 'Get bot ping For The Server.',
  async execute(client, message, cmd, args, Discord) {

    const nopr = new Discord.MessageEmbed()
      .setTimestamp()
      .setColor(`${color}`)
      .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(`**Loading...**`)

    const ping = await getDBPingData();
    const messagePing = Date.now();
    const msg = await message.lineReplyNoMention(nopr);
    const endMessagePing = Date.now() - messagePing;
    const embed = new MessageEmbed()
      .setAuthor(`🏓 Pong!`, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(
        `**
        🌐 Database Ping Data:
        🎣 Fetches Ping: \`${ping.endGet}ms\`
        📝 Wrights Ping: \`${ping.endWright}ms\`
        😕 Average Ping: \`${ping.avarage}ms\`
        💬 Message Ping: \`${endMessagePing}ms\`
      **`
      )
      .setColor(`${color}`)
      .setTimestamp();

    msg.edit({
      content: '',
      embed,
    });
  },
};

async function getDBPingData() {

  const startGet = Date.now();
  await quick.get('QR=.');
  const endGet = Date.now() - startGet;


  const startWright = Date.now();
  await quick.set('QR=.', Buffer.from(startWright.toString()).toString('base64'));
  const endWright = Date.now() - startWright;


  const avarage = (endGet + endWright) / 2;
  try {
    quick.delete('QR=.');
  } catch (error) { }
  return { endGet, endWright, avarage };
}