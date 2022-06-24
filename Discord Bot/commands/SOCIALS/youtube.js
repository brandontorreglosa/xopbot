const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
  name: 'youtube',
  cooldown: 5,
  permissions: ["SEND_MESSAGES"],
  clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  description: "Sends The Owners Youtube Channel!",
  async execute(client, message, cmd, args, Discord) {
    const embed = new Discord.MessageEmbed().setColor(`${color}`).setTimestamp().setTitle('My Youtube Account').setURL('https://www.youtube.com/c/hackerprotmyoutube').setDescription('`Youtube Link` \n[Click Here](https://www.youtube.com/c/hackerprotmyoutube)')
    message.lineReplyNoMention({ embed: embed });
  }
}