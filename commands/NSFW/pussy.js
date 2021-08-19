const Discord = require("discord.js");
module.exports = {
    name: 'pussy',
    cooldown: 3,
    nsfw: true,
    aliases: ['vagina'],
    permissions: ["SEND_MESSAGES"],
    async execute(client, message, cmd, args, Discord) {

        var superagent = require('superagent');

        if (!message.channel.nsfw) return message.channel.send({ content: '**This Is Not A NSFW Channel! 🔞**' })

        var lo = new Discord.MessageEmbed()
            .setDescription(`Sending Pussy...`)
            .setTimestamp()

        message.channel.send({ embeds: [lo] }).then(m => {

            superagent.get('https://nekobot.xyz/api/image').query({ type: 'pussy' }).end((err, response) => {

                var embed_nsfw = new Discord.MessageEmbed()
                    .setDescription(`:underage: **Pussy**\n**[Provided To You By The Bot Supporters Of XOPBOT](${response.body.message})**`)
                    .setTimestamp()
                    .setImage(response.body.message)
                    .setFooter('The Best Part Of The Woman Body! :)')
                    .setColor('#c30202')
                m.edit({ embeds: [embed_nsfw] });
            });
        });
    }
}