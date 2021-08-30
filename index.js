const Discord = require('discord.js');
require('discord-reply');
const Levels = require('discord-xp');
require('dotenv').config();
const { Client, Collection, Intents } = require("discord.js");
const client = new Client({
    partials: ["MESSAGE", "CHANNEL", "REACTIONS"],
    allowedMentions: { parse: ['users', 'roles'], repliedUser: true },
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_WEBHOOKS,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.GUILD_INVITES,
        Intents.FLAGS.GUILD_BANS,
    ],
});
const mongoose = require('mongoose');
const { Database } = require('quickmongo');
const disbot = require("disbotlist");
const disbut = require('discord-buttons');
disbut(client);
const dbl = new disbot("IbDYioKdSGgRbowHKUBYHjeZ", client);
const fs = require('fs')
const schema = require('./models/schema')
const bankschema = require('./models/bankschema')

// <----/Client Events/---->

client.db = new Database(process.env.MONGODB_SRV2)
client.commands = new Collection();
client.events = new Collection();
client.setMaxListeners(0);

// <----/Handlers System/---->

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

// <----/Disbotlist Servercount System/---->

client.db.on("ready", () => {

    console.log(`CONNECTED WITH DISBOTLIST`)
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

// <----/Economy System/---->


client.bal = (id) => new Promise(async ful => {
    const data = await schema.findOne({ id });
    if (!data) return ful(0);
    ful(data.coins);
})




client.add = (id, coins) => {
    schema.findOne({ id }, async (err, data) => {
        if (err) throw err;
        if (data) {
            data.coins += coins;
        } else {
            data = new schema({ id, coins })
        }
        data.save()
    })
}

client.rmv = (id, coins) => {
    schema.findOne({ id }, async (err, data) => {
        if (err) throw err;
        if (data) {
            data.coins -= coins;
        } else {
            data = new schema({ id, coins: -coins })
        }
        data.save()
    })
}


client.bank = (id) => new Promise(async ful => {
    const data = await bankschema.findOne({ id });
    if (!data) return ful(0);
    ful(data.bank);
})




client.bankadd = (id, bank) => {
    bankschema.findOne({ id }, async (err, data) => {
        if (err) throw err;
        if (data) {
            data.bank += bank;
        } else {
            data = new bankschema({ id, bank })
        }
        data.save()
    })
}

client.bankrmv = (id, bank) => {
    bankschema.findOne({ id }, async (err, data) => {
        if (err) throw err;
        if (data) {
            data.bank -= bank;
        } else {
            data = new bankschema({ id, bank: -bank })
        }
        data.save()
    })
}


client.login(process.env.DISCORD_TOKEN);