const Discord = require("discord.js");
module.exports = {
name: 'anal',
permissions: ["SEND_MESSAGES"],
async execute(client, message, cmd, args, Discord) {

    var superagent = require('superagent');

    if (!message.channel.nsfw) return message.channel.send('**This Is Not A NSFW Channel! 🔞**') 

    var lo = new Discord.MessageEmbed()
                .setDescription(`Sending Anal...`)
                .setTimestamp()

    message.channel.send(lo).then(m => {

        superagent.get('https://nekobot.xyz/api/image').query({ type: 'anal'}).end((err, response) => {

            var embed_nsfw = new Discord.MessageEmbed()
                .setDescription(`:underage: **Anal**\n**[Provided To You By The Bot Supporters Of XOPBOT](${response.body.message})**`)
                .setTimestamp()
                .setImage(response.body.message)
                .setFooter('Nice Huh :)')
            
            m.edit(embed_nsfw);
        });
    });
}
}