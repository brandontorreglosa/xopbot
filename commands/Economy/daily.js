const profileModel = require("../../models/profileSchema");
module.exports = {
  name: "daily",
  permissions: ["SEND_MESSAGES"],
  aliases: [],
  cooldown: 86400,
  permissions: [],
  description: "daily Xocoins",
  async execute(client, message, cmd, args, Discord, profileData) {
    const randomNumber = Math.floor(Math.random() * 20500) + 5000;
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
      .setDescription(`You Received **${randomNumber}** Daily **Xocoins** 💸`)
      .setColor('#c30202')
    // message.channel.send(`**${message.author.username}, You Received ${randomNumber}** Daily **Xocoins** 💸`);

    message.channel.send(embed);
  },
};
