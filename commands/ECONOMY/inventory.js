const inventory = require("../../models/inventory");
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
const logChannel = process.env.logChannel;
module.exports = {
    name: 'inventory',
    cooldown: 15,
    aliases: ['inv'],
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES"],
    description: "Inventory Command!",
    async execute(client, message, cmd, args, Discord) {
        const loggerchannel = client.channels.cache.get(logChannel);
        const nodeta = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**Your Inventory Is Currently Empty!**`)
        inventory.findOne({ Guild: message.guild.id, User: message.author.id }, async (err, data) => {
            if (!data) return message.lineReplyNoMention({ embed: nodeta })
            const mappedData = Object.keys(data.Inventory).map((key) => {
                const text = key; text.replace("hunting-gun", "🔫")
                return `**(${data.Inventory[key]})${key}**`
            }).join(", ");
            message.lineReplyNoMention({ content: mappedData })
            loggerchannel.send({ content: `**${message.author.username}#${message.author.discriminator} used the command ${this.name} in ${message.guild.name}**` })
        })
    }
}