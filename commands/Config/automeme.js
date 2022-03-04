const got = require('got');
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
const { MessageButton, MessageActionRow } = require("discord-buttons");
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
            .setColor(`${color}`)
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription('🔃 **| AutoMeme Starting... (`Please Wait 20s`)**')
        const on2 = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor(`${color}`)
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription('🔃 **| AutoMeme Starting... (`Please Wait 10s`)**')
        const on3 = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor(`${color}`)
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription('✅ **| AutoMeme Started**')

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
            .setDescription(`**This Year Currently On Reddit: \nThere Has Been \`Dirty Users\` On \`SFW Subreddits\` And Spam \`NSFW Content\` \nIf U Dont Want NSFW Please Dont Execute This! \nDo U Still Agree To Continue?**`)
            .setFooter('Please Reply With Yes Or No!')
        const check = await message.lineReplyNoMention(stopvote, row)

        client.on("clickButton", async (button) => {
            if (button.id === "reject") {
                const nostopcmdplz = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`**You Cancelled The Automeme Command Successfully!**`)
                return message.lineReplyNoMention(nostopcmdplz)
            } else if (button.id === "accept") {
                message.lineReplyNoMention(on1).then((msg) => {
                    setTimeout(function () {
                        msg.edit(on2)
                        setTimeout(function () {
                            msg.edit(on3)
                        }, 10000)
                    }, 10000)
                })
                setInterval(() => {
                    got(`https://www.reddit.com/r/memes/random.json`).then(response => {
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
                check.edit({ embed: stopvote, components: [row2] })
            }
            button.reply.defer();
        });
    }
}