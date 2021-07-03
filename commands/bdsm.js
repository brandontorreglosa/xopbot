const Discord = require("discord.js");
const akaneko = require('akaneko');
module.exports = {
name: 'bdsm',
permissions: ["SEND_MESSAGES"],
async execute(client, message, cmd, args, Discord) {

    if (!message.channel.nsfw) return message.channel.send('**This Is Not A NSFW Channel! 🔞**') 

    var lo = new Discord.MessageEmbed()
                .setDescription(`Sending BDSM...`)
                .setTimestamp()

    message.channel.send(lo).then(m => {
        let bdsm = await akaneko.nsfw.bdsm();
            var embed_nsfw = new Discord.MessageEmbed()
                embed.setDescription(`:underage: **BDSM**\n**[Provided To You By The Bot Supporters Of XOPBOT](${bdsm})**`)
                .setTimestamp()
                .setFooter('Nice Huh :)')
                .setImage(`${bdsm}`)
            
            m.edit(embed_nsfw);
        });
}
}