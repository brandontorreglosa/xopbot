const got = require('got');
const color = process.env.Color;
const lineReplyNoMention = require('discord-reply');
const { MessageButton, MessageActionRow } = require("discord-buttons");
module.exports = {
    name: "meme",
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    category: "Image",
    description: "Sends a random meme from reddit",
    async execute(client, message, cmd, args, Discord) {
        const id1 = "reload" + `${Math.floor(Math.random() * 5000)}`;
        const id2 = "reload1" + `${Math.floor(Math.random() * 5000)}`;
        const button1 = new MessageButton().setStyle('green').setID(id1).setLabel('Regenerate').setEmoji('🔁')
        const button2 = new MessageButton().setStyle('green').setID(id2).setLabel('Regenerate').setEmoji('🔁').setDisabled(true)
        const row = new MessageActionRow().addComponents(button1);
        const row1 = new MessageActionRow().addComponents(button2);
        got('https://reddit.com/r/memes/random.json').then(async response => {
            let content = JSON.parse(response.body); let permalink = content[0].data.children[0].data.permalink; let memeUrl = `https://reddit.com${permalink}`; let memeImage = content[0].data.children[0].data.url; let memeTitle = content[0].data.children[0].data.title; let memeUpvotes = content[0].data.children[0].data.ups; let memeDownvotes = content[0].data.children[0].data.downs; let memeNumComments = content[0].data.children[0].data.num_comments;
            const embed = new Discord.MessageEmbed().setTimestamp().setTitle(`${memeTitle}`).setURL(`${memeUrl}`).setImage(`${memeImage}`).setColor(`${color}`).setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`)
            const sendme = await message.channel.send({ embed: embed, components: [row] });
            client.on("clickButton", async (button) => {
                if (button.id === id1) {
                    if (button.clicker.user.id !== message.author.id) {
                        await button.reply.defer();
                        await button.message.lineReply({ content: `**This Is ${user.username}\'s Embed!**`, ephemeral: true });
                    } else if (button.clicker.id === message.author.id) {
                        const embed1 = new Discord.MessageEmbed().setTimestamp().setTitle(`${memeTitle}`).setURL(`${memeUrl}`).setImage(`${memeImage}`).setColor(`${color}`).setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`)
                        await sendme.edit({ embed: embed1, components: [row1] });
                        await button.reply.defer();
                    }
                }
            })
        })
    }
}