const Discord = require("discord.js");
const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: "google",
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    cooldown: 5,
    description: "Search anything on google",
    async execute(client, message, cmd, args, Discord) {
        const text1 = args.join(' ');
        const text2 = args.join('+');
        const google = `https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2000px-Google_%22G%22_Logo.svg.png`;
        if (!text2) {
            const nopr = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#c30202')
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**\`(prefix)google <search>\`**`)
            return message.lineReplyNoMention(nopr)
        }
        const embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setAuthor("Google", `https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2000px-Google_%22G%22_Logo.svg.png`)
            .setThumbnail(`https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2000px-Google_%22G%22_Logo.svg.png`)
            .setDescription(`**Searched For: **\n${text1} \n\n**Result: **\n[Here's What I Found](https://google.com/search?q=${text2})`)
            .setThumbnail(google)
            .setColor('#c30202')
        message.lineReplyNoMention(embed);
    }
}