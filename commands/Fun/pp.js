const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
    name: 'pp',
    cooldown: 5,
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
            '8=========================D',
            '8==========================D',
            '8===========================D',
            '8============================D',
            '8=============================D',
            '8==============================D',
            '8===============================D'
        ];

        const user = message.mentions.users.first() || message.author;

        if (!user) {
            const errnospec = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor(`${color}`)
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription('**The User Was Not Found Please Try Again!**')
            return message.lineReplyNoMention(errnospec)
        }

        const embed = new Discord.MessageEmbed()
            .setTitle('PP Size Detector')
            .setDescription(`\`${user.username}\`'s PP Is This Big\n\`\`\`${pp[Math.floor(Math.random() * pp.length)]}\`\`\``)
            .setFooter(`Requested By ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor(`${color}`);
        await message.lineReplyNoMention(embed)
    }
}