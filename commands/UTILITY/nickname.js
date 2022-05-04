const Discord = module.require("discord.js");
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
    name: "nickname",
    permissions: ["MANAGE_NICKNAMES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS", "MANAGE_NICKNAMES"],
    cooldown: 10,
    description: "Change the Nickname of other Users",
    async execute(client, message, cmd, args, Discord) {
        const mentionMember = message.mentions.members.first();
        const newNickname = args.slice(1).join(' ');
        if (!mentionMember) {
            const nopr = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`(prefix)nickname <@user> <nickname>\`**`)
            return message.lineReplyNoMention({ embed: nopr })
        }
        if (!newNickname) {
            const erispec = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**Please Add The Nickname!**`)
            return message.lineReplyNoMention({ embed: erispec })
        }
        try {
            mentionMember.setNickname(newNickname);
        } catch (error) {
            message.lineReplyNoMention({ content: "**Can't Change Nickname Of This User, Does He Have A Higher Role?**" }) //, allowedMentions: { repliedUser: true } });
        }
        const success = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**Changed Nickname Of \`${mentionMember.username}\` To \`${newNickname}\`!**`)
        message.lineReplyNoMention({ embed: success })
    }
}