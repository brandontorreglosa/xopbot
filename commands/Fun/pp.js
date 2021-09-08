const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: 'pp',
    cooldown: 3,
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    aliases: ['ppsize'],
    async execute(client, message, cmd, args, Discord) {

        const pp = [
            '8D',
            '8=D',
            '8==D',
            '8===D',
            '8====D',
            '8=====D',
            '8======D',
            '8=======D',
            '8========D',
            '8=========D',
            '8==========D',
            '8===========D',
            '8============D',
            '8=============D',
            '8==============D',
            '8===============D',
            '8================D',
            '8=================D',
            '8==================D',
            '8===================D',
            '8====================D',
            '8=====================D',
            '8======================D',
            '8=======================D',
            '8========================D',
            '8=========================D'
        ];

        const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.member;

        if (!user)
            return message.lineReplyNoMention({ content: `**Mention Someone Or Provide Their User ID To Get Their PP Size!**` }) //, allowedMentions: { repliedUser: true } })

        const embed = new Discord.MessageEmbed()
            .setTitle('PP Size Detector')
            .setDescription(`${user.user.username}'s PP Is This Big\n\`\`\`${pp[Math.floor(Math.random() * pp.length)]}\`\`\``)
            .setFooter(`Requested By ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor("#c30202");
        await message.lineReplyNoMention(embed)
    }
}