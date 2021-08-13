const Discord = module.require("discord.js");

module.exports = {
    name: "nickname",
    permissions: ["MANAGE_NICKNAMES"],
    cooldown: 3,
    description: "Change the Nickname of other Users",
    async execute(client, message, cmd, args, Discord) {
        let mentionMember = message.mentions.members.first();
        let newNickname = args.slice(1).join(' ');
        if (!mentionMember) {
            return message.reply({ content: "**Mention The User You Want To Change The Nickname!**", allowedMentions: { repliedUser: true } });
        }
        if (!newNickname) {
            return message.reply({ content: "**Please Input The New Nickname For The User You Mentioned**", allowedMentions: { repliedUser: true } });
        }
        try {
            mentionMember.setNickname(newNickname);
        } catch (error) {
            message.reply({ content: "**Can't Change Nickname Of This User, Does He Have A Higher Role?**", allowedMentions: { repliedUser: true } });
        }
        message.channel.send({ content: `**Changed Nickname Of ${mentionMember} To ${newNickname}!**` });
    }
}