const Discord = require('discord.js');
const OWNER_ID = process.env.Owner_ID;
const errorChannel = process.env.errorChannel;
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
require('dotenv').config();

module.exports = {
    name: "leaveservers",
    permissions: ["ADMINISTRATOR"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    cooldown: 3,
    description: "Check what Servers the bot is in!",
    async execute(client, message, cmd, args, Discord) {
        try {
            if (message.author.id != OWNER_ID) {
                const nopr = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`**Sorry Only 👑HACKERPROᵈᵉᵛ#1498 Can Run This Command! 😔**`)
                return message.lineReplyNoMention(nopr)
            }
            let data = [];
            client.guilds.cache.forEach(x => {
                if (x.memberCount <= 5) {
                    x.leave()
                    const embed = new Discord.MessageEmbed()
                        .setTimestamp()
                        .setColor(`${color}`)
                        .setDescription(`🔹 Left **${x.name}** As It Had \`${x.memberCount}\` Members\n............................`)
                    message.lineReplyNoMention(embed);
                }
            });
            if (data.length > 0) {
                data.sort();
                data = `🔹 ` + data.join('\n🔹');
            }
            else {
                data = "[No server found]";
            }
        } catch (err) {
            const errorlogs = client.channels.cache.get(errorChannel)
            errorlogs.send({ content: `Error On Bot Server Command!\n\nError:\n\n **${err}**` })
        }
    }
}