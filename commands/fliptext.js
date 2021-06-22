const Discord = require("discord.js");
const flip = require("flip-text");

module.exports = {
    name: "fliptext",
    permissions: ["SEND_MESSAGES"],
    cooldown: 4,
    description: "Flip some text",
    usage: "fliptext <text>",
    type: "Fun",
    async execute(client, message, cmd, args, Discord)  {
      if (args.length < 1) {
        return message.channel.send("Please enter some text to flip")
      }
  args.reverse();
  var flipped = [];
  
  args.forEach((arg) => {
      flipped.push(flip(arg));
  });
  
  message.channel.send(flipped.join(" "));
}
}