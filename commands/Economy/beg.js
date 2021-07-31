const profileModel = require("../../models/profileSchema");
module.exports = {
  name: "beg",
  permissions: ["SEND_MESSAGES"],
  aliases: [],
  cooldown: 3,
  permissions: [],
  description: "beg for coins",
  async execute(client, message, cmd, args, Discord, profileData) {
    const randomNumber = Math.floor(Math.random() * 500) + 1;
    const response = await profileModel.findOneAndUpdate(
      {
        userID: message.author.id,
      },
      {
        $inc: {
          coins: randomNumber,
        },
      }
    );
    const embed = new Discord.MessageEmbed()
      .setTimestamp()
      .setTitle(`${message.author.username}`)
      .setDescription(`You Begged And Got From XOPBOT **${randomNumber} Xocoins** 💸`)
      .setColor('#c30202')

    message.channel.send(embed);
    //return message.channel.send(`**${message.author.username}, You Begged And Received ${randomNumber}** **Xocoins** 💸`);
  },
};
