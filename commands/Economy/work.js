const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
  name: "work",
  aliases: [],
  permissions: ["SEND_MESSAGES"],
  clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  cooldown: 10800,
  async execute(client, message, cmd, args, Discord) {
    const JOBS = [
      "Plumber",
      "Coder",
      "Programer",
      "Murderer",
      "Police Man",
      "Football Player",
      "Basketball Player",
      "Discord Developer",
      "Discord Moderator",
      "Discord Member",
      "Discord Bot",
    ];

    let chosenJobs = JOBS.sort(() => Math.random() - Math.random()).slice(0, 3);

    const RANDOM_NUMBER = Math.floor(Math.random() * (10000 - 100 + 1)) + 100;

    const FILTER = (m) => {
      return chosenJobs.some((answer) => answer.toLowerCase() === m.content.toLowerCase()) && m.author.id === message.author.id;
    };

    const COLLECTOR = message.channel.createMessageCollector(FILTER, { max: 1, time: 15000 });

    COLLECTOR.on("collect", async (m) => {
      const EMBED = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor(`${color}`)
        .setAuthor(`${message.author.username} Worked Hard As A ${m.content} 👷‍♂️💦`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**You Worked And Got Paid \`${RANDOM_NUMBER.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Xocoins!** 💸`)
        .setFooter(`Man You Worked Hard As A ${m.content}`);

      client.add(message.author.id, RANDOM_NUMBER)

      message.lineReplyNoMention(EMBED);
    });

    const whatuding = new Discord.MessageEmbed()
      .setTimestamp()
      .setColor(`${color}`)
      .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(`**What Are You Doing?! There Was \`${RANDOM_NUMBER.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Xocoins, If You Worked As A \`${chosenJobs[0]}\`! 😭**`)

    COLLECTOR.on("end", (collected) => {
      if (collected.size == 0) {
        return message.lineReplyNoMention(whatuding)
      }
    });

    const findjb = new Discord.MessageEmbed()
      .setTimestamp()
      .setColor(`${color}`)
      .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(`**What Job Will You Do? 💰 \nType The Job In This Channel. \n\`${chosenJobs.join("` `")}\`**`)

    message.lineReplyNoMention(findjb)
  },
};