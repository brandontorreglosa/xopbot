const Discord = require("discord.js");
const errorChannel = process.env.errorChannel;
module.exports = {
    name: "createvoice",
    aliases: ['newvoicec', 'cvoicec'],
    permissions: ["MANAGE_CHANNELS"],
    cooldown: 30,
    description: "Create voice Channels in your Server",
    async execute(client, message, cmd, args, Discord) {
        try {
            const user = message.mentions.members.first()
            if (!args[0]) {
                return message.reply("**Please Give The Voice Channel A Name!**")
            }
            message.guild.channels.create(args.slice(0).join(" "), { type: "voice" });

            const embed = new Discord.MessageEmbed()
                .setTimestamp()
                .setTitle(`New Voice Channel Named ${message.channel}`)
                .setDescription(`**Channel Was Created By ${message.author.username}**`)
                .setColor("#c30202")
            message.channel.send(embed);
        } catch (err) {
            const errorlogs = client.channels.cache.get(errorChannel)
            errorlogs.send(`Error On Create Voice Channel Command!\n\nError:\n\n **${err}**`)
        }
    }
}