const Discord = require("discord.js");
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
    name: 'gonewild',
    cooldown: 3,
    nsfw: true,
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    async execute(client, message, cmd, args, Discord) {

        var superagent = require('superagent');

        if (!message.channel.nsfw) return message.lineReplyNoMention({ content: '**This Is Not A NSFW Channel! 🔞**' })

        superagent.get('https://nekobot.xyz/api/image').query({ type: 'gonewild' }).end((err, response) => {

            var embed_nsfw = new Discord.MessageEmbed()
                .setColor(`${color}`)
                .setDescription(`:underage: **Gonewild Porn**\n**[Provided To You By The Bot Supporters Of XOPBOT](${response.body.message})**`)
                .setTimestamp()
                .setImage(response.body.message)
                .setFooter('Hoes Went Crazy! :)')

            message.lineReplyNoMention(embed_nsfw);
        });
    }
}