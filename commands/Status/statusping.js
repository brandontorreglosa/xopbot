const { MessageEmbed } = require('discord.js');
const mongodburl = process.env.X_MongodbURL;
const { Database } = require("quickmongo");
const quick = new Database(mongodburl)
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
    const nopr = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**Loading...**`)
    const ping = await getDBPingData();
    const messagePing = Date.now();
    const msg = await message.lineReplyNoMention({ embed: nopr });
    const endMessagePing = Date.now() - messagePing;
    const embed = new MessageEmbed()
      .setAuthor(`🏓 Pong!`, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(`**🌐 Database Ping Data:\n🎣 Fetches Ping: \`${ping.endGet}ms\`\n📝 Wrights Ping: \`${ping.endWright}ms\`\n😕 Average Ping: \`${ping.avarage}ms\`\n💬 Message Ping: \`${endMessagePing}ms\`**`).setColor(`${color}`).setTimestamp();
    msg.edit({
      content: '',
      embed: embed,
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