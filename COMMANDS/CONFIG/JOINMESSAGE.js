const Discord = require("discord.js")
const JoinMsgSchema = require("../../MODELS/JOIN-MSG");
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
const gcolor = process.env.Gcolor;
const rcolor = process.env.Rcolor;
module.exports = {
    name: "joinmessage",
    cooldown: 10,
    permissions: ["MANAGE_CHANNELS"],
    clientpermissions: ["MANAGE_CHANNELS", "SEND_MESSAGES", "EMBED_LINKS"],
    description: "Change the welcome message per server!",
    aliases: ["joinmsg", "welcomemsg", "jmsg"],
    async execute(client, message, cmd, args, Discord) {
        const text = args.join(" ");
        if (!args[0]) {
            const nojcmsg = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription('**`(prefix)joinmessage <text/off>`**')
            return message.lineReplyNoMention({ embed: nojcmsg })
        }
        if (text !== "off") {
            const data = await JoinMsgSchema.findOne({ GuildID: message.guild.id, }); if (data) {
                await JoinMsgSchema.findOneAndRemove({ GuildID: message.guild.id, }); let newData = new JoinMsgSchema({ JoinMsg: args.join(" "), GuildID: message.guild.id, }); newData.save(); const jcmsg1 = new Discord.MessageEmbed().setTimestamp().setColor(`${gcolor}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**Join Message Set To \`${newData.JoinMsg}\`!**`)
                message.lineReplyNoMention({ embed: jcmsg1 })
            } else if (!data) {
                let newData = new JoinMsgSchema({ JoinMsg: args.join(" "), GuildID: message.guild.id, }); newData.save(); const jcmsg2 = new Discord.MessageEmbed().setTimestamp().setColor(`${gcolor}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**Join Message Set To \`${newData.JoinMsg}\`!**`)
                message.lineReplyNoMention({ embed: jcmsg2 })
            }
        } else if (text === "off") {
            const data2 = await JoinMsgSchema.findOne({ GuildID: message.guild.id, }); if (data2) {
                await JoinMsgSchema.findOneAndRemove({ GuildID: message.guild.id, }); const jcdis = new Discord.MessageEmbed().setTimestamp().setColor(`${rcolor}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription('**Join Message Has Been `🔴 Disabled`!**')
                return message.lineReplyNoMention({ embed: jcdis })
            } else if (!data2) {
                const jcnoset = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription('**Join Channel Not Even Setup Bot!**')
                message.lineReplyNoMention({ embed: jcnoset })
            }
        }
    },
};