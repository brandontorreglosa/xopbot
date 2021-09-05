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
        const on1 = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#c30202')
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription('🔄 **| AutoMeme Starting... (`Please wait 20s`)**')
        const on2 = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#c30202')
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription('🔄 **| AutoMeme Starting... (`Please Wait 10s`)**')
        const on3 = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#c30202')
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription('✅ **| AutoMeme Started**')
        message.lineReplyNoMention(on1).then((msg) => {
            setTimeout(function () {
                msg.edit(on2)
                setTimeout(function () {
                    msg.edit(on3)
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