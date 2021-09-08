const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: 'addrole',
    cooldown: 5,
    aliases: ['addnewrole'],
    permissions: ["MANAGE_ROLES"],
    clientpermissions: ["MANAGE_ROLES", "SEND_MESSAGES", "EMBED_LINKS"],
    async execute(client, message, cmd, args, Discord) {
        const user = message.mentions.users.first()
        if (!user) {
            const nopr = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#c30202')
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**\`(prefix)addrole <@user> <@role>\`**`)
            return message.lineReplyNoMention(nopr)
        }
        args.shift()
        const roleToGive = message.mentions.roles.first()
        if (!roleToGive) {
            const addroleError2 = new Discord.MessageEmbed()
                .setTimestamp()
                .setDescription(`**No Roles Provided!**`)
                .setColor('#c30202')
            return message.lineReplyNoMention(addroleError2)
        }
        user.roles.add(roleToGive)
        const embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#c30202')
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`**Added: \`${roleToGive}\` To \`${user.username}\`**`)
        message.lineReplyNoMention(embed)


    }
}