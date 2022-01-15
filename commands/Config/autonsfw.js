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

        const stopvote = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor(`${color}`)
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`**By Executing This Command You Agree Your Over \`18+\`! Continue?**`)
            .setFooter('Please Reply With Yes Or No!')
        message.lineReplyNoMention(stopvote)

        const filter = _message => message.author.id === _message.author.id && ['y', 'n', 'yes', 'no'].includes(_message.content.toLowerCase());
        const options = { max: 1, time: 30000, errors: ['time'] };
        const proceed = await message.channel.awaitMessages(filter, options)
            .then(collected => ['y', 'yes'].includes(collected.first().content.toLowerCase()) ? true : false)
            .catch(() => false);

        if (!proceed) {
            const nostopcmdplz = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor(`${color}`)
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**You Cancelled The Autonsfw Command Successfully!**`)
            return message.lineReplyNoMention(nostopcmdplz)
        };

        await message.lineReplyNoMention(on1).then((msg) => {
            setTimeout(function () {
                msg.edit(on2)
                setTimeout(function () {
                    msg.edit(on3)
                }, 10000)
            }, 10000)
        })
        setInterval(() => {
            got('https://www.reddit.com/r/bdsm/random.json').then(response => {
                let content = JSON.parse(response.body);
                let permalink = content[0].data.children[0].data.permalink;
                let memeUrl = `https://reddit.com${permalink}`;
                let memeImage = content[0].data.children[0].data.url;
                let memeUpvotes = content[0].data.children[0].data.ups;
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