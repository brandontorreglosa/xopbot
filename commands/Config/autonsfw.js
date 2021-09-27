const got = require('got');
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
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
        const on1 = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor(`${color}`)
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription('🔄🔞 **| AutoNSFW Starting... (`Please Wait 20s`)**')
        const on2 = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor(`${color}`)
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription('🔄🔞 **| AutoNSFW Starting... (`Please Wait 10s`)**')
        const on3 = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor(`${color}`)
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription('✅🔞 **| AutoNSFW Started**')

        message.lineReplyNoMention(on1).then((msg) => {
            setTimeout(function () {
                msg.edit(on2)
                setTimeout(function () {
                    msg.edit(on3)
                }, 10000)
            }, 10000)
        })
        setInterval(() => {
            got('https://reddit.com/r/porn/random.json').then(response => {
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
                embed.setColor(`${color}`)
                embed.setFooter(`AUTONSFW IS POG | 👍${memeUpvotes} 💬 ${memeNumComments}`)
                message.lineReplyNoMention(embed);
            })
        }, 20000)
    }
}