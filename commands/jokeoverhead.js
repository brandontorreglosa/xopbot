const Discord = module.require("discord.js");

module.exports = {
    name: "jokeoverhead",
    permissions: ["SEND_MESSAGES"],
    cooldown: 5,
    description: "Another fun command",
    async execute(client, message, cmd, args, Discord)  {
    let avatar = message.mentions.users.size ? message.mentions.users.first().avatarURL({ format: 'png', dynamic: true, size: 2048 }) : message.author.avatarURL({ format: 'png', dynamic: true, size: 2048 });
    let link = `https://api.alexflipnote.dev/jokeoverhead?image=${avatar}`;

    if (!avatar) {
        return message.channel.send("**You Need To Mention Someone!**")
        }
    const embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setImage(link);
    message.channel.send(embed);
    }
}