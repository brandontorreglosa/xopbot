const Discord = require('discord.js');
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
const dbl = new disbot("IbDYioKdSGgRbowHKUBYHjeZ", client);
const ButtonPages = require('discord-button-pages');
const DiscordButtons = require('discord-buttons')
DiscordButtons(client);
const fs = require('fs')

//<----/Button Commands/---->
client.on('clickButton', (button) => {
    ButtonPages.buttonInteractions(button, client.interaction);
});

client.on('message', msg => {
    if (message.content.match('config')) {
        message.react('🌘');

        const embed15 = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
            //.setTitle('__🎮 Games__')
            .setColor('#c30202')
            .addFields(
                { name: '__⚠ Config (9)__', value: '\n[antiwords](https://xopbot-gg.glitch.me/) \n__***Setup Bad Words Detector!***__ \n[antilink](https://xopbot-gg.glitch.me/) \n__***Setup Antilink On A Server!***__ \n[autonsfw](https://xopbot-gg.glitch.me/) \n__***Setup Autonsfw On A Server!***__ \n[automeme](https://xopbot-gg.glitch.me/) \n__***Setup Automeme On A Server!***__ \n[joinchannel](https://xopbot-gg.glitch.me/) \n__***Setup The Join Channel!***__' }
            )
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

        const embed16 = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
            //.setTitle('__🎮 Games__')
            .setColor('#c30202')
            .addFields(
                { name: '__⚠ Config (9)__', value: '\n[leavechannel](https://xopbot-gg.glitch.me/) \n__***Setup The Leave Channel!***__ \n\[joinmessage](https://xopbot-gg.glitch.me/) \n__***Setup The Join Message!***__ \n\[leavemessage](https://xopbot-gg.glitch.me/) \n__***Setup The Leave Message!***__ \n[setprefix](https://xopbot-gg.glitch.me/) \n__***Set The Server`s Custom Prefix!***__' }
            )
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

        const embedPages = [embed15, embed16]
        ButtonPages.createPages(client.interaction, msg, embedPages, 60 * 1000, "blurple", "⏩", "⏪", "❌");
    }
});

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