const lineReplyNoMention = require('discord-reply');
module.exports = {
  name: "search",
  aliases: [],
  permissions: ["SEND_MESSAGES"],
  cooldown: 120,
  category: "economy",
  description: {
    usage: "a-search",
    content: "Choose your search location and have a chance at some bits!",
    examples: ["a-search"],
  },
  execute(client, message, cmd, args, Discord, profileData) {
    const LOCATIONS = [
      "Car",
      "Van",
      "Sock",
      "Milk",
      "Wallet",
      "Box",
      "Pocket",
      "Bus",
      "Gutters",
      "Park",
      "Train",
      "Lounge",
      "Keyboard",
      "Picnic",
      "Bathroom",
      "Bed",
      "Sofa",
      "Backpack",
      "Laptop",
      "Oculus",
      "Shirt",
      "Wardrobe",
      "Hospital",
      "Gaming Arena",
      "Hackerprotms Server",
    ];

    let chosenLocations = LOCATIONS.sort(() => Math.random() - Math.random()).slice(0, 3);

    const RANDOM_NUMBER = Math.floor(Math.random() * (3000 - 100 + 1)) + 100;

    const FILTER = (m) => {
      return chosenLocations.some((answer) => answer.toLowerCase() === m.content.toLowerCase()) && m.author.id === message.author.id;
    };

    const COLLECTOR = message.channel.createMessageCollector(FILTER, { max: 1, time: 15000 });

    COLLECTOR.on("collect", async (m) => {
      const EMBED = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor("#c30202")
        .setTitle(`${message.author.username} Searched ${m.content} 🕵️`)
        .setDescription(`**You Found ${RANDOM_NUMBER.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Xocoins!** 💸`)
        .setFooter(`What A True Detective You Are.`);

        client.add(message.author.id, RANDOM_NUMBER)

      message.lineReplyNoMention(EMBED);
    });

    COLLECTOR.on("end", (collected) => {
      if (collected.size == 0) {
        return message.lineReplyNoMention({
          content:
            `**What are you doing <@${message.author.id}>?! There was ${RANDOM_NUMBER.toString().replace(
              /\B(?=(\d{3})+(?!\d))/g,
              ","
            )} Xocoins, Hidden Inside The ${chosenLocations[0]} 😭**`
        });
      }
    });

    message.lineReplyNoMention({
      content:
        `<@${message.author.id
        }>\n**Which location would you like to search?** 🔍\nType the location in this channel.\n\`${chosenLocations.join("` `")}\``
    });
  },
};