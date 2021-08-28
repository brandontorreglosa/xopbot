const Discord = require("discord.js");
const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: 'gonewild',
    cooldown: 3,
    nsfw: true,
    permissions: ["SEND_MESSAGES"],
    async execute(client, message, cmd, args, Discord) {

        var superagent = require('superagent');

        if (!message.channel.nsfw) return message.lineReplyNoMention({ content: '**This Is Not A NSFW Channel! 🔞**' })

        superagent.get('https://nekobot.xyz/api/image').query({ type: 'gonewild' }).end((err, response) => {

            var embed_nsfw = new Discord.MessageEmbed()
                .setColor('#c30202')
                .setDescription(`:underage: **Gonewild Porn**\n**[Provided To You By The Bot Supporters Of XOPBOT](${response.body.message})**`)
                .setTimestamp()
                .setImage(response.body.message)
                .setFooter('Hoes Went Crazy! :)')

            message.lineReplyNoMention(embed_nsfw);
        });
    }
}