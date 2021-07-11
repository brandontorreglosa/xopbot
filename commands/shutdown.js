const Discord = require("discord.js");
const OWNER_ID = process.env.Owner_ID;
const errorChannel = process.env.errorChannel;
module.exports = {
    name: "shutdown",
    permissions: ["ADMINISTRATOR"],
    cooldown: 120,
    description: "Shut's down the bot",
    async execute(client, message, cmd, args, Discord) {
        try {
            if (!OWNER_ID) return message.channel.send("**You Cant Shutdown XOPBOT Only The Developer! 👿**");
            const user = message.mentions.members.first || message.author;
            const embed = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#c30202')
                .setTitle('**XOPBOT Shutting Down**')
                .setDescription(`**The Bot Was Shut Down! 😱 \nBy ${message.author.username}**`)
                .setFooter('XOPBOT Can Start Again By Deploying It!')
            message.channel.send(embed).then(m => {
                client.destroy();
            });
            await message.channel.send("The Bot has been ShutDown")
        } catch (err) {
            const errorlogs = client.channels.cache.get(errorChannel)
            errorlogs.send(`Error On Bot Shutdown Command!\n\nError:\n\n **${err}**`)
        }
    }
}