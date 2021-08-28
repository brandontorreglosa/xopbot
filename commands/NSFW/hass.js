const Discord = require("discord.js");
const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: 'hass',
    cooldown: 3,
    nsfw: true,
    aliases: ['hbum', 'hbutt'],
    permissions: ["SEND_MESSAGES"],
    async execute(client, message, cmd, args, Discord) {

        var superagent = require('superagent');

        if (!message.channel.nsfw) return message.lineReplyNoMention({ content: '**This Is Not A NSFW Channel! 🔞**' })

        superagent.get('https://nekobot.xyz/api/image').query({ type: 'hass' }).end((err, response) => {

            var embed_nsfw = new Discord.MessageEmbed()
                .setDescription(`:underage: **Hentai Ass**\n**[Provided To You By The Bot Supporters Of XOPBOT](${response.body.message})**`)
                .setTimestamp()
                .setImage(response.body.message)
                .setFooter('Nice Huh :)')
                .setColor('#c30202')
            message.lineReplyNoMention(embed_nsfw);
        });
    }
}