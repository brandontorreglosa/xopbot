const discord = require("discord.js");
const got = require("got"); //MAKE SURE TO INSTALL THE PACKAGE "GOT" ELSE THE CODE WOULD NOT WORK
const lineReplyNoMention = require('discord-reply');

module.exports = {
      name: "hnetorare",
      cooldown: 3,
      nsfw: true,
      permissions: ["SEND_MESSAGES"],
      category: "NSFW",
      description: "Sends random netorares",
      usage: "[command]",
      async execute(client, message, cmd, args, Discord) {

            if (!message.channel.nsfw) return message.lineReplyNoMention({ content: '**This Is Not A NSFW Channel! 🔞**' })

            got('https://www.reddit.com/r/netorare/random.json').then(response => {
                  let content = JSON.parse(response.body);
                  // var title = content[0].data.children[0].data.title;
                  var amazeme = content[0].data.children[0].data.url;
                  let wow = new discord.MessageEmbed()
                        .setTimestamp()
                        .setDescription(`:underage: **Hentai Netorare**\n**[Provided To You By The Bot Supporters Of XOPBOT](${amazeme})**`)
                        .setImage(amazeme)
                        .setFooter(`Nice Yeah :)`)
                        .setColor('#c30202')
                  message.lineReplyNoMention(wow)
            })
      }
}