const Discord = require("discord.js");
const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: '4k',
    cooldown: 3,
    nsfw: true,
    aliases: ['4kporn', 'porn4k'],
    permissions: ["SEND_MESSAGES"],
    async execute(client, message, cmd, args, Discord) {

        var superagent = require('superagent');

        if (!message.channel.nsfw) return message.lineReplyNoMention({ content: '**This Is Not A NSFW Channel! 🔞**' })

        superagent.get('https://nekobot.xyz/api/image').query({ type: '4k' }).end((err, response) => {

            const embed_nsfw = new Discord.MessageEmbed()
                .setColor('#c30202')
                .setDescription(`:underage: **4K Nudes**\n**[Provided To You By The Bot Supporters Of XOPBOT](${response.body.message})**`)
                .setTimestamp()
                .setImage(response.body.message)
                .setFooter('4k Sluts Amazing! :)')

            message.lineReplyNoMention(embed_nsfw);
        });
    }
}