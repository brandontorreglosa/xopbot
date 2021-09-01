const lineReplyNoMention = require('discord-reply');
const os = require('os')

module.exports = {
    name: "botinfo",
    aliases: ['bi'],
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    async execute(client, message, cmd, args, Discord) {

        let status;
        switch (client.presence.status) {
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
            //.setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
            .setAuthor(`Bot Information`, client.user.displayAvatarURL({ dynamic: true }))
            .setColor('#c30202')
            .setDescription(`**ID:** \n \`${client.id}\` \n**DEV:** \n \`👑HACKERPROᵈᵉᵛ#1498\` \n**Name:** \n \`XOPBOT\` \n**Prefix:** \n \`x!\` \n**Status:** \n \`${status}\` \n**Version:** \n \`60.2.0\` \n**Users:** \n \`${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)}\` \n**Servers:** \n \`${client.guilds.cache.size}\` \n**Categories:** \n \`18\` \n**Commands:** \n \`180+\` \n**Creation Date:** \n \`${client.user.createdAt}\` `)
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
        await message.lineReplyNoMention(embed)
    }
}