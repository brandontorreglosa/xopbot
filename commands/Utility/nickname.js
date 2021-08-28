const Discord = module.require("discord.js");
const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: "nickname",
    permissions: ["MANAGE_NICKNAMES"],
    cooldown: 3,
    description: "Change the Nickname of other Users",
    async execute(client, message, cmd, args, Discord) {
        let mentionMember = message.mentions.members.first();
        let newNickname = args.slice(1).join(' ');
        if (!mentionMember) {
            return message.reply({ content: "**`(prefix)nickname <@user> <nickname>`**" }) //, allowedMentions: { repliedUser: true } });
        }
        if (!newNickname) {
            return message.reply({ content: "**Please Add `<nickname>`**" }) //, allowedMentions: { repliedUser: true } });
        }
        try {
            mentionMember.setNickname(newNickname);
        } catch (error) {
            message.lineReplyNoMention({ content: "**Can't Change Nickname Of This User, Does He Have A Higher Role?**" }) //, allowedMentions: { repliedUser: true } });
        }
        message.lineReplyNoMention({ content: `**Changed Nickname Of ${mentionMember} To ${newNickname}!**` });
    }
}