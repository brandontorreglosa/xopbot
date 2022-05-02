const weather = require('weather-js');
const lineReplyNoMention = require('discord-reply');
const Discord = require('discord.js');
const color = process.env.Color;
module.exports = {
    name: 'weather',
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    premium: true,
    aliases: ['wthr'],
    cooldown: 5,
    async execute(client, message, cmd, args, Discord) {
        const catcherv2 = args.slice(0).join(" ");
        weather.find({ search: args.join(" "), degreeType: 'F' }, function (error, result) {
            if (!args[0]) {
                const nopr = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`(prefix)weather <location>\`**`)
                return message.lineReplyNoMention({ embed: nopr })
            }
            if (result === undefined || result.length === 0) {
                const notloc = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`${catcherv2}\` Is Not A Valid Location!**`)
                return message.lineReplyNoMention({ embed: notloc })
            }
            var current = result[0].current;
            var location = result[0].location;
            const weatherinfo = new Discord.MessageEmbed().setTimestamp().setDescription(`**${current.skytext}**`).setAuthor(`Weather forecast for ${current.observationpoint}`).setThumbnail(current.imageUrl).setColor(0x111111).addField('Timezone', `UTC${location.timezone}`, true).addField('Degree Type', 'Celsius', true).addField('Temperature', `${current.temperature}°`, true).addField('Wind', current.winddisplay, true).addField('Feels like', `${current.feelslike}°`, true).addField('Humidity', `${current.humidity}%`, true)
            message.lineReplyNoMention({ embed: weatherinfo })
        })
    }
}