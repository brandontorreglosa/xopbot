const discord = require("discord.js");
const got = require("got"); //MAKE SURE TO INSTALL THE PACKAGE "GOT" ELSE THE CODE WOULD NOT WORK


module.exports = {
      name: "bikinis",
      cooldown: 3,
      nsfw: true,
      aliases: ['bikini'],
      permissions: ["SEND_MESSAGES"],
      category: "NSFW",
      description: "Sends random bigboobs",
      usage: "[command]",
      async execute(client, message, cmd, args, Discord) {

            if (!message.channel.nsfw) return message.channel.send({ content: '**This Is Not A NSFW Channel! 🔞**' })

            var lo = new Discord.MessageEmbed()
                  .setDescription(`Sending Bikinis...`)
                  .setTimestamp()

            message.channel.send({ embeds: [lo] }).then(m => {
                  got('https://www.reddit.com/r/bikinis/random.json').then(response => {
                        let content = JSON.parse(response.body);
                        var title = content[0].data.children[0].data.title;
                        var amazeme = content[0].data.children[0].data.url;
                        let wow = new discord.MessageEmbed()
                              .setTimestamp()
                              .setDescription(`:underage: **Bikinis**\n**[Provided To You By The Bot Supporters Of XOPBOT](${amazeme})**`)
                              .setImage(amazeme)
                              .setFooter(`That Bikini Is So Sexy On You! :)`)
                              .setColor('#c30202')
                        m.edit({ embeds: [wow] })
                  })
            })
      }
}
