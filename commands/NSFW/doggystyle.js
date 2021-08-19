const discord = require("discord.js");
const got = require("got"); //MAKE SURE TO INSTALL THE PACKAGE "GOT" ELSE THE CODE WOULD NOT WORK


module.exports = {
      name: "doggystyle",
      cooldown: 3,
      nsfw: true,
      aliases: ['dogstyle'],
      permissions: ["SEND_MESSAGES"],
      category: "NSFW",
      description: "Sends random doggystyle",
      usage: "[command]",
      async execute(client, message, cmd, args, Discord) {

            if (!message.channel.nsfw) return message.channel.send({ content: '**This Is Not A NSFW Channel! 🔞**' })

            var lo = new Discord.MessageEmbed()
                  .setDescription(`Sending Doggystyle...`)
                  .setTimestamp()

            message.channel.send({ embeds: [lo] }).then(m => {
                  got('https://www.reddit.com/r/DoggyStyle/random.json').then(response => {
                        let content = JSON.parse(response.body);
                        var title = content[0].data.children[0].data.title;
                        var amazeme = content[0].data.children[0].data.url;
                        let wow = new discord.MessageEmbed()
                              .setTimestamp()
                              .setDescription(`:underage: **Doggy Style**\n**[Provided To You By The Bot Supporters Of XOPBOT](${amazeme})**`)
                              .setImage(amazeme)
                              .setFooter(`I Love When They Do This! :)`)
                              .setColor('#c30202')
                        m.edit({ embeds: [wow] })
                  })
            })
      }
}
