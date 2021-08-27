const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: 'createembed',
    permissions: ["MANAGE_MESSAGES"],
    aliases: ['embedcreator', 'create-ebed', 'create-embed'],
    cooldown: 10,
    async execute(client, message, cmd, args, Discord) {
        if (!args[0]) {
            return message.lineReplyNoMention({ content: '**Please Do `x!createembed <footermsg> + <title> + <description>` \nYou Must Add The + To Make It Work!**' }) //, allowedMentions: { repliedUser: true } })
        }
        let splitArgs = args.join(' ').split('+');
        const footer = splitArgs[0];
        if (!footer) return message.lineReplyNoMention({ content: '**Please Add `<footermsg>`**' }) //, allowedMentions: { repliedUser: true } })
        const title = splitArgs[1];
        if (!title) return message.lineReplyNoMention({ content: '**Please Add `<title>`**' }) //, allowedMentions: { repliedUser: true }  })
        const description = splitArgs[2];
        if (!description) return message.lineReplyNoMention({ content: '**Please Add `<description>`**' }) //, allowedMentions: { repliedUser: true }  })

        const embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor(`#c30202`)
            .setTitle(`${title}`)
            .setDescription(`${description}`)
            .setFooter(`${footer}`)
        message.lineReplyNoMention(embed)
    }
}