const Discord = require("discord.js")
const antiprefixSchema = require("../../MODELS/ANTI-PREFIX");
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
const gcolor = process.env.Gcolor;
const rcolor = process.env.Rcolor;
module.exports = {
    name: "antiprefix",
    cooldown: 15,
    permissions: ["ADMINISTRATOR"],
    clientpermissions: ["ADMINISTRATOR"],
    description: "Setup antiprefix per server!",
    async execute(client, message, cmd, args, Discord) {
        if (!args[0]) {
            const nospec = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription('**`(prefix)antiprefix <on/off>`**')
            return message.lineReplyNoMention({ embed: nospec })
        }
        if (args[0] === "On" || args[0] === "on") {
            const data = await antiprefixSchema.findOne({ GuildID: message.guild.id, }); if (data) {
                await antiprefixSchema.findOneAndRemove({ GuildID: message.guild.id, }); const on1 = new Discord.MessageEmbed().setTimestamp().setColor(`${gcolor}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription('**Antiprefix Is Now `🟢 Enabled`!**')
                message.lineReplyNoMention({ embed: on1 }); let newData = new antiprefixSchema({ GuildID: message.guild.id, }); newData.save();
            } else if (!data) {
                const on2 = new Discord.MessageEmbed().setTimestamp().setColor(`${gcolor}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription('**Antiprefix Is Now `🟢 Enabled`!**')
                message.lineReplyNoMention({ embed: on2 }); let newData = new antiprefixSchema({ GuildID: message.guild.id, }); newData.save();
            }
        } else if (args[0] === "Off" || args[0] === "off") {
            const data2 = await antiprefixSchema.findOne({ GuildID: message.guild.id, }); if (data2) {
                await antiprefixSchema.findOneAndRemove({ GuildID: message.guild.id, }); const off1 = new Discord.MessageEmbed().setTimestamp().setColor(`${rcolor}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription('**Antiprefix Is Now `🔴 Disabled`!**')
                return message.lineReplyNoMention({ embed: off1 });
            } else if (!data2) {
                const noset = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription('**Antiprefix Not Even Setup Bot!**')
                return message.lineReplyNoMention({ embed: noset });
            }
        }
    }
}