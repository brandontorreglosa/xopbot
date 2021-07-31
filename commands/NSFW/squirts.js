const discord = require("discord.js");
const got = require("got"); //MAKE SURE TO INSTALL THE PACKAGE "GOT" ELSE THE CODE WOULD NOT WORK


module.exports = {
      name: "squirts",
      cooldown: 3,
      nsfw: true,
      aliases: ['squirtinggirls', 'girlsquirts', 'squirting'],
      permissions: ["SEND_MESSAGES"],
      category: "NSFW",
      description: "Sends random bigboobs",
      usage: "[command]",
      async execute(client, message, cmd, args, Discord) {

            if (!message.channel.nsfw) return message.channel.send('**This Is Not A NSFW Channel! 🔞**')

            var lo = new Discord.MessageEmbed()
                  .setDescription(`Sending Squirts...`)
                  .setTimestamp()

            message.channel.send(lo).then(m => {
                  got('https://www.reddit.com/r/squirting/random.json').then(response => {
                        let content = JSON.parse(response.body);
                        var title = content[0].data.children[0].data.title;
                        var amazeme = content[0].data.children[0].data.url;
                        let wow = new discord.MessageEmbed()
                              .setTimestamp()
                              .setDescription(`:underage: **Squirts**\n**[Provided To You By The Bot Supporters Of XOPBOT](${amazeme})**`)
                              .setImage(amazeme)
                              .setFooter(`Squirt Some Liquid Hoe! :)`)
                              .setColor('#c30202')
                        m.edit(wow)
                  })
            })
      }
}
