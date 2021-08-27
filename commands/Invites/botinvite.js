const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: 'botinvite',
    permissions: ["SEND_MESSAGES"],
    cooldown: 3,
    aliases: ['binv'],
    description: "Embeds!",
    execute(client, message, cmd, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setTimestamp()
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
            .setColor('#c30202')
            .setTitle('Bot Invite')
            .setURL('https://discord.gg/Sy38Uysm4G')
            .setDescription('**This Is The Bot Server Invite Link**')
            .addFields(
                { name: 'Discord Invite Link', value: '[Bot Invite](https://discord.com/oauth2/authorize?client_id=831824859066925087&scope=bot&permissions=4294967295)' }
            )
            .setFooter('You Can Also Join Our Support Server If U Click The Bot Invite!');

        message.lineReplyNoMention(newEmbed);
    }

}