const ms = require("ms");
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
  name: "hack",
  permissions: ["SEND_MESSAGES"],
  clientpermissions: ["SEND_MESSAGES"],
  cooldown: 3,
  description: "Another Fun Command",
  async execute(client, message, cmd, args, Discord) {
    if (!args[0]) {
      const nopr = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor(`${color}`)
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**\`(prefix)hack <@user>\`**`)
      return message.lineReplyNoMention(nopr)
    }

    const randomNumber = Math.floor(Math.random() * 500) + 1;
    const randomnumber2 = Math.floor(Math.random() * 11500) + 1;
    const tohack = message.mentions.users.first()

    const n1 = new Discord.MessageEmbed()
      .setTimestamp()
      .setColor(`${color}`)
      .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(`**\`[0.10%]\` You Started Hacking \`${tohack.username}\`.....**`)

    const n2 = new Discord.MessageEmbed()
      .setTimestamp()
      .setColor(`${color}`)
      .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(`**\`[0.99%]\` Finding \`${tohack.username}\`'s Email And Password.....**`)

    const n3 = new Discord.MessageEmbed()
      .setTimestamp()
      .setColor(`${color}`)
      .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(`**\`[10.74%]\` E-Mail: \`${tohack.username}@gmail.com\` \nPassword: \`${randomnumber2}${randomNumber}\`**`)

    const n4 = new Discord.MessageEmbed()
      .setTimestamp()
      .setColor(`${color}`)
      .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(`**\`[15.54%]\` Finding Other Accounts.....**`)

    const n5 = new Discord.MessageEmbed()
      .setTimestamp()
      .setColor(`${color}`)
      .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(`**\`[25.86%]\` Finding Hackable Account.....**`)

    const n6 = new Discord.MessageEmbed()
      .setTimestamp()
      .setColor(`${color}`)
      .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(`**\`[32.45%]\` Hacking Microsoft Account.....**`)

    const n7 = new Discord.MessageEmbed()
      .setTimestamp()
      .setColor(`${color}`)
      .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(`**\`[38.65%]\` Hacked Microsoft Account!**`)

    const n8 = new Discord.MessageEmbed()
      .setTimestamp()
      .setColor(`${color}`)
      .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(`**\`[47.62%]\` Collecting Info And Cookies.....**`)

    const n9 = new Discord.MessageEmbed()
      .setTimestamp()
      .setColor(`${color}`)
      .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(`**\`[58.48%]\` Selling Data To CIA (Central Intelligence Agency)....**`)

    const n10 = new Discord.MessageEmbed()
      .setTimestamp()
      .setColor(`${color}`)
      .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(`**\`[70.09%]\` Finished Hacking \`${tohack.username}\`!**`)

    const n11 = new Discord.MessageEmbed()
      .setTimestamp()
      .setColor(`${color}`)
      .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(`**\`[78.88%]\` Encrypting Your IP!**`)

    const n12 = new Discord.MessageEmbed()
      .setTimestamp()
      .setColor(`${color}`)
      .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(`**\`[89.98%]\` Encrypted Your IP: \`${message.author.discriminator}\`!**`)

    const n13 = new Discord.MessageEmbed()
      .setTimestamp()
      .setColor(`${color}`)
      .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(`**\`[99.98%]\` Deleting Your Hacking Evidence.....**`)

    const n14 = new Discord.MessageEmbed()
      .setTimestamp()
      .setColor(`${color}`)
      .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(`**\`[100%]\` You Are Now Wanted In The States! 😄**`)

    let msg = await message.lineReplyNoMention(n1);

    let time = '1s'
    setTimeout(function () {
      msg.edit(n2);
    }, ms(time));

    let time1 = '6s'
    setTimeout(function () {
      msg.edit(n3);
    }, ms(time1));

    let time2 = '9s'
    setTimeout(function () {
      msg.edit(n4);
    }, ms(time2));

    let time3 = '15s'
    setTimeout(function () {
      msg.edit(n5);
    }, ms(time3));

    let time4 = '21s'
    setTimeout(function () {
      msg.edit(n6);
    }, ms(time4));

    let time5 = '28s'
    setTimeout(function () {
      msg.edit(n7);
    }, ms(time5));

    let time6 = '31s'
    setTimeout(function () {
      msg.edit(n8);
    }, ms(time6));

    let time7 = '38s'
    setTimeout(function () {
      msg.edit(n9);
    }, ms(time7));

    let time8 = '41s'
    setTimeout(function () {
      msg.edit(n10);
    }, ms(time8));

    let time9 = '45s'
    setTimeout(function () {
      msg.edit(n11);
    }, ms(time9));

    let time10 = '49s'
    setTimeout(function () {
      msg.edit(n12);
    }, ms(time10));

    let time11 = '54s'
    setTimeout(function () {
      msg.edit(n13);
    }, ms(time11));

    let time12 = '58s'
    setTimeout(function () {
      msg.edit(n14);
    }, ms(time12));
  }
}