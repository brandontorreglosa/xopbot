const Discord = require("discord.js");
const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: 'anal',
    cooldown: 3,
    nsfw: true,
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    async execute(client, message, cmd, args, Discord) {

        var superagent = require('superagent');

        if (!message.channel.nsfw) return message.lineReplyNoMention({ content: '**This Is Not A NSFW Channel! 🔞**' })

        superagent.get('https://nekobot.xyz/api/image').query({ type: 'anal' }).end((err, response) => {

            var embed_nsfw = new Discord.MessageEmbed()
                .setColor('#c30202')
                .setDescription(`:underage: **Anal**\n**[Provided To You By The Bot Supporters Of XOPBOT](${response.body.message})**`)
                .setTimestamp()
                .setImage(response.body.message)
                .setFooter('Anal Fucking Is Great! :)')

            message.lineReplyNoMention(embed_nsfw);
        });
    }
}