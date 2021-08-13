const Discord = require("discord.js");
module.exports = {
    name: '4k',
    cooldown: 3,
    nsfw: true,
    aliases: ['4kporn', 'porn4k'],
    permissions: ["SEND_MESSAGES"],
    async execute(client, message, cmd, args, Discord) {

        var superagent = require('superagent');

        if (!message.channel.nsfw) return message.channel.send({ content: '**This Is Not A NSFW Channel! 🔞**' })

        var lo = new Discord.MessageEmbed()
            .setDescription(`Sending 4k...`)
            .setTimestamp()

        message.channel.send({ embeds: [lo] }).then(m => {

            superagent.get('https://nekobot.xyz/api/image').query({ type: '4k' }).end((err, response) => {

                var embed_nsfw = new Discord.MessageEmbed()
                    .setColor('#c30202')
                    .setDescription(`:underage: **4K Nudes**\n**[Provided To You By The Bot Supporters Of XOPBOT](${response.body.message})**`)
                    .setTimestamp()
                    .setImage(response.body.message)
                    .setFooter('4k Sluts Amazing! :)')

                m.edit({ embeds: [embed_nsfw] });
            });
        });
    }
}