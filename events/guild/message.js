const fetch = require("node-fetch").default;
const profileModel = require("../../models/profileSchema");
const premiumSchema =  require("../../models/premium");
const quick = require('quick.db');
const Levels = require('discord-xp');
const fs = require('fs');
require('dotenv').config();
const cooldowns = new Map();

module.exports = async (Discord, client, message) => {
    if(message.author.bot || message.channel.type === 'dm') return;
    
    const randomXP = Math.floor(Math.random() *49) + 1;
    const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomXP);
    if (hasLeveledUp) {
      const user = await Levels.fetch(message.author.id, message.guild.id);

      var someonelevelup = `_**You Have Advanced To Level ${user.level} You Are Getting Wise!**_`;
      message.reply(someonelevelup)
      .then(message => {
        message.delete({ timeout: 8000 })
      })
      
      //const channel = message.guild.channels.cache.find( x => x.name.toLowerCase().includes("Leveling"))
      //if(!channel) message.guild.channels.create(`Leveling`);

      if (user.level == 1) {
        let role = message.guild.roles.cache.find(role => role.name == "Level 1");
        if (!role) await message.guild.roles.create({
          data: {
          name: "Level 1",
          color: "GREEN",
          }
        }).catch(err => console.log(err));
        role = message.guild.roles.cache.find(role => role.name == "Level 1");
        if (message.member.roles.cache.has(role.id)) return;
        else await message.member.roles.add(role.id);
      }

      if (user.level == 10) {
        let role = message.guild.roles.cache.find(role => role.name == "Level 10");
        if (!role) await message.guild.roles.create({
          data: {
          name: "Level 10",
          color: "#3fbfbf",
          }
        }).catch(err => console.log(err));
        role = message.guild.roles.cache.find(role => role.name == "Level 10");
        if (message.member.roles.cache.has(role.id)) return;
        else await message.member.roles.add(role.id);
      }

      if (user.level == 20) {
        let role = message.guild.roles.cache.find(role => role.name == "Level 20");
        if (!role) await message.guild.roles.create({
          data: {
          name: "Level 20",
          color: "#ff5722",
          }
        }).catch(err => console.log(err));
        role = message.guild.roles.cache.find(role => role.name == "Level 20");
        if (message.member.roles.cache.has(role.id)) return;
        else await message.member.roles.add(role.id);
      }

      if (user.level == 30) {
        let role = message.guild.roles.cache.find(role => role.name == "Level 30");
        if (!role) await message.guild.roles.create({
          data: {
          name: "Level 30",
          color: "#969102",
          }
        }).catch(err => console.log(err));
        role = message.guild.roles.cache.find(role => role.name == "Level 30");
        if (message.member.roles.cache.has(role.id)) return;
        else await message.member.roles.add(role.id);
      }

      if (user.level == 40) {
        let role = message.guild.roles.cache.find(role => role.name == "Level 40");
        if (!role) await message.guild.roles.create({
          data: {
          name: "Level 40",
          color: "#0c0c0c",
          }
        }).catch(err => console.log(err));
        role = message.guild.roles.cache.find(role => role.name == "Level 40");
        if (message.member.roles.cache.has(role.id)) return;
        else await message.member.roles.add(role.id);
      }

      if (user.level == 50) {
        let role = message.guild.roles.cache.find(role => role.name == "Level 50");
        if (!role) await message.guild.roles.create({
          data: {
          name: "Level 50",
          color: "#fccc04",
          }
        }).catch(err => console.log(err));
        role = message.guild.roles.cache.find(role => role.name == "Level 50");
        if (message.member.roles.cache.has(role.id)) return;
        else await message.member.roles.add(role.id);
      }
    }

const status = quick.get(`${message.author.id}_${message.guild.id}_afk`);

if (status && status.active && message.guild.me.hasPermission('MANAGE_NICKNAMES' || 'ADMINISTRATOR')) {
  
  quick.set(`${message.author.id}_${message.guild.id}_afk`, {
    username: message.author.username,
    active: false,
    date: null,
  });
 
  await message.member
    .setNickname(status.username)
   
    .then(() => {
      message.reply(`**You Were AFK For ${ms(Date.now() - (status.date || 0))}**`);
    })
   
    .catch(_e => {
      quick.delete(`${message.author.id}_${message.guild.id}_afk`);
      message.reply('Failed To Set Your Status.');
    });
}

    if(message.channel.id === "835025266728370176") {
        fetch(`https://api.monkedev.com/fun/chat?msg=${message.content}&uid=${message.author.id}&`)
        .then(response => response.json())
        .then(data => {
            message.channel.send(data.response)
        })
        .catch(() => {
            message.channel.send("Couldnt Fetch Response!");
        })
    }

    if(message.channel.id === "853316512358334494") {
      fetch(`https://api.monkedev.com/fun/chat?msg=${message.content}&uid=${message.author.id}&`)
      .then(response => response.json())
      .then(data => {
          message.channel.send(data.response)
      })
      .catch(() => {
          message.channel.send("Couldnt Fetch Response!");
      })
  }

  if(message.channel.id === "853326210531590175") {
    fetch(`https://api.monkedev.com/fun/chat?msg=${message.content}&uid=${message.author.id}&`)
    .then(response => response.json())
    .then(data => {
        message.channel.send(data.response)
    })
    .catch(() => {
        message.channel.send("Couldnt Fetch Response!");
    })
}

