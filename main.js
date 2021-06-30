const Discord = require('discord.js');
const Levels = require('discord-xp');
require('dotenv').config();
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTIONS"]});
const mongoose = require('mongoose');
const { Database } = require('quick.db');
const db = new Database(process.env.MONGODB_SRV2)
const disbot = require("disbotlist");
const dbl = new disbot("IbDYioKdSGgRbowHKUBYHjeZ", client);

const fs = require('fs')

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

client.on("ready", () => {

    dbl.serverCount();

})

//  client.on('guildMemberAdd', guildMember =>{
//      let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'English');
 
//      guildMember.roles.add(welcomeRole);
//      guildMember.guild.channels.cache.get('766937600161349662').send(`**Welcome <@${guildMember.user.id}> To Our Server! Make Sure To Check Out The #✅rules✅ Channel! \nYou Can Talk On The #💬｜bot-commands Thank You Bye.**`)
//  });
//const channel = client.channels.cache.get('841362279353155656')
//if(command) return channel.send(`${message.author.tag} used the command ${command.name} in ${message.guild.name}`)

Levels.setURL(process.env.MONGODB_SRV);

mongoose.connect(process.env.MONGODB_SRV ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,   
})
.then(() => {
    console.log("Connected To Mongo Database!");
})
.catch((err) => {
    console.log(err);
});

    client.login(process.env.DISCORD_TOKEN);