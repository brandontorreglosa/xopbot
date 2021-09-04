const errorChannel = process.env.errorChannel;
const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: 'rickroll',
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    cooldown: 10,
    description: 'get Rickrolled',
    async execute(client, message, cmd, args, Discord) {
        try {
            const user = message.mentions.users.first()
            if (!args[0]) {
                return message.lineReplyNoMention({ content: '**`(prefix)rickroll <@user>`**' }) //, allowedMentions: { repliedUser: true } })
            }
            if (message.mentions.users.first().bot) {
                return message.lineReplyNoMention({ content: '**You Can Not Rickroll Bot`s! They Wont See It 😢**' }) //, allowedMentions: { repliedUser: true } })
            }
            const embed = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#c30202')
                .setTitle(`OMG! You Just Got Rickrolled By ${message.author.username}`)
                .setImage('https://media1.tenor.com/images/23aeaaa34afd591deee6c163c96cb0ee/tenor.gif?itemid=7220603')
                .setFooter('You Just Got Rickrolled 😆')
            user.send(embed)
                .catch(() => message.lineReplyNoMention({ content: "**That User Could Not Be Rickrolled! 😭**" }))
                .then(() => message.lineReplyNoMention({ content: `**I Have Rickrolled ${user.tag}! 😉**` }));
        } catch (err) {
            const errorlogs = client.channels.cache.get(errorChannel);
            message.lineReplyNoMention({ content: "**Looks Like An Error Has Occured!**" });
            errorlogs.send({ content: `**Error On Rickroll Command!\n\nError:\n\n ${err}**` })
        }
    }
}