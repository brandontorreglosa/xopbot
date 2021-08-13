const { MessageEmbed } = require('discord.js');
const quick = require('quick.db');

module.exports = {
  name: 'statusping',
  permissions: ["SEND_MESSAGES"],
  aliases: ['stp', 'sping'],
  cooldown: 4,
  description: 'Get bot ping For The Server.',
  async execute(client, message, cmd, args, Discord) {
    const ping = await getDBPingData();
    const messagePing = Date.now();
    const msg = await message.channel.send({ content: 'Loading...' });
    const endMessagePing = Date.now() - messagePing;
    const embed = new MessageEmbed()
      .setTitle('🏓 Pong!')
      .setColor('#c30202')
      .setDescription(
        `
        Database ping data:
        Fetches ping: \`${ping.endGet}ms\`
        Wrights ping: \`${ping.endWright}ms\`
        Average ping: \`${ping.avarage}ms\`
        Message ping: \`${endMessagePing}ms\`
      `
      )
      .setColor('#c30202')
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