const got = require('got');
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
const errorChannel = process.env.errorChannel;
const { MessageButton, MessageActionRow } = require('discord-buttons');
module.exports = {
    name: "scratch-info",
    cooldown: 300,
    permissions: ["SEND_MESSAGES"],
    aliases: ['scratch-i', 'scr-info'],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    category: "Image",
    description: "Sends a scratch info from a project",
    async execute(client, message, cmd, args, Discord) {
        try {
            const user = message.author;
            if (!args[0]) {
                const nospec = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription('**`(prefix)scratch-info <scratchuser> <projectid>`**')
                return message.lineReplyNoMention({ embed: nospec })
            }
            if (!args[1]) {
                const nospec = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription('**`(prefix)scratch-info <scratchuser> <projectid>`**')
                return message.lineReplyNoMention({ embed: nospec })
            }
            let autoa = args[0];
            let autob = args[1];
            const on1 = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor(`${color}`)
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`🔃 **| Finding \`${autoa}\` User... (\`Please Wait 20s\`)**`)
            const on2 = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor(`${color}`)
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`🔃 **| Catching Info From \`${autob}\` Project... (\`Please Wait 10s\`)**`)
            const on3 = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor(`${color}`)
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`✅ **| Found The User: \`${autoa}\` And Got The Information!**`)
            message.lineReplyNoMention({ embed: on1 }).then((msg) => {
                setTimeout(function () {
                    msg.edit({ embed: on2 })
                    setTimeout(function () {
                        msg.edit({ embed: on3 })
                    }, 10000)
                }, 10000)
            })
            setInterval(() => {
                got(`https://api.scratch.mit.edu/users/${autoa}/projects/${autob}/`).then(response => {
                    let content = JSON.parse(response.body);
                    let memeTitle = content[0].data.children[0].data.title;
                    let memeDescription = content[0].data.children[0].data.description;
                    let memeUpvotes = content[0].data.children[0].data.views;
                    let memeDownvotes = content[0].data.children[0].data.loves;
                    let memeNumComments = content[0].data.children[0].data.favorites;
                    const splitted = memeDescription.split(" ", 2048);
                    const embed = new Discord.MessageEmbed()
                    embed.setThumbnail(user.displayAvatarURL({ dynamic: true }))
                    embed.setTimestamp()
                    embed.setTitle(`${memeTitle}`)
                    embed.setURL(`https://api.scratch.mit.edu/users/${autoa}/projects/${autob}/`)
                    embed.setDescription(`${splitted}`)
                    embed.setColor(`${color}`)
                    embed.setFooter(`👀 ${memeUpvotes} 💖 ${memeDownvotes} ⭐ ${memeNumComments}`)
                    message.lineReplyNoMention({ embed: embed });
                })
            }, 20000)
        } catch (err) {
            const errorlogs = client.channels.cache.get(errorChannel);
            message.lineReplyNoMention({ content: "**Looks Like An Error Has Occured!**" });
            errorlogs.send({ content: `**Error On Scratch-Info Command!\n\nError:\n\n ${err}**` })
        }
    }
}