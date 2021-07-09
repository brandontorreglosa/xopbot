const errorChannel = process.env.errorChannel;

const Discord = module.require("discord.js");

module.exports = {
    name: "dm",
    description: "Send DM message to a user",
    async execute(client, message, cmd, args, Discord) {
    const userid = args[0];
    if (!userid) {
    return message.channel.send("Enter an ID")
    }
    const msg = args.slice(1).join(" ");
    if (!msg) {
    return message.channel.send("Enter the message")
    }
    const user = client.users.cache.get(`${userid}`);
    const embed = new Discord.MessageEmbed()
    .setTimestamp()
    .setTitle("Support Reply!")
    .setDescription(`${msg}`)
    .setColor("RANDOM");

    user.send(embed);
    }, catch (error) {
        const errorlogs = client.channels.cache.get(errorChannel);
    message.channel.send("Looks like an error has occured");
    errorlogs.send("Error on DM command\n Error:\n"+error)
    }
}