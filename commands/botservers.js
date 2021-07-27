const Discord = require('discord.js');
const OWNER_ID = process.env.Owner_ID;
const errorChannel = process.env.errorChannel;
require('dotenv').config();

module.exports = {
    name: "botservers",
    cooldown: 3,
    permissions: ["ADMINISTRATOR"],
    aliases: ['bserver', 'bs'],
    description: "Check what Servers the bot is in!",
    async execute(client, message, cmd, args, Discord) {
        try {
            if (message.author.id != OWNER_ID) return message.channel.send(`**❌ Developer Only ❌**`);
            let data = [];
            client.guilds.cache.forEach(x => {
                const embed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor('#c30202')
                    .setDescription(`🔹**${x.name}** | \`${x.memberCount}\` Members (ID: ${x.id})\n............................`);
                message.channel.send(embed)
                // message.channel.send(`🔹**${x.name}** | \`${x.memberCount}\` Members (ID: ${x.id})\n............................`);
            });

            if (data.length > 0) {
                data.sort();
                data = `🔹 ` + data.join('\n🔹');
            }
            else {
                data = "[No Server Found Try Again]";
            }
        } catch (err) {

            const errorlogs = client.channels.cache.get(errorChannel)
            errorlogs.send(`Error On Bot Server Command!\n\nError:\n\n **${err}**`)

        }
    }
};