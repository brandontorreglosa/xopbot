const got = require('got');
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
const errorChannel = process.env.errorChannel;
const { MessageButton, MessageActionRow } = require('discord-buttons');
module.exports = {
    name: "autoanything",
    cooldown: 300,
    permissions: ["ADMINISTRATOR"],
    aliases: ['autoany', 'autoathing'],
    clientpermissions: ["MANAGE_MESSAGES", "SEND_MESSAGES", "EMBED_LINKS"],
    category: "Image",
    description: "Sends a random meme from reddit",
    async execute(client, message, cmd, args, Discord) {
        try {
            if (!args[0]) {
                const nospec = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription('**`(prefix)antoanything <subreddit>`**')
                return message.lineReplyNoMention({ embed: nospec })
            }
            let autoa = args.slice(0).join(' ');
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

            const button1 = new MessageButton()
                .setStyle('green')
                .setID('accept')
                .setLabel("Accept")
                .setEmoji('✅')

            const button2 = new MessageButton()
                .setStyle('red')
                .setID('reject')
                .setLabel('Reject')
                .setEmoji('❌')

            const button3 = new MessageButton()
                .setStyle('green')
                .setID('accept1')
                .setLabel("Accept")
                .setEmoji('✅')
                .setDisabled(true)

            const button4 = new MessageButton()
                .setStyle('red')
                .setID('reject')
                .setLabel('Reject')
                .setEmoji('❌')
                .setDisabled(true)

            const row = new MessageActionRow()
                .addComponents(button1, button2)

            const row2 = new MessageActionRow()
                .addComponents(button3, button4)

            const stopvote = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor(`${color}`)
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**Do You Accept The Terms: \n1) No \`NSFW\` Is Allowed. \n2) No \`Racist\` Subreddits. \n3) No Subreddit Against Our [PTOS](https://xopbot.glitch.me/policy/privacy). \n4) No \`Sexist\` Or \`Insulting\` Subreddit. \n5) Have Fun Using It! \nDo You Agree To Continue?**`)
            const check = await message.channel.send({ embed: stopvote, components: [row] })

            client.on("clickButton", async (button) => {
                if (button.id === "reject") {
                    const nostopcmdplz = new Discord.MessageEmbed()
                        .setTimestamp()
                        .setColor(`${color}`)
                        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                        .setDescription(`**You Cancelled The Automeme Command Successfully!**`)
                    return message.lineReplyNoMention({ embed: nostopcmdplz })
                } else if (button.id === "accept") {
                    message.lineReplyNoMention({ embed: on1 }).then((msg) => {
                        setTimeout(function () {
                            msg.edit({ embed: on2 })
                            setTimeout(function () {
                                msg.edit({ embed: on3 })
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
                            message.lineReplyNoMention({ embed: embed });
                        })
                    }, 20000)
                    check.edit({ embed: stopvote, components: [row2] })
                }
                button.reply.defer();
            });
        } catch (err) {
            const errorlogs = client.channels.cache.get(errorChannel);
            message.lineReplyNoMention({ content: "**Looks Like An Error Has Occured!**" });
            errorlogs.send({ content: `**Error On AutoAnything Command!\n\nError:\n\n ${err}**` })
        }
    }
}