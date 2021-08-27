const profileModel = require("../../models/profileSchema");
const lineReplyNoMention = require('discord-reply');
module.exports = {
  name: "work",
  aliases: [],
  permissions: ["SEND_MESSAGES"],
  cooldown: 10800,
  execute(client, message, cmd, args, Discord, profileData) {
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

    const RANDOM_NUMBER = Math.floor(Math.random() * (15000 - 100 + 1)) + 100;

    const FILTER = (m) => {
      return chosenJobs.some((answer) => answer.toLowerCase() === m.content.toLowerCase()) && m.author.id === message.author.id;
    };

    const COLLECTOR = message.channel.createMessageCollector({ FILTER, max: 1, time: 15000 });

    COLLECTOR.on("collect", async (m) => {
      const EMBED = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor("#c30202")
        .setTitle(`${message.author.username} Worked As A ${m.content} 💻`)
        .setDescription(`**You Worked And Got Paid ${RANDOM_NUMBER.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Xocoins!** 💸`)
        .setFooter(`Man You Worked Hard As A ${m.content}`);

      await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            coins: RANDOM_NUMBER,
          },
        }
      );

      message.lineReplyNoMention(EMBED);
    });

    COLLECTOR.on("end", (collected) => {
      if (collected.size == 0) {
        return message.lineReplyNoMention({
          content:
            `**What are you doing <@${message.author.id}>?! There was ₿${RANDOM_NUMBER.toString().replace(
              /\B(?=(\d{3})+(?!\d))/g,
              ","
            )} If You Worked As A ${chosenJobs[0]} 😭**`
        });
      }
    });

    message.lineReplyNoMention({
      content:
        `<@${message.author.id
        }>\n**What Job Would You Do?** 💰\nType The Job In This Channel.\n\`${chosenJobs.join("` `")}\``
    });
  },
};