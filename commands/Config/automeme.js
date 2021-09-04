const got = require('got');
const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: "automeme",
    cooldown: 300,
    permissions: ["ADMINISTRATOR"],
    clientpermissions: ["MANAGE_MESSAGES", "SEND_MESSAGES", "EMBED_LINKS"],
    category: "Image",
    description: "Sends a random meme from reddit",
    async execute(client, message, cmd, args, Discord) {
        message.lineReplyNoMention({ content: "🔄 **| AutoMeme Starting... (`Please wait 20s`)**" }).then((msg) => {
            setTimeout(function () {
                msg.edit({ content: "🔄 **| AutoMeme Starting... (`Please Wait 10s`)**" })
                setTimeout(function () {
                    msg.edit({ content: "✅ **| AutoMeme Started**" })
                }, 10000)
            }, 10000)
        })
        setInterval(() => {
            got('https://reddit.com/r/memes/random.json').then(response => {
                let content = JSON.parse(response.body);
                let permalink = content[0].data.children[0].data.permalink;
                let memeUrl = `https://reddit.com${permalink}`;
                let memeImage = content[0].data.children[0].data.url;
                let memeTitle = content[0].data.children[0].data.title;
                let memeUpvotes = content[0].data.children[0].data.ups;
                let memeDownvotes = content[0].data.children[0].data.downs;
                let memeNumComments = content[0].data.children[0].data.num_comments;
                const embed = new Discord.MessageEmbed()
                embed.setTimestamp()
                embed.setTitle(`${memeTitle}`)
                embed.setURL(`${memeUrl}`)
                embed.setImage(`${memeImage}`)
                embed.setColor('#c30202')
                embed.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`)
                message.lineReplyNoMention(embed);
            })
        }, 20000)
    }
}