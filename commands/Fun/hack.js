const ms = require("ms");
const lineReplyNoMention = require('discord-reply');
module.exports = {
  name: "hack",
  permissions: ["SEND_MESSAGES"],
  cooldown: 3,
  description: "Another Fun Command",
  async execute(client, message, cmd, args, Discord) {
    if (!args[0]) {
      return message.lineReplyNoMention({ content: "**`(prefix)hack <@user>`**" })
    }
    const randomNumber = Math.floor(Math.random() * 500) + 1;
    const randomnumber2 = Math.floor(Math.random() * 11500) + 1;
    const tohack = message.mentions.members.first()
    let msg = await message.lineReplyNoMention({ content: `**[0.10%] ${message.author.username} Is Hacking ${tohack.displayName}....**` });

    let time = '1s'
    setTimeout(function () {
      msg.edit({ content: `**[0.99%] Finding ${tohack.displayName}'s Email And Password.....**` });
    }, ms(time));

    let time1 = '6s'
    setTimeout(function () {
      msg.edit({ content: `**[10.74%] E-Mail: ${tohack.displayName}@gmail.com \nPassword: ${randomnumber2}${randomNumber}**` });
    }, ms(time1));

    let time2 = '9s'
    setTimeout(function () {
      msg.edit({ content: "**[15.54%] Finding Other Accounts.....**" });
    }, ms(time2));

    let time3 = '15s'
    setTimeout(function () {
      msg.edit({ content: "**[25.86%] Finding Hackable Account.....**" });
    }, ms(time3));

    let time4 = '21s'
    setTimeout(function () {
      msg.edit({ content: "**[32.45%] Hacking Microsoft Account.....**" });
    }, ms(time4));

    let time5 = '28s'
    setTimeout(function () {
      msg.edit({ content: "**[38.65%] Hacked Microsoft Account**" });
    }, ms(time5));

    let time6 = '31s'
    setTimeout(function () {
      msg.edit({ content: "**[47.62%] Collecting Info And Cookies.....**" });
    }, ms(time6));

    let time7 = '38s'
    setTimeout(function () {
      msg.edit({ content: "**[58.48%] Selling Data To CIA (Central Intelligence Agency)....**" });
    }, ms(time7));

    let time8 = '41s'
    setTimeout(function () {
      msg.edit({ content: `**[70.09%] Finished Hacking ${tohack.displayName}**` });
    }, ms(time8));

    let time9 = '45s'
    setTimeout(function () {
      msg.edit({ content: `**[78.88%] Encrypting Your IP**` });
    }, ms(time9));

    let time10 = '49s'
    setTimeout(function () {
      msg.edit({ content: `**[89.98%] Encrypted Your IP: ${message.author.discriminator}**` });
    }, ms(time10));

    let time11 = '54s'
    setTimeout(function () {
      msg.edit({ content: `**[99.98%] Deleting Your Hacking Evidence.....**` });
    }, ms(time11));

    let time12 = '58s'
    setTimeout(function () {
      msg.edit({ content: `**[100%] ${message.author.username} You Are Now Wanted In The States! 😄**` });
    }, ms(time12));
  }
}