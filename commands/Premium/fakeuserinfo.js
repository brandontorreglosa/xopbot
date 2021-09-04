const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: 'fakeuserinfo',
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    aliases: ['fusi', 'fui'],
    cooldown: 2,
    premium: true,
    description: 'get a users info',
    async execute(client, message, cmd, args, Discord) {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        const randomNumber2 = Math.floor(Math.random() * 300) + 1;
        const randomNumber3 = Math.floor(Math.random() * 50) + 1;
        const randomNumber4 = Math.floor(Math.random() * 15) + 1;
        const randomNumber5 = Math.floor(Math.random() * 300) + 1;
        const randomNumber6 = Math.floor(Math.random() * 50) + 1;
        const randomNumber7 = Math.floor(Math.random() * 100) + 1;
        const newEmbed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#c30202')
            .setTitle('Fake User Info')
            .setDescription('**Get A Fake Users Information**')
            .addFields(
                { name: 'Coolness', value: `${randomNumber}%` },
                { name: 'Gaming Skills', value: `${randomNumber2}%` },
                { name: 'Developing Skills', value: `${randomNumber5}%` },
                { name: 'Music Skills', value: `${randomNumber6}%` },
                { name: 'Party Mate', value: `${randomNumber7}%` },
                { name: 'Richness', value: `${randomNumber3}$ A Month` },
                { name: 'Sleeping', value: `${randomNumber4} Hours` }
            )
            .setFooter('**Bot Developer @👑HACKERPROᵈᵉᵛ#1498!**');

        message.lineReplyNoMention(newEmbed);
    }
}