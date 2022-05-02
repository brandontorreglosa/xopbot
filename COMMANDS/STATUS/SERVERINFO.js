const errorChannel = process.env.errorChannel;
const moment = require("moment");
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
  name: 'serverinfo',
  aliases: ['si'],
  cooldown: 15,
  permissions: ["SEND_MESSAGES"],
  clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  async execute(client, message, cmd, args, Discord) {
    try {
      const mention = message.mentions.users.first() || message.author;
      const afk = message.guild.afkChannel === null ? "\`None\`" : message.guild.afkChannel;
      let servericon = message.guild.iconURL;
      let verifLevels = {
        "NONE": "None",
        "LOW": "Low",
        "MEDIUM": "Medium",
        "HIGH": "(╯°□°）╯︵  ┻━┻ (High)",
        "VERY_HIGH": "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻ (Very High)"
      };
      const { guild } = message
      const { region } = guild
      const serverembed = new Discord.MessageEmbed().setAuthor(`${message.guild.name}`, message.guild.iconURL()).setThumbnail(servericon).addField(`General Info`, `**👷‍♂️ Owner: ${message.guild.owner} \n🌎 Region: \`${region}\` \n✅ Verification Level: \`${verifLevels[message.guild.verificationLevel]}\`**`).addField(`Overview`, `**📺 Total Channels: \`${message.guild.channels.cache.size}\` \n✍️ Text Channels: \`${message.guild.channels.cache.filter((c) => c.type === "text").size}\` \n🗣️ Voice Channels: \`${message.guild.channels.cache.filter((c) => c.type === "voice").size}\` \n😴 AFK Channel: ${afk} \n⏲️ AFK Timeout: \`${message.guild.afkTimeout} Sec\` \n🎭 Total Roles: \`${message.guild.roles.cache.size}\` \n🤔 Total Emojis: \`${message.guild.emojis.cache.size}\`**`).addField(`Member Info`, `**👥 Total Members: \`${message.guild.memberCount}\` \n👦 Humans: \`${message.guild.members.cache.filter(member => !member.user.bot).size}\` \n🤖 Bots: \`${message.guild.members.cache.filter(member => member.user.bot).size}\`**`).addField(`Misc. Info`, `**⌚ Created On: \n\`${moment(message.guild.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss A")}\`**`).setThumbnail(message.guild.iconURL()).setFooter(`ID: ${message.guild.id}`, message.guild.iconURL()).setColor(`${color}`).setTimestamp();
      message.lineReplyNoMention({ embed: serverembed });
    } catch (err) {
      const errorlogs = client.channels.cache.get(errorChannel)
      errorlogs.send({ content: `Error On Server Info Command!\n\nError:\n\n **${err}**` })
    }
  }
};