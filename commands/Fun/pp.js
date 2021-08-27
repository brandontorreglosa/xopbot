const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: 'pp',
    cooldown: 3,
    permissions: ["SEND_MESSAGES"],
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

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        if (!member)
            return message.lineReplyNoMention({ content: `***Mention Someone Or Provide Their User ID To Get Their PP Size!***`}) //, allowedMentions: { repliedUser: true } })

        const embed = new Discord.MessageEmbed()
            .setTitle('PP Size Detector')
            .setDescription(`${member.displayName}'s PP Is This Big\n\`\`\`${pp[Math.floor(Math.random() * pp.length)]}\`\`\``)
            .setFooter(`Requested By ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor(member.displayHexColor);

        await message.lineReplyNoMention(embed)
    }
}