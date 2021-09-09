const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: 'nuke',
    cooldown: 15,
    aliases: ['clearall'],
    permissions: ['MANAGE_MESSAGES', 'MANAGE_CHANNELS'],
    clientpermissions: ["MANAGE_MESSAGES", "MANAGE_CHANNELS", "SEND_MESSAGES", "EMBED_LINKS"],
    description: 'Removes all messages in the channel (Deletes the old channel and makes a copy of it with permissions intact)',
    async execute(client, message, cmd, args, Discord) {
        const user = message.mentions.users.first() || message.author;
        const nopr = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#c30202')
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`**This Will Clear All Messages In This Channel And May Cause Conflict For Bots Using ID To Track Channels. Continue?**`)
        message.lineReplyNoMention(nopr)

        const filter = _message => message.author.id === _message.author.id && ['y', 'n', 'yes', 'no'].includes(_message.content.toLowerCase());
        const options = { max: 1, time: 30000, errors: ['time'] };
        const proceed = await message.channel.awaitMessages(filter, options)
            .then(collected => ['y', 'yes'].includes(collected.first().content.toLowerCase()) ? true : false)
            .catch(() => false);

        if (!proceed) {
            const nonukeplz = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#c30202')
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**You Cancelled The Nuke Command Successfully!**`)
            return message.lineReplyNoMention(nonukeplz)
        };

        const embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#c30202')
            .setTitle('Incoming Nuke!')
            .setDescription(`**The Nuke Has Been Deployed, Say Goodbye To #${message.channel.name} \nTakes Up To 10 Seconds Max. To Clear Channel!**`)
            .setFooter(`Was Deployed By ${message.author.username} 😱`)
        return message.lineReplyNoMention(embed)
            .then(() => setTimeout(() => message.channel.clone()
                .then(() => message.channel.delete().catch(() => null)), 10000))
    }
};