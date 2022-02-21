const Discord = require("discord.js");
const OWNER_ID = process.env.Owner_ID;
const errorChannel = process.env.errorChannel;
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
const gcolor = process.env.Gcolor;
module.exports = {
    name: "shutdown",
    permissions: ["ADMINISTRATOR"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    cooldown: 3,
    description: "Shut's down the bot",
    async execute(client, message, cmd, args, Discord) {
        try {
            if (!OWNER_ID) {
                const nopr = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`**Sorry Only 👑HACKERPROᵈᵉᵛ#1498 Can Run This Command! 😔**`)
                return message.lineReplyNoMention(nopr)
            }
            const user = message.mentions.users.first || message.author;
            const embed = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor(`${gcolor}`)
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