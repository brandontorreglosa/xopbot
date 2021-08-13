const Discord = require('discord.js');
const Levels = require('discord-xp');
require('dotenv').config();
const client = new Discord.Client({
    partials: ["MESSAGE", "CHANNEL", "REACTIONS"],
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
    allowedMentions: {
        parse: ['users', 'roles'],
        repliedUser: true    
    }
});
const mongoose = require('mongoose');
const { Database } = require('quickmongo');
const disbot = require("disbotlist");
const dbl = new disbot("IbDYioKdSGgRbowHKUBYHjeZ", client);
const fs = require('fs')

// <----/Client Events/---->

client.db = new Database(process.env.MONGODB_SRV2)
//client.filters = process.env.filters;
//client.slashcommands = new Discord.Collection()
client.commands = new Discord.Collection();
client.events = new Discord.Collection();
client.setMaxListeners(0);

// <----/Handlers System/---->

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

// <----/Disbotlist Servercount System/---->

client.db.on("ready", () => {

    console.log(`CONNECTED WITH DATABASE `)
})

client.on("ready", () => {

    dbl.serverCount();

})

// <----/Mongodb System/---->

Levels.setURL(process.env.MONGODB_SRV);

mongoose.connect(process.env.MONGODB_SRV, {
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