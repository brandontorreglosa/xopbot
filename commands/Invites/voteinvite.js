const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
    name: 'voteinvite',
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    aliases: ['vinv', 'voin'],
    description: "Embeds!",
    async execute(client, message, cmd, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setTimestamp()
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
            .setColor(`${color}`)
            .setTitle('Vote Invite')
            .setURL('https://top.gg/bot/831824859066925087')
            .setDescription('**Love XOPBOT? 😍 Well Then! \nYou Can Vote Down Here ⤵**')
            .addFields(
                { name: 'Vote Invite Link', value: '[Vote Here](https://top.gg/bot/831824859066925087)' }

            )
            .setFooter(`Requested By: ${message.author.tag}`, message.author.displayAvatarURL())


        message.lineReplyNoMention(newEmbed);
    }

}
