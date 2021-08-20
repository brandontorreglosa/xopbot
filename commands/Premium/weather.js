const weather = require('weather-js');

const Discord = require('discord.js');

module.exports = {
    name: 'weather',
    permissions: ["SEND_MESSAGES"],
    premium: true,
    aliases: ['wthr'],
    cooldown: 2,
    async execute(client, message, cmd, args, Discord) {

        weather.find({ search: args.join(" "), degreeType: 'F' }, function (error, result) {
            // 'C' can be changed to 'F' for farneheit results
            if (error) return message.channel.send({ content: error });
            if (!args[0]) return message.channel.send({ content: '**Please Specify A Location!**' })

            if (result === undefined || result.length === 0) return message.channel.send({ content: '**Invalid** Location!' });

            var current = result[0].current;
            var location = result[0].location;

            const weatherinfo = new Discord.MessageEmbed()
                .setTimestamp()
                .setDescription(`**${current.skytext}**`)
                .setAuthor(`Weather forecast for ${current.observationpoint}`)
                .setThumbnail(current.imageUrl)
                .setColor(0x111111)
                .addField('Timezone', `UTC${location.timezone}`, true)
                .addField('Degree Type', 'Celsius', true)
                .addField('Temperature', `${current.temperature}°`, true)
                .addField('Wind', current.winddisplay, true)
                .addField('Feels like', `${current.feelslike}°`, true)
                .addField('Humidity', `${current.humidity}%`, true)


            message.channel.send(weatherinfo)
        })
    }
}