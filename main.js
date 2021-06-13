const Discord = require('discord.js');
const Levels = require('discord-xp');
//const prefixSchema = require('./models/prefix');
require('dotenv').config();
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTIONS"]});
const mongoose = require('mongoose');

const fs = require('fs')

client.commands = new Discord.Collection();
client.events = new Discord.Collection();
client.snipes = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

// client.on('guildMemberAdd', guildMember =>{
//     let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Unverified');
 
//     guildMember.roles.add(welcomeRole);
//     guildMember.guild.channels.cache.get('766937600161349662').send(`**Welcome <@${guildMember.user.id}> To Our Server! Make Sure To Check Out The Rules Channel!**`)
// });
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

// client.prefix = async function(message) {
//     let custom;

//     const data = await prefixSchema.findOne({ Guild : message.guild.id })
//         .catch(err => console.log(err))
    
//     if(data) {
//         custom = data.Prefix;
//     } else {
//         custom = prefix;
//     }
//     return custom;
// }

// client.on('message', async message => {
// const p = await client.prefix(message)
// if(message.mentions.users.first()) {
//     if(message.mentions.users.first().id === '759895856568074290') return message.channel.send(`Prefix in ${message.guild.name} is ${p}`)
// }
// if (!message.content.startsWith(p)) return;
// if (!message.guild) return;
// if (!message.member) message.member = await message.guild.fetchMember(message);
// const args = message.content.slice(p.length).trim().split(/ +/g);
// const cmd = args.shift().toLowerCase();
// if (cmd.length == 0) return;
// let command = client.commands.get(cmd)
// if (!command) command = client.commands.get(client.aliases.get(cmd));
// if (command) command.run(client, message, args)
// })

// client.on('guildDelete', async (guild) => {
// prefixSchema.findOne({ Guild: guild.id }, async (err, data) => {
//     if (err) throw err;
//     if (data) {
//         prefixSchema.findOneAndDelete({ Guild : guild.id }).then(console.log('deleted data.'))
//     }
// })
// })

    client.login(process.env.DISCORD_TOKEN);