const discord = require("discord.js");
const got = require("got"); //MAKE SURE TO INSTALL THE PACKAGE "GOT" ELSE THE CODE WOULD NOT WORK
const lineReplyNoMention = require('discord-reply');

module.exports = {
      name: "hcowgirl",
      nsfw: true,
      cooldown: 3,
      permissions: ["SEND_MESSAGES"],
      clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
      category: "NSFW",
      description: "Sends random cowgirls",
      usage: "[command]",
      async execute(client, message, cmd, args, Discord) {

            if (!message.channel.nsfw) return message.lineReplyNoMention({ content: '**This Is Not A NSFW Channel! 🔞**' })

            got('https://www.reddit.com/r/Cowgirls/random.json').then(response => {
                  let content = JSON.parse(response.body);
                  var title = content[0].data.children[0].data.title;
                  var amazeme = content[0].data.children[0].data.url;
                  let wow = new discord.MessageEmbed()
                        .setTimestamp()
                        .setDescription(`:underage: **Hentai Cowgirl**\n**[Provided To You By The Bot Supporters Of XOPBOT](${amazeme})**`)
                        .setImage(amazeme)
                        .setFooter(`Moo! Can I Have Some Milk! :)`)
                        .setColor('#c30202')
                  message.lineReplyNoMention(wow)
            })
      }
}
