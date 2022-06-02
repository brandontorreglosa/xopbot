const Discord = module.require("discord.js");
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
    name: "channellock",
    cooldown: 10,
    permissions: ["ADMINISTRATOR"],
    clientpermissions: ["ADMINISTRATOR"],
    description: "Locks a Channel",
    async execute(client, message, cmd, args, Discord) {
        const user = message.mentions.users.first()
        const reason = args.slice(0).join(" ")
        if (!reason) {
            const nopr = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`(prefix)channellock <reason>\`**`)
            return message.lineReplyNoMention({ embed: nopr })
        }
        message.channel.overwritePermissions([{ id: message.guild.id, deny: ['SEND_MESSAGES'], }, ]);
        const embed = new Discord.MessageEmbed().setTimestamp().setAuthor(`Channel Updates!`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**🔒 ${message.channel} Has Been Locked By ${message.author.username}! \n${reason}**`).setColor(`${color}`)
        await message.lineReplyNoMention({ embed: embed });
    }
}