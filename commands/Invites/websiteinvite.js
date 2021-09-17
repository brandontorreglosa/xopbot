const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
    name: 'websiteinvite',
    cooldown: 3,
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    aliases: ['winv', 'webinvite', 'wi'],
    description: "Embeds!",
    async execute(client, message, cmd, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setTimestamp()
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
            .setColor(`${color}`)
            .setTitle('Bot Website Invite')
            .setURL('https://xopbot-gg.glitch.me/')
            .setDescription('**This Is The Bot Website Invite Link**')
            .addFields(
                { name: 'Bot Website Invite Link', value: '[Bot Website](https://xopbot-gg.glitch.me/)' }

            )
            .setFooter(`Requested By: ${message.author.tag}`, message.author.displayAvatarURL())


        message.lineReplyNoMention(newEmbed);
    }

}
