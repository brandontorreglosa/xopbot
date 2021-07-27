const Discord = require("discord.js");
module.exports = {
    name: 'gonewild',
    cooldown: 3,
    nsfw: true,
    permissions: ["SEND_MESSAGES"],
    async execute(client, message, cmd, args, Discord) {

        var superagent = require('superagent');

        if (!message.channel.nsfw) return message.channel.send('**This Is Not A NSFW Channel! 🔞**')

        var lo = new Discord.MessageEmbed()
            .setDescription(`Sending Gonewild...`)
            .setTimestamp()

        message.channel.send(lo).then(m => {

            superagent.get('https://nekobot.xyz/api/image').query({ type: 'gonewild' }).end((err, response) => {

                var embed_nsfw = new Discord.MessageEmbed()
                    .setColor('#c30202')
                    .setDescription(`:underage: **Gonewild Porn**\n**[Provided To You By The Bot Supporters Of XOPBOT](${response.body.message})**`)
                    .setTimestamp()
                    .setImage(response.body.message)
                    .setFooter('Hoes Went Crazy! :)')

                m.edit(embed_nsfw);
            });
        });
    }
}