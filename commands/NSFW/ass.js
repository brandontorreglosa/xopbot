const Discord = require("discord.js");
const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: 'ass',
    cooldown: 3,
    nsfw: true,
    aliases: ['bum', 'butt'],
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    async execute(client, message, cmd, args, Discord) {

        var superagent = require('superagent');

        if (!message.channel.nsfw) return message.lineReplyNoMention({ content: '**This Is Not A NSFW Channel! 🔞**' })

        superagent.get('https://nekobot.xyz/api/image').query({ type: 'ass' }).end((err, response) => {

            var embed_nsfw = new Discord.MessageEmbed()
                .setColor('#c30202')
                .setDescription(`:underage: **Ass**\n**[Provided To You By The Bot Supporters Of XOPBOT](${response.body.message})**`)
                .setTimestamp()
                .setImage(response.body.message)
                .setFooter('Nice Juicy Ass! :)')

            message.lineReplyNoMention(embed_nsfw);
        });
    }
}