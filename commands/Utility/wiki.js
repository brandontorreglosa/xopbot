const Discord = module.require("discord.js");
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
    name: "wiki",
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    description: "Get Search Results from Wikipedia",
    async execute(client, message, cmd, args, Discord) {
        const search = args.join("_");
        const msg = args.join(" ");
        if (!msg) {
            const nopr = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor(`${color}`)
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**\`(prefix)wiki <search>\`**`)
            return message.lineReplyNoMention(nopr)
        }
        const link = `https://www.wikipedia.org/w/index.php?search=${search}&ns0=1`;
        const embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setTitle("Wikipedia Search")
            .addField(`You Searched For:`, `${msg}`)
            .addField(`Results:`, `[Here's What I Found](${link})`)
            .setColor(`${color}`)

        message.lineReplyNoMention(embed);
    }
}