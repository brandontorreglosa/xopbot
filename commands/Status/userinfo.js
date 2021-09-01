const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: "userinfo",
    permissions: ["SEND_MESSAGES"],
    aliases: ['usi', 'ui'],
    cooldown: 3,
    async execute(client, message, cmd, args, Discord) {
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

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
            .setAuthor(`${user.user.username}\`s User Information`, user.user.displayAvatarURL({ dynamic: true }))
            .setColor('#c30202')
            .setDescription(`**ID:** \`${user.id}\` \n**Name:** \`${user.user.username}\` \n**Discriminator:** \`#${user.user.discriminator}\` \n**User Status:** \`${status}\` \n**User Roles:** ${user.roles.cache.map(role => role.toString()).join(" ,")} \n**Joined Date:** \`${user.joinedAt.toLocaleDateString("en-us")}\` \n**Creation Date:** \`${user.user.createdAt.toLocaleDateString("en-us")}\` `)
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
        await message.lineReplyNoMention(embed)
    }
}