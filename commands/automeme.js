const got = require('got');

module.exports = {
    name: "automeme",
    permissions: ["ADMINISTRATOR"],
    category: "Image",
    description: "Sends a random meme from reddit",
    async execute(client, message, cmd, args, Discord) {
        message.channel.send("🔄 **| AutoMeme Starting... (`Please wait 20s`)**").then((msg) => {
            setTimeout(function () {
                msg.edit("🔄 **| AutoMeme Starting... (`Please Wait 10s`)**")
                setTimeout(function () {
                    msg.edit("✅ **| AutoMeme Started**")
                }, 10000)
            }, 10000)
        })
        setInterval(() => {
            got('https://reddit.com/r/dankmemes/random.json').then(response => {
                let content = JSON.parse(response.body);
                let permalink = content[0].data.children[0].data.permalink;
                let memeUrl = `https://reddit.com${permalink}`;
                let memeImage = content[0].data.children[0].data.url;
                let memeTitle = content[0].data.children[0].data.title;
                let memeUpvotes = content[0].data.children[0].data.ups;
                let memeDownvotes = content[0].data.children[0].data.downs;
                let memeNumComments = content[0].data.children[0].data.num_comments;
                const embed = new Discord.MessageEmbed()
                embed.setTitle(`${memeTitle}`)
                embed.setURL(`${memeUrl}`)
                embed.setImage(memeImage)
                embed.setColor('#c30202')
                embed.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`)
                message.channel.send(embed);
            })
        }, 20000)
    }
}