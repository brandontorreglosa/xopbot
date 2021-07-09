const errorChannel = process.env.errorChannel;

const Discord = module.require("discord.js");

module.exports = {
    name: "dm",
    permissions: ["MANAGE_MESSAGES"],
    description: "Send DM message to a user",
    async execute(client, message, cmd, args, Discord) {
     const user = message.mentions.members.first()
     if(!user) return message.channel.send('Please Specify User!')
    const msg = args.slice(1).join(" ");
    if (!msg) {
    return message.channel.send("Enter the message")
    }
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