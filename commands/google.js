const Discord = require("discord.js");

module.exports = {
    name: "google",
    permissions: ["SEND_MESSAGES"],
    description: "Search anything on google",
    async execute(client, message, cmd, args, Discord) {
    const text1 = args.join(' ');
    const text2 = args.join('+');
    const google = `https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2000px-Google_%22G%22_Logo.svg.png`;
    if (!text2) {
    return message.channel.send("**Enter Something To Search For!**")
    }
    const embed = new Discord.MessageEmbed()
    .setTimestamp()
    .setAuthor("Google", `https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2000px-Google_%22G%22_Logo.svg.png`)
    .setThumbnail(`https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2000px-Google_%22G%22_Logo.svg.png`)
    .setDescription(`**Searched For: **\n${text1} \n\n**Result: **\n[Here's What I Found](https://google.com/search?q=${text2})`)
    .setThumbnail(google)
    .setColor("RED");
message.channel.send(embed);
}
}