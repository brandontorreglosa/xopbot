module.exports = {
    name: 'removerole',
    aliases: ['delrole', 'deleterole'],
    permissions: ["MANAGE_ROLES"],
    async execute(client, message, cmd, args, Discord)  {
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('You do not have permission.')
        const target = message.mentions.members.first() 
        if(!target) return message.channel.send('**No Member Specified!**')
        const role = message.mentions.roles.first()
        if(!role) return message.channel.send('**No Role Has Been Specified!**') 
        await target.roles.remove(role)
        message.channel.send(`${target.user.username} Role: ${role} Was Removed By ${message.author.username}`) 
    }
}