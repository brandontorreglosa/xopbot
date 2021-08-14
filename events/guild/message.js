const fetch = require("node-fetch").default;
const profileModel = require("../../models/profileSchema");
const premiumSchema = require("../../models/premium");
const nsfwSchema = require("../../models/registernsfw")
const quick = require('quick.db');
const Levels = require('discord-xp');
const fs = require('fs');
const ms = require('ms');
require('dotenv').config();
const cooldown = require('../../models/cooldown');

module.exports = async (Discord, client, message) => {
  if (message.author.bot || message.channel.type === 'dm') return;

  // <----/Leveling System/---->

  const randomXP = Math.floor(Math.random() * 49) + 1;
  const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomXP);
  if (hasLeveledUp) {
    const user = await Levels.fetch(message.author.id, message.guild.id);
    const someonelevelup = new Discord.MessageEmbed()
      .setTimestamp()
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
      .setColor('#c30202')
      .setTitle(`**👤 ${message.author.username}**`)
      .setDescription(`🥳 _**You Have Advanced To Level ${user.level} You Are Getting Wise! \nKeep Chatting To Get Cool Roles To Show Off In The Guild 👍**_`)
      .setFooter('Thank You For Being Active 🙏')
    message.channel.send({ embeds: [someonelevelup] })

    if (user.level == 1) {
      let role = message.guild.roles.cache.find(role => role.name == "Level 1");
      if (!role) await message.guild.roles.create({
        name: "Level 1",
        color: "GREEN"
      }).catch(err => console.log(err));
      role = message.guild.roles.cache.find(role => role.name == "Level 1");
      if (message.member.roles.cache.has(role.id)) return;
      else await message.member.roles.add(role.id);
    }

    if (user.level == 10) {
      let role = message.guild.roles.cache.find(role => role.name == "Level 10");
      if (!role) await message.guild.roles.create({
        name: "Level 10",
        color: "#3fbfbf"
      }).catch(err => console.log(err));
      role = message.guild.roles.cache.find(role => role.name == "Level 10");
      if (message.member.roles.cache.has(role.id)) return;
      else await message.member.roles.add(role.id);
    }

    if (user.level == 20) {
      let role = message.guild.roles.cache.find(role => role.name == "Level 20");
      if (!role) await message.guild.roles.create({
        name: "Level 20",
        color: "#ff5722"
      }).catch(err => console.log(err));
      role = message.guild.roles.cache.find(role => role.name == "Level 20");
      if (message.member.roles.cache.has(role.id)) return;
      else await message.member.roles.add(role.id);
    }

    if (user.level == 30) {
      let role = message.guild.roles.cache.find(role => role.name == "Level 30");
      if (!role) await message.guild.roles.create({
        name: "Level 30",
        color: "#969102"
      }).catch(err => console.log(err));
      role = message.guild.roles.cache.find(role => role.name == "Level 30");
      if (message.member.roles.cache.has(role.id)) return;
      else await message.member.roles.add(role.id);
    }

    if (user.level == 40) {
      let role = message.guild.roles.cache.find(role => role.name == "Level 40");
      if (!role) await message.guild.roles.create({
        name: "Level 40",
        color: "#0c0c0c"
      }).catch(err => console.log(err));
      role = message.guild.roles.cache.find(role => role.name == "Level 40");
      if (message.member.roles.cache.has(role.id)) return;
      else await message.member.roles.add(role.id);
    }

    if (user.level == 50) {
      let role = message.guild.roles.cache.find(role => role.name == "Level 50");
      if (!role) await message.guild.roles.create({
        name: "Level 50",
        color: "#fccc04"
      }).catch(err => console.log(err));
      role = message.guild.roles.cache.find(role => role.name == "Level 50");
      if (message.member.roles.cache.has(role.id)) return;
      else await message.member.roles.add(role.id);
    }

    if (user.level == 60) {
      let role = message.guild.roles.cache.find(role => role.name == "God Level");
      if (!role) await message.guild.roles.create({
        name: "God Level",
        color: "#c30202",
      }).catch(err => console.log(err));
      role = message.guild.roles.cache.find(role => role.name == "God Level");
      if (message.member.roles.cache.has(role.id)) return;
      else await message.member.roles.add(role.id);
    }
  }

  // <----/AFk System/---->
  const status = quick.get(`${message.author.id}_${message.guild.id}_afk`);

  if (status && status.active && message.guild.me.permissions.has('MANAGE_NICKNAMES' || 'ADMINISTRATOR')) {

    quick.set(`${message.author.id}_${message.guild.id}_afk`, {
      username: message.author.username,
      active: false,
      date: null,
    });

    await message.member
      .setNickname(status.username)

      .then(() => {
        message.reply({ content: `**You Were AFK For ${ms(Date.now() - (status.date || 0))}**`, allowedMentions: { repliedUser: true } });
      })

      .catch(_e => {
        quick.delete(`${message.author.id}_${message.guild.id}_afk`);
        message.reply({ content: '**Failed To Set Your Status.**', allowedMentions: { repliedUser: true } });
      });
  }

  // <----/XOPCHAT System/---->

  if (message.channel.id === "835025266728370176") {
    fetch(`https://api.monkedev.com/fun/chat?msg=${message.content}&uid=${message.author.id}&`)
      .then(response => response.json())
      .then(data => {
        message.channel.send(data.response)
      })
      .catch(() => {
        message.channel.send({ content: "Couldnt Fetch Response!" });
      })
  }

  if (message.channel.id === "853316512358334494") {
    fetch(`https://api.monkedev.com/fun/chat?msg=${message.content}&uid=${message.author.id}&`)
      .then(response => response.json())
      .then(data => {
        message.channel.send(data.response)
      })
      .catch(() => {
        message.channel.send({ content: "Couldnt Fetch Response!" });
      })
  }

  if (message.channel.id === "853326210531590175") {
    fetch(`https://api.monkedev.com/fun/chat?msg=${message.content}&uid=${message.author.id}&`)
      .then(response => response.json())
      .then(data => {
        message.channel.send(data.response)
      })
      .catch(() => {
        message.channel.send({ content: "Couldnt Fetch Response!" });
      })
  }

  // <----/Bot Mentioned/---->

  if (message.content === "<@831824859066925087>" || message.content === "<@!831824859066925087>") {
    message.channel.send({ content: `***${message.author} My Prefix Is x! And You Can Do x!help To Get My Commands!***` })
  }

  // <----/Prefix System/---->

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json"));
  if (!prefixes[message.guild.id]) {
    prefixes[message.guild.id] = {
      prefix: process.env.PREFIX
    }
  }

  let prefix = prefixes[message.guild.id].prefix;
  if (!message.content.startsWith(prefix)) return;

  let profileData;
  try {
    profileData = await profileModel.findOne({ userID: message.author.id });
    if (!profileData) {
      let profile = await profileModel.create({
        userID: message.author.id,
        serverID: message.guild.id,
        coins: 1000,
        bank: 0,
      });
      profile.save();
    }
  } catch (err) {
    console.log(err);
  }


  const args = message.content.slice(prefix.length).split(/ +/);
  const cmd = args.shift().toLowerCase();

  // <----/Command System/---->

  const command = client.commands.get(cmd) ||
    client.commands.find(a => a.aliases && a.aliases.includes(cmd));

  if (!command) {
    return message.reply({ content: `**Couldn't Find That Command, Do (prefix)help And Check Again!**`, allowedMentions: { repliedUser: true } })
  }

  if (message.channel.id === "841362279353155656") {
    message.channel.send({ content: `**${message.author.tag} Used The Command ${command.name} In ${message.guild.name}**` })
  }

  // <----/Permissions System/---->

  const validPermissions = [
    "CREATE_INSTANT_INVITE",
    "KICK_MEMBERS",
    "BAN_MEMBERS",
    "ADMINISTRATOR",
    "MANAGE_CHANNELS",
    "MANAGE_GUILD",
    "ADD_REACTIONS",
    "VIEW_AUDIT_LOG",
    "PRIORITY_SPEAKER",
    "STREAM",
    "VIEW_CHANNEL",
    "SEND_MESSAGES",
    "SEND_TTS_MESSAGES",
    "MANAGE_MESSAGES",
    "EMBED_LINKS",
    "ATTACH_FILES",
    "READ_MESSAGE_HISTORY",
    "MENTION_EVERYONE",
    "USE_EXTERNAL_EMOJIS",
    "VIEW_GUILD_INSIGHTS",
    "CONNECT",
    "SPEAK",
    "MUTE_MEMBERS",
    "DEAFEN_MEMBERS",
    "MOVE_MEMBERS",
    "USE_VAD",
    "CHANGE_NICKNAME",
    "MANAGE_NICKNAMES",
    "MANAGE_ROLES",
    "MANAGE_WEBHOOKS",
    "MANAGE_EMOJIS",
  ]

  if (command.permissions.length) {
    let invalidPerms = []
    for (const perm of command.permissions) {
      if (!validPermissions.includes(perm)) {
        return console.log({ content: `Invalid Permissions ${perm}` });
      }
      if (!message.member.permissions.has(perm)) {
        invalidPerms.push(perm);
      }
    }
    if (invalidPerms.length) {
      return message.reply({ content: `**Hold Your Horses! You Have Missing Permissions: \`${invalidPerms}\`**`, allowedMentions: { repliedUser: true } });
    }
  }

  // <----/Premium System/---->

  if (command.premium && !(await premiumSchema.findOne({ User: message.author.id })))
    return message.reply({ content: "***You Need To Buy Premium To Use This Command! 💰 \nBuy The Premium Pack `Noob XOPBOT` Down Here ⤵ \n(https://www.patreon.com/user?u=52511474&fan_landing=true)***", allowedMentions: { repliedUser: true } })

  // <----/NSFW Registration System/---->

  if (command.nsfw && !(await nsfwSchema.findOne({ User: message.author.id })))
    return message.reply({ content: "***You Need To Register For NSFW Usage To Do This Command! 🔞 \nRequirments: \n`18+ Years Old` \n`Mature Adult` \n`Mature Behavior` \n`Full Responsibility` \nSimply Do `(prefix)register` And I Will Take You To The Process! 😊***", allowedMentions: { repliedUser: true } })

  // <----/Cooldown System/---->

  async function commandExecute() {
    if (command) command.execute(client, message, cmd, args, Discord, profileData)
  }
  if (command.cooldown) {
    const current_time = Date.now();
    const cooldown_amount = (command.cooldown) * 1000

    cooldown.findOne({ userId: message.author.id, cmd: command.name }, async (err, data) => {
      if (data) {
        const expiration_time = data.time + cooldown_amount;

        if (current_time < expiration_time) {
          const time_left = (expiration_time - current_time) / 1000

          if (time_left.toFixed(1) >= 3600) {
            let hour = (time_left.toFixed(1) / 3600);
            return message.reply({ content: `**Please Wait ${parseInt(hour)} More Hours Before Using \`${command.name}\` Again!**`, allowedMentions: { repliedUser: true } })
          }
          if (time_left.toFixed(1) >= 60) {
            let minute = (time_left.toFixed(1) / 60);
            return message.reply({ content: `**Please Wait ${parseInt(minute)} More Minutes Before Using \`${command.name}\` Again!**`, allowedMentions: { repliedUser: true } })
          }
          let seconds = (time_left.toFixed(1));
          return message.reply({ content: `**Please Wait ${parseInt(seconds)} More Seconds Before Using \`${command.name}\` Again!**`, allowedMentions: { repliedUser: true } })
        } else {
          await cooldown.findOneAndUpdate({ userId: message.author.id, cmd: command.name }, { time: current_time });
          commandExecute();
        }
      } else {
        commandExecute();
        new cooldown({
          userId: message.author.id,
          cmd: command.name,
          time: current_time,
          cooldown: command.cooldown,
        }).save();
      }
    })
  } else {
    commandExecute();
  };

  // <----/Antilink System/---->

  const antilinkData = require('../../models/antilink')
  client.on("message", async (message) => {
    const antilink = await antilinkData.findOne({
      GuildID: message.guild.id,
    })
    if (antilink) {
      if (message.content.match("https://") || message.content.match("discord.gg") || message.content.match("www.")) {
        message.delete();
        message.reply({ content: "**No Links Allowed While Anti-Link Is Active For XOPBOT!**", allowedMentions: { repliedUser: true } }).then(msg => {
          let time = '4s'
          setTimeout(function () {
            msg.delete();
          }, ms(time));
        })
      } else {
        return;
      }
    } else if (!antilink) {
      return;
    }
  });

  // <----/Antiwords System/---->

  const antiwordsData = require('../../models/antiwords')
  client.on("message", async (message) => {
    const antiwords = await antiwordsData.findOne({
      GuildID: message.guild.id,
    })
    if (antiwords) {
      if (message.content.match("bitch") || message.content.match("hoe") || message.content.match("slut") || message.content.match("nigga") || message.content.match("nigg") || message.content.match("dick") || message.content.match("cunt") || message.content.match("shit") || message.content.match("fuck")) {
        message.delete();
        message.reply({ content: "**No Bad Words Allowed Please Stop!**", allowedMentions: { repliedUser: true } }).then(msg => {
          let time = '4s'
          setTimeout(function () {
            msg.delete();
          }, ms(time));
        })
      } else {
        return;
      }
    } else if (!antiwords) {
      return;
    }
  });

  // <----/Welcome System/---->

  const welcomeData = require("../../models/welcome")
  const welcomemsg = require("../../models/joinmsg")
  client.on(`guildMemberAdd`, async (member) => {

    const data = await welcomeData.findOne({
      GuildID: member.guild.id,
    })

    if (data) {
      var channel = data.Welcome

      var data2 = await welcomemsg.findOne({
        GuildID: member.guild.id,
      })
      if (data2) {
        var joinmessage = data2.JoinMsg;

        joinmessage = joinmessage.replace("{user.mention}", `${member}`)
        joinmessage = joinmessage.replace("{user.name}", `${member.user.tag}`)
        joinmessage = joinmessage.replace("{server}", `${member.guild.name}`)
        joinmessage = joinmessage.replace("{membercount}", `${member.guild.memberCount}`)

        const embed20 = new Discord.MessageEmbed()
          .setDescription(joinmessage)
          .setColor("GREEN")
        member.guild.channels.cache.get(channel).send({ embeds: [embed20] });
      }
    } else if (data2) {
      var channel = data.Welcome

      const embed200 = new Discord.MessageEmbed()
        .setTitle("Welcome")
        .setDescription(`${member}, Welcome to **${member.guild.name}**! We Hope You Like Our Server! Enjoy Your Stay here!`)
        .setFooter(`We Are Now ${member.guild.memberCount} Members`)
        .setColor("GREEN")

      member.guild.channels.cache.get(channel).send({ embeds: [embed200] })
    } else if (!data) {
      return;
    }
  });

  // <----/Goodbye System/---->

  const byeData = require("../../models/leavechannel")
  const byemsg = require("../../models/leavemessage")
  client.on(`guildMemberRemove`, async (member) => {
    const avatar = member.user.avatarURL;

    const data = await byeData.findOne({
      GuildID: member.guild.id,
    })
    if (data) {

      const data2 = await byemsg.findOne({
        GuildID: member.guild.id,
      })
      if (data2) {
        var leavemessage = data2.ByeMsg;

        leavemessage = leavemessage.replace("{user.mention}", `${member}`)
        leavemessage = leavemessage.replace("{user.name}", `${member.user.tag}`)
        leavemessage = leavemessage.replace("{server}", `${member.guild.name}`)
        leavemessage = leavemessage.replace("{membercount}", `${member.guild.memberCount}`)

        const embed2678 = new Discord.MessageEmbed()
          .setDescription(leavemessage)
          .setColor("#c30202");

        let channel = data.Bye

        member.guild.channels.cache.get(channel).send({ embeds: [embed2678] });

      } else if (!data2) {
        const embed2 = new Discord.MessageEmbed()
          .setTitle("Goodbye")
          .setThumbnail(member.user.avatarURL())
          .setDescription(`**${member.user.tag}** Just Left This Server! We hope They Return Back Soon!`)
          .setFooter(`We Now Have ${member.guild.memberCount} Members!`)
          .setThumbnail(member.user.avatarURL())
          .setColor("#c30202")

        let byechannel = data.Bye

        member.guild.channels.cache.get(byechannel).send({ embeds: [embed2] });
      }
    } else if (!data) {
      return;
    }
  })
}