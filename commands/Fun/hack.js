const ms = require("ms");

module.exports = {
  name: "hack",
  permissions: ["SEND_MESSAGES"],
  cooldown: 3,
  description: "Another Fun Command",
  async execute(client, message, cmd, args, Discord) {
    if (!args[0]) {
      return message.channel.send("**Woah.... Slow Down!! Who Are We Hacking Here Mate..??**")
    }
    const randomNumber = Math.floor(Math.random() * 500) + 1;
    const randomnumber2 = Math.floor(Math.random() * 11500) + 1;
    const tohack = message.mentions.members.first()
    let msg = await message.channel.send(`**${message.author.username} Is Hacking ${tohack.displayName}....**`);

    let time = '1s'
    setTimeout(function () {
      msg.edit(`**Finding ${tohack.displayName}'s Email And Password.....**`);
    }, ms(time));

    let time1 = '6s'
    setTimeout(function () {
      msg.edit(`**E-Mail: ${tohack.displayName}@gmail.com \nPassword: ${randomnumber2}${randomNumber}**`);
    }, ms(time1));

    let time2 = '9s'
    setTimeout(function () {
      msg.edit("**Finding Other Accounts.....**");
    }, ms(time2));

    let time3 = '15s'
    setTimeout(function () {
      msg.edit("**Finding Hackable Account.....**");
    }, ms(time3));

    let time4 = '21s'
    setTimeout(function () {
      msg.edit("**Hacking Microsoft Account......**");
    }, ms(time4));

    let time5 = '28s'
    setTimeout(function () {
      msg.edit("**Hacked Microsoft Account!!**");
    }, ms(time5));

    let time6 = '31s'
    setTimeout(function () {
      msg.edit("**Collecting Info And Cookies.....**");
    }, ms(time6));

    let time7 = '38s'
    setTimeout(function () {
      msg.edit("**Selling Data To CIA (Central Intelligence Agency)....**");
    }, ms(time7));

    let time8 = '41s'
    setTimeout(function () {
      msg.edit(`**Finished Hacking ${tohack.displayName}**`);
    }, ms(time8));

    let time9 = '45s'
    setTimeout(function () {
      msg.edit(`**Encrypting Your IP!**`);
    }, ms(time9));

    let time10 = '49s'
    setTimeout(function () {
      msg.edit(`**Encrypted Your IP: ${message.author.discriminator}**`);
    }, ms(time10));

    let time10 = '53s'
    setTimeout(function () {
      msg.edit(`**${message.author.username} You Are Now Wanted In The States! 😄**`);
    }, ms(time11));
  }
}