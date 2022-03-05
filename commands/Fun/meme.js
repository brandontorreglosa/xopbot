const got = require('got');
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
    name: "meme",
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    category: "Image",
    description: "Sends a random meme from reddit",
    async execute(client, message, cmd, args, Discord) {
        got('https://reddit.com/r/memes/random.json').then(response => {
            let content = JSON.parse(response.body); let permalink = content[0].data.children[0].data.permalink; let memeUrl = `https://reddit.com${permalink}`; let memeImage = content[0].data.children[0].data.url; let memeTitle = content[0].data.children[0].data.title; let memeUpvotes = content[0].data.children[0].data.ups; let memeDownvotes = content[0].data.children[0].data.downs; let memeNumComments = content[0].data.children[0].data.num_comments;
            const embed = new Discord.MessageEmbed().setTimestamp().setTitle(`${memeTitle}`).setURL(`${memeUrl}`).setImage(`${memeImage}`).setColor(`${color}`).setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`)
            message.lineReplyNoMention({ embed: embed });
        })
    }
}