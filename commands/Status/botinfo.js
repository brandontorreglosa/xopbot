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
            .setDescription(`**ID:** \`${client.id}\` \n**DEV:** \`👑HACKERPROᵈᵉᵛ#1498\` \n**Name:** \`XOPBOT\` \n**Prefix:** \`x!\` \n**Status:** \`${status}\` \n**Version:** \`60.2.0\` \n**Users:** \`${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)}\` \n**Servers:** \`${client.guilds.cache.size}\` \n**Channels:** ${client.channels.cache.size} \n**Commands:** \`180+\` \n**Categories:** \`18\` \n**Creation Date:** \`${client.user.createdAt}\` `)
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
        await message.lineReplyNoMention(embed)
    }
}