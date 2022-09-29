const nsfwSchema = require("../../models/registernsfw");
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
const { MessageButton, MessageActionRow } = require('discord-buttons');
module.exports = {
    name: 'register',
    cooldown: 3,
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    aliases: ['register-nsfw', 'nsfw-register'],
    async execute(client, message, cmd, args, Discord) {
        const member = message.author;
        const id1 = "yes"+`${Math.floor(Math.random() * 5000)}`;
        const id2 = "yes1"+`${Math.floor(Math.random() * 5000)}`;
        const id3 = "no"+`${Math.floor(Math.random() * 5000)}`;
        const id4 = "no1"+`${Math.floor(Math.random() * 5000)}`;
        const id5 = "yes2"+`${Math.floor(Math.random() * 5000)}`;
        const id6 = "yes3"+`${Math.floor(Math.random() * 5000)}`;
        const id7 = "no2"+`${Math.floor(Math.random() * 5000)}`;
        const id8 = "no3"+`${Math.floor(Math.random() * 5000)}`;
        const button1 = new MessageButton().setStyle('green').setID(id1).setLabel("Accept").setEmoji('✅')
        const button2 = new MessageButton().setStyle('red').setID(id3).setLabel('Reject').setEmoji('❌')
        const button3 = new MessageButton().setStyle('green').setID(id2).setLabel("Accept").setEmoji('✅').setDisabled(true)
        const button4 = new MessageButton().setStyle('red').setID(id4).setLabel('Reject').setEmoji('❌').setDisabled(true)
        const button5 = new MessageButton().setStyle('green').setID(id5).setLabel("Accept").setEmoji('✅').setDisabled(true)
        const button6 = new MessageButton().setStyle('red').setID(id7).setLabel('Reject').setEmoji('❌').setDisabled(true)
        const button7 = new MessageButton().setStyle('green').setID(id6).setLabel("Accept").setEmoji('✅').setDisabled(true)
        const button8 = new MessageButton().setStyle('red').setID(id8).setLabel('Reject').setEmoji('❌').setDisabled(true)
        const row = new MessageActionRow().addComponents(button1, button2)
        const row2 = new MessageActionRow().addComponents(button3, button4)
        const row3 = new MessageActionRow().addComponents(button5, button6)
        const row4 = new MessageActionRow().addComponents(button7, button8)
        const embed = new Discord.MessageEmbed().setColor(`${color}`).setTimestamp().setAuthor(`${member.username}`, member.displayAvatarURL({ dynamic: true })).setDescription(`**By Registering For NSFW Commands You Confirm Your 18. 🔞 \nAnd XOPBOT Is Not Responsible For Any Consequences! Continue?**`)
        const SentMessage = message.channel.send({ embed: embed, components: [row] });
        client.on("clickButton", async(button) => {
            if (button.id === id1) {
                if (message.author.id === "636167329251852308") {
                    message.channel.send({ content: "Elias. Why Are You Dumb 🤨!" })
                }
                if (button.clicker.user.id !== message.author.id) {
                    await button.reply.defer();
                    await button.message.lineReply({ content: `**This Is ${user.username}\'s Embed!**`, ephemeral: true });
                } else if (button.clicker.id === message.author.id) {
                    nsfwSchema.findOne({ User: member.id, },
                        async(err, data) => {
                            if (data) {
                                message.lineReplyNoMention({ content: "**You Have Already Registered For NSFW Commands!**" })
                                await button.reply.defer();
                                await SentMessage.edit({ embed: embed, components: [row2] });
                            }
                            new nsfwSchema({ User: member.id }).save();
                            message.lineReply({ content: `**Added ${member} To The NSFW Database! 🔞 \nHave Fun You Little Pervert 😊**` })
                            await button.reply.defer();
                            await SentMessage.edit({ embed: embed, components: [row3] });
                        }
                    );
                };
            } else if (button.id === id3) {
                if (button.clicker.user.id !== message.author.id) {
                    await button.reply.defer();
                    await button.message.lineReply({ content: `**This Is ${user.username}\'s Embed!**`, ephemeral: true });
                } else if (button.clicker.id === message.author.id) {
                    const nonukeplz = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**You Cancelled The NSFW Registration Successfully!**`)
                    message.lineReplyNoMention({ embed: nonukeplz })
                    await button.reply.defer();
                    await SentMessage.edit({ embed: embed, components: [row4] });
                }
            };
            await button.reply.defer();
        });
    },
};