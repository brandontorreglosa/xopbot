const Discord = require('discord.js');
const Levels = require('discord-xp');
require('dotenv').config();
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTIONS"] });
const mongoose = require('mongoose');
const { Database } = require('quickmongo');
const disbot = require("disbotlist");
const dbl = new disbot("IbDYioKdSGgRbowHKUBYHjeZ", client);

const fs = require('fs')

client.db = new Database(process.env.MONGODB_SRV2)
client.filters = process.env.filters;
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

client.db.on("ready", () => {

    console.log(`CONNECTED WITH DATABASE `)
})

client.on("ready", () => {

    dbl.serverCount();

})

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