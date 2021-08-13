const Discord = require("discord.js");
const errorChannel = process.env.errorChannel;
module.exports = {
    name: "createtext",
    aliases: ['newtextc', 'ctextc'],
    permissions: ["MANAGE_CHANNELS"],
    cooldown: 30,
    description: "Create text Channels in your Server",
    async execute(client, message, cmd, args, Discord) {
        try {
            const user = message.mentions.members.first()
            if (!args[0]) {
                return message.reply({ content: "**Please Give The Text Channel A Name!**", allowedMentions: { repliedUser: true } })
            }
            message.guild.channels.create(args.slice(0).join(" "), { type: "text" });

            const embed = new Discord.MessageEmbed()
                .setTimestamp()
                .setTitle(`New Text Channel Named ${message.channel}`)
                .setDescription(`**Channel Was Created By ${message.author.username}**`)
                .setColor("#c30202")
            message.channel.send({ embeds: [embed] });
        } catch (err) {
            const errorlogs = client.channels.cache.get(errorChannel)
            errorlogs.send({ content: `Error On Create Text Channel Command!\n\nError:\n\n **${err}**` })
        }
    }
}