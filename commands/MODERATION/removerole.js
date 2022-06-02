const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
    name: 'removerole',
    cooldown: 5,
    aliases: ['delrole', 'deleterole'],
    permissions: ["MANAGE_ROLES"],
    clientpermissions: ["MANAGE_ROLES", "SEND_MESSAGES", "EMBED_LINKS"],
    async execute(client, message, cmd, args, Discord) {
        const target = message.mentions.members.first();
        const usertarget = message.guilds.members.cache.get(target.id);
        if (!target) {
            const nopr = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`(prefix)removerole <@user> <@role>\`**`)
            return message.lineReplyNoMention({ embed: nopr })
        }
        const rrole = message.mentions.roles.first();
        const fetchrole = args[1];
        if (!rrole) {
            const norrspec = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**I Was Unable To Find The Role \`${fetchrole}\`!**`)
            return message.lineReplyNoMention({ embed: norrspec })
        }
        const embed = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**Removed: \`${rrole}\` From \`${target.username}\`!**`)
        await message.lineReplyNoMention({ embed: embed })
        usertarget.roles.remove(rrole.id)
    }
}