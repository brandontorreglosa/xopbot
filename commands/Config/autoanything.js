const got = require('got');
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
    name: "autoanything",
    cooldown: 300,
    permissions: ["ADMINISTRATOR"],
    aliases: ['autoany', 'autoathing'],
    clientpermissions: ["MANAGE_MESSAGES", "SEND_MESSAGES", "EMBED_LINKS"],
    category: "Image",
    description: "Sends a random meme from reddit",
    async execute(client, message, cmd, args, Discord) {
        if (!args[0]) {
            const nospec = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor(`${color}`)
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription('**`(prefix)antoanything <subreddit>`**')
            return message.lineReplyNoMention(nospec)
        }
        const autoa = args[1];
        const on1 = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor(`${color}`)
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`🔃 **| Finding \`${autoa}\` Subreddit... (\`Please Wait 20s\`)**`)
        const on2 = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor(`${color}`)
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`🔃 **| Catching Images From \`${autoa}\` Subreddit... (\`Please Wait 10s\`)**`)
        const on3 = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor(`${color}`)
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`✅ **| Auto${autoa} Started**`)

        const stopvote = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor(`${color}`)
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`**Do You Accept The Terms: \n1) No \`NSFW\` Is Allowed. \n2) No \`Racist\` Subreddits. \n3) No Subreddit Against Our [PTOS](https://xopbot.glitch.me/policy/privacy). \n4) No \`Sexist\` Or \`Insulting\` Subreddit. \n5) Have Fun Using It! \nDo You Agree To Continue?**`)
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
                .setDescription(`**You Cancelled The Automeme Command Successfully!**`)
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
            got(`https://www.reddit.com/r/${autoa}/random.json`).then(response => {
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
                embed.setColor(`${color}`)
                embed.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`)
                message.lineReplyNoMention(embed);
            })
        }, 20000)
    }
}