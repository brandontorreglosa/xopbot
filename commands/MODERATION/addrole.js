const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
    name: 'addrole',
    cooldown: 5,
    aliases: ['addnewrole'],
    permissions: ["MANAGE_ROLES"],
    clientpermissions: ["MANAGE_ROLES", "SEND_MESSAGES", "EMBED_LINKS"],
    async execute(client, message, cmd, args, Discord) {
        const user = message.mentions.users.first()
        const usertarget = message.guilds.members.cache.get(user.id);
        if (!user) {
            const nopr = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`(prefix)addrole <@user> <@role>\`**`)
            return message.lineReplyNoMention({ embed: nopr })
        }
        args.shift()
        const roleToGive = message.mentions.roles.first()
        if (!roleToGive) {
            const addroleError2 = new Discord.MessageEmbed().setTimestamp().setDescription(`**No Roles Provided!**`).setColor(`${color}`)
            return message.lineReplyNoMention({ embed: addroleError2 })
        }
        usertarget.roles.add(roleToGive)
        const embed = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**Added: \`${roleToGive}\` To \`${user.username}\`**`)
        message.lineReplyNoMention({ embed: embed })
    }
}