const got = require('got');
const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: "autonsfw",
    cooldown: 300,
    nsfw: true,
    permissions: ["ADMINISTRATOR"],
    clientpermissions: ["MANAGE_MESSAGES", "SEND_MESSAGES", "EMBED_LINKS"],
    category: "Image",
    description: "Sends a random nsfw image from reddit",
    async execute(client, message, cmd, args, Discord) {

        if (!message.channel.nsfw) return message.lineReplyNoMention({ content: '**This Is Not A NSFW Channel! 🔞**' })

        message.lineReplyNoMention({ content: "🔄🔞 **| AutoNSFW Starting... (`Please wait 20s`)**" }).then((msg) => {
            setTimeout(function () {
                msg.edit({ content: "🔄🔞 **| AutoNSFW Starting... (`Please Wait 10s`)**" })
                setTimeout(function () {
                    msg.edit({ content: "✅🔞 **| AutoNSFW Started**" })
                }, 10000)
            }, 10000)
        })
        setInterval(() => {
            got('https://reddit.com/r/rule34/random.json').then(response => {
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
                embed.setTitle(`AUTONSFW By XOPBOT`)
                embed.setURL(`${memeUrl}`)
                embed.setImage(`${memeImage}`)
                embed.setColor('#c30202')
                embed.setFooter(`AUTONSFW IS POG | 👍${memeUpvotes} 💬 ${memeNumComments}`)
                message.lineReplyNoMention(embed);
            })
        }, 20000)
    }
}