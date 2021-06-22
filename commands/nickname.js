const Discord = module.require("discord.js");

module.exports = {
    name: "nickname",
    permissions: ["MANAGE_NICKNAMES"],
    description: "Change the Nickname of other Users",
    async execute(client, message, cmd, args, Discord) {
        if (!message.guild.me.hasPermission('MANAGE_NICKNAMES')) {
        return message.channel.send('**XOPBOT Don\'t Have Permission To Change Nicknames!**')
        }
        let mentionMember = message.mentions.members.first();
        let newNickname = args.slice(1).join(' ');
        if(!mentionMember) {
        return message.reply("**Mention The User You Want To Change The Nickname!**");
        }
        if(!newNickname) {
        return message.reply("**Please Input The New Nickname For The User You Mentioned**");
        }
        try {
            mentionMember.setNickname(newNickname);
        } catch (error) {
            message.reply("Can't Change Nickname Of This User, Does He Have A Higher Role?");
        }
        message.channel.send(`**Changed Nickname Of ${mentionMember} To ${newNickname}!**`);
    }
}