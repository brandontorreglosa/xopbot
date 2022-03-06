const lineReplyNoMention = require('discord-reply');
const os = require('os')
const moment = require('moment')
const color = process.env.Color;
module.exports = {
    name: "botinfo",
    aliases: ['bi'],
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    async execute(client, message, cmd, args, Discord) {
        let status;
        switch (client.presence.status) {
            case "online":
                status = "😃 Online";
                break;
            case "dnd":
                status = "👿 Do Not Disturb";
                break;
            case "idle":
                status = "😒 Idle";
                break;
            case "offline":
                status = "😴 Offline";
                break;
        }
        const embed = new Discord.MessageEmbed().setTimestamp().setAuthor(`Bot Information`, client.user.displayAvatarURL({ dynamic: true })).setColor(`${color}`).setDescription(`**ID:** \`831824859066925087\` \n**DEV:** \`👑HACKERPROᵈᵉᵛ#1498\` \n**Name:** \`XOPBOT\` \n**Prefix:** \`x!\` \n**Status:** \`${status}\` \n**Version:** \`60.0.0\` \n**Users:** \`${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)}\` \n**Servers:** \`${client.guilds.cache.size}\` \n**Channels:** \`${client.channels.cache.size}\` \n**Commands:** \`200+\` \n**Categories:** \`18\` \n**Discord.JS Version:** \`12.5.3\` \n**Creation Date:** \`${moment(client.user.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss A")}\` `).setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
        await message.lineReplyNoMention({ embed: embed })
    }
}