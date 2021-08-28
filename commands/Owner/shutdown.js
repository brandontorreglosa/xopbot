const Discord = require("discord.js");
const OWNER_ID = process.env.Owner_ID;
const errorChannel = process.env.errorChannel;
const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: "shutdown",
    permissions: ["ADMINISTRATOR"],
    cooldown: 120,
    description: "Shut's down the bot",
    async execute(client, message, cmd, args, Discord) {
        try {
            if (!OWNER_ID) return message.lineReplyNoMention({ content: "**You Cant Shutdown XOPBOT Only The Developer! 👿**" });
            const user = message.mentions.members.first || message.author;
            const embed = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#c30202')
                .setTitle('**XOPBOT Shutting Down**')
                .setDescription(`**The Bot Was Shut Down! 😱 \nBy ${message.author.username}**`)
                .setFooter('XOPBOT Can Start Again By Deploying It!')
            message.lineReplyNoMention(embed).then(m => {
                client.destroy();
            });
        } catch (err) {
            const errorlogs = client.channels.cache.get(errorChannel)
            errorlogs.send({ content: `Error On Bot Shutdown Command!\n\nError:\n\n **${err}**` })
        }
    }
}