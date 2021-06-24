const Discord = require("discord.js");

module.exports = {
    name: "dm",
    permissions: ["MANAGE_MESSAGES"],
    cooldown: 5,
    description: "Send DM Message To A User",
    async execute(client, message, cmd, args, Discord)  {
    const userid = args[0];
    if (!userid) {
    return message.channel.send("**Please Enter an ID**")
    }
    const msg = args.slice(1).join(" ");
    if (!msg) {
    return message.channel.send("**Please Enter The Message**")
    }
    const user = client.users.cache.get(`${userid}`);
    const embed = new Discord.MessageEmbed()
    .setDescription(`${msg}`)
    .setFooter(`From ${message.author.username}`)
    .setColor("RED");

    user.send(embed);
    }
}