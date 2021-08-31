const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: "userinfo",
    permissions: ["SEND_MESSAGES"],
    aliases: ['usi', 'ui'],
    cooldown: 3,
    async execute(client, message, cmd, args, Discord) {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        let status;
        switch (user.presence.status) {
            case "online":
                status = "🟢 Online";
                break;
            case "dnd":
                status = "🔴 Dnd";
                break;
            case "idle":
                status = "🟡 Idle";
                break;
            case "offline":
                status = "⚫ Offline";
                break;
        }

        const embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setTitle(`${user.user.username}\`s User Information`)
            .setColor('#c30202')
            .setDescription(`**ID:** \n \`${user.id}\` \n**Name:** \n \`${user.user.username}\` \n**Discriminator:** \n \`#${user.user.discriminator}\` \n**User Roles:** \n${user.roles.cache.map(role => role.toString()).join(" ,")} \n**Joined Date:** \n \`${user.joinedAt.toLocaleDateString("en-us")}\` \n**Creation Date:** \n \`${user.user.createdAt.toLocaleDateString("en-us")}\` \n**Current Status:** \n \`${status}\` `)
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
        await message.lineReplyNoMention(embed)
    }
}