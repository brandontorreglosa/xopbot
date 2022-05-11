const nsfwSchema = require("../../models/registernsfw");
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
    name: 'register',
    cooldown: 3,
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    aliases: ['register-nsfw', 'nsfw-register'],
    async execute(client, message, cmd, args, Discord) {
        const member = message.author;
        const button1 = new MessageButton().setStyle('green').setID('yes').setLabel("Accept").setEmoji('✅')
        const button2 = new MessageButton().setStyle('red').setID('no').setLabel('Reject').setEmoji('❌')
        const button3 = new MessageButton().setStyle('green').setID('yes1').setLabel("Accept").setEmoji('✅').setDisabled(true)
        const button4 = new MessageButton().setStyle('red').setID('no1').setLabel('Reject').setEmoji('❌').setDisabled(true)
        const row = new MessageActionRow().addComponents(button1, button2)
        const row2 = new MessageActionRow().addComponents(button3, button4)
        const row3 = new MessageActionRow().addComponents(button3, button4)
        const embed = new Discord.MessageEmbed().setColor(`${color}`).setTimestamp().setAuthor(`${member.username}`, member.displayAvatarURL({ dynamic: true })).setDescription(`**By Registering For NSFW Commands You Confirm Your 18. 🔞 \nAnd XOPBOT Is Not Responsible For Any Consequences! Continue?**`)
        const SentMessage = message.channel.send({ embed: embed, components: [row] });
        client.on("clickButton", async (button) => {
            if (button.id === "yes") {
                if (button.clicker.user.id !== message.author.id) {
                    await button.reply.defer();
                    await button.message.lineReply({ content: `**This Is ${user.username}\'s Embed!**`, ephemeral: true });
                } else if (button.clicker.id === message.author.id) {
                    nsfwSchema.findOne({ User: member.id, },
                        async (err, data) => {
                            if (data) {
                                return message.lineReplyNoMention({ content: "**You Have Already Registered For NSFW Commands!**" });
                            }
                            new nsfwSchema({ User: member.id }).save();
                            message.lineReply({ content: `**Added ${member} To The NSFW Database! 🔞 \nHave Fun You Little Pervert 😊**` })
                            await button.reply.defer();
                            await SentMessage.edit({ embed: embed, components: [row2] });
                        },
                    );
                };
            } else if (button.id === "no") {
                if (button.clicker.user.id !== message.author.id) {
                    await button.reply.defer();
                    await button.message.lineReply({ content: `**This Is ${user.username}\'s Embed!**`, ephemeral: true });
                } else if (button.clicker.id === message.author.id) {
                    const nonukeplz = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**You Cancelled The NSFW Registration Successfully!**`)
                    message.lineReplyNoMention({ embed: nonukeplz });
                    await button.reply.defer();
                    await SentMessage.edit({ embed: embed, components: [row3] });
                }
            };
        });
    },
};