if (message.content === "<@831824859066925087>" || message.content === "<@!831824859066925087>") {
  message.channel.send(`***${message.author} My Prefix Is x! And You Can Do x!help To Get My Commands!***`)
}

if (message.content === "lol" || message.content === "lmao" || message.content === 'Lol' || message.content === 'Lmao') {
  message.channel.send(`***${message.author} Laughed Out Loud!***`)
  .then(message => {
    message.delete({ timeout: 8000 })
})
}

if (message.content === "bot" || message.content === "noob" || message.content === 'Bot' || message.content === 'Noob') {
  message.channel.send(`***Stop Bullying This Kid! :)***`)
  .then(message => {
    message.delete({ timeout: 15000 })
})
}

if (message.content === "yay" || message.content === "great" || message.content === 'Yay' || message.content === 'Great') {
  message.channel.send(`***Wooohooo!***`)
  .then(message => {
    message.delete({ timeout: 15000 })
})
}

if (message.content === "ihatexopbot" || message.content === "xopbotistrash" || message.content === 'Ihatexopbot' || message.content === 'Xopbotistrash') {
  message.channel.send(`***I Hate You Too Kid!***`)
  .then(message => {
    message.delete({ timeout: 15000 })
})
}

if (message.content === "bruh" || message.content === "bruhs" || message.content === 'Bruh') {
  message.channel.send(`***Bruh Moment!***`)
  .then(message => {
    message.delete({ timeout:15000 })
})
}

if (message.content === "yeet" || message.content === "getyeeted" || message.content === 'Yeet') {
  message.channel.send(`***Man Just Got Yeeted!***`)
  .then(message => {
    message.delete({ timeout: 15000 })
})
}

if (message.content === "deeznuts" || message.content === "mynuts" || message.content === "Deeznuts" || message.content === 'Mynuts') {
  message.channel.send(`***Best Meme For Me!***`)
  .then(message => {
    message.delete({ timeout: 15000 })
})
}

if (message.content === "stop" || message.content === "stopit" || message.content === 'Stop') {
  message.channel.send(`***Stop It Get Some Help Kid!***`)
  .then(message => {
    message.delete({ timeout: 15000 })
})
}

if (message.content === "1+1" || message.content === "oneplusone") {
  message.channel.send(`***Is 2 Boiiiii!***`)
  .then(message => {
    message.delete({ timeout: 15000 })
})
}

if (message.content === "damn" || message.content === "thatgood") {
  message.channel.send(`***Damn Kid!***`)
  .then(message => {
    message.delete({ timeout: 15000 })
})
}

let prefixes = JSON.parse(fs.readFileSync("./prefixes.json")); 
if(!prefixes[message.guild.id]){  
   prefixes[message.guild.id] = { 
    prefix: process.env.PREFIX 
   }
}

let prefix = prefixes[message.guild.id].prefix; 
  //  const prefix = process.env.PREFIX;
    if(!message.content.startsWith(prefix)) return;

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


    const args  = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) ||
                    client.commands.find(a => a.aliases && a.aliases.includes(cmd));

if(message.channel.id ==="841362279353155656") {
message.channel.send(`**${message.author.tag} Used The Command ${command.name} In ${message.guild.name}**`)
}

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

        if(command.permissions.length){
          let invalidPerms = []
          for(const perm of command.permissions){
            if(!validPermissions.includes(perm)){
              return console.log(`Invalid Permissions ${perm}`);
            }
            if(!message.member.hasPermission(perm)){
              invalidPerms.push(perm);
            }
          }
          if (invalidPerms.length){
            return message.channel.send(`**Hold Your Horses! You Have Missing Permissions: \`${invalidPerms}\`**`);
          }
        }

        if(command.premium && !(await premiumSchema.findOne({ User: message.author.id})))
        return message.reply("***You Need To Buy Premium To Use This Command! 💰 \nBuy Premium From Here (https://www.patreon.com/user?u=52511474&fan_landing=true)***")

    if(!cooldowns.has(command.name)){
        cooldowns.set(command.name, new Discord.Collection());
    }

    // const cooldown = used.get(message.author.id);
    // if (cooldown) {
    //   const remaining = Duration(cooldown - Date.now(), { units: ['h', 'm', 's'], round: true});
    //    return message.reply(`**Slowdown There Mate! Wait ${remaining} More Seconds Before Using ${command.name}**`).catch((err) => message.reply(`${err}`));
    // }

    const current_time = Date.now();
    const time_stamps = cooldowns.get(command.name);
    const cooldown_amount = (command.cooldown) * 1000;

    if(time_stamps.has(message.author.id)){
        const expiration_time = time_stamps.get(message.author.id) + cooldown_amount;

        if(current_time < expiration_time){
            const time_left = (expiration_time - current_time) / 1000;

            return message.reply(`**Slowdown There Mate! Wait ${time_left.toFixed(1)} More Seconds Before Using ${command.name}**`);
        }
    }

    time_stamps.set(message.author.id, current_time);
    setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount);

    const antilinkData = require('./models/antilink')
 client.on("message", async(message)=>{
  const antilink = await antilinkData.findOne({
    GuildID: message.guild.id
  })
  if (antilink) {
     if (message.content.match("https://") || message.content.match("discord.gg") || message.content.match("www.")) {
    message.delete();
    message.channel.send("No links allowed while anti-link is active!").then(msg=>{
    let time = '2s'
    setTimeout(function(){
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

command.execute(client, message, cmd, args, Discord, profileData);
}