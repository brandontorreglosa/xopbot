const Discord = require("discord.js");

module.exports = {
    name: "amiajoke",
    permissions: ["SEND_MESSAGES"],
    cooldown: 5,
    description: "Another fun command",
    async execute(client, message, cmd, args, Discord)  {
    let avatar = message.mentions.users.size ? message.mentions.users.first().avatarURL({ format: 'png', dynamic: true, size: 2048 }) : message.author.avatarURL({ format: 'png', dynamic: true, size: 2048 });
    let link = `https://api.alexflipnote.dev/amiajoke?image=${avatar}`;

    if (!avatar) {
        return message.channel.send("`Usage: (prefix)amiajoke <user>`")
        }
    const embed = new Discord.MessageEmbed()
    .setTimestamp()
    .setColor("RED")
    .setImage(link);
    message.channel.send(embed);
    }
}