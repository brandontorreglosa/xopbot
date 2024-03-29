const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
const { MessageButton, MessageActionRow } = require("discord-buttons");
module.exports = {
    name: 'nuke',
    cooldown: 15,
    aliases: ['clearall'],
    permissions: ['MANAGE_MESSAGES', 'MANAGE_CHANNELS'],
    clientpermissions: ["MANAGE_MESSAGES", "MANAGE_CHANNELS", "SEND_MESSAGES", "EMBED_LINKS"],
    description: 'Removes all messages in the channel (Deletes the old channel and makes a copy of it with permissions intact)',
    async execute(client, message, cmd, args, Discord) {
        const user = message.author;
        const id1 = "yes"+`${Math.floor(Math.random() * 5000)}`;
        const id2 = "yes1"+`${Math.floor(Math.random() * 5000)}`;
        const id3 = "no"+`${Math.floor(Math.random() * 5000)}`;
        const id4 = "no1"+`${Math.floor(Math.random() * 5000)}`;
        const button1 = new MessageButton().setStyle('green').setID(id1).setLabel("Accept").setEmoji('✅')
        const button2 = new MessageButton().setStyle('red').setID(id3).setLabel('Reject').setEmoji('❌')
        const button3 = new MessageButton().setStyle('green').setID(id2).setLabel("Accept").setEmoji('✅').setDisabled(true)
        const button4 = new MessageButton().setStyle('red').setID(id4).setLabel('Reject').setEmoji('❌').setDisabled(true)
        const row = new MessageActionRow().addComponents(button1, button2)
        const row2 = new MessageActionRow().addComponents(button3, button4)
        const row3 = new MessageActionRow().addComponents(button3, button4)
        const nopr = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**This Will Clear All Messages In This Channel And May Cause Conflict For Bots Using ID To Track Channels. Continue?**`)
        const SentMessage = await message.channel.send({ embed: nopr, components: [row] })
        client.on("clickButton", async (button) => {
            if (button.id === id1) {
                if (button.clicker.user.id !== message.author.id) {
                    await button.reply.defer();
                    await button.message.lineReply({ content: `**This Is ${user.username}\'s Embed!**`, ephemeral: true });
                } else if (button.clicker.id === message.author.id) {
                    const embed = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setTitle('Incoming Nuke!').setDescription(`**The Nuke Has Been Deployed, Say Goodbye To #${message.channel.name} \nTakes Up To 10 Seconds Max. To Clear Channel!**`).setFooter(`Was Deployed By ${message.author.username} 😱`)
                    message.lineReplyNoMention({ embed: embed })
                        .then(() => setTimeout(() => message.channel.clone()
                            .then(() => message.channel.delete().catch(() => null)), 10000));
                    await button.reply.defer();
                    await SentMessage.edit({ embed: nopr, components: [row2] });
                }
            } else if (button.id === id3) {
                if (button.clicker.user.id !== message.author.id) {
                    await button.reply.defer();
                    await button.message.lineReply({ content: `**This Is ${user.username}\'s Embed!**`, ephemeral: true });
                } else if (button.clicker.id === message.author.id) {
                    const nonukeplz = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**You Cancelled The Nuke Command Successfully!**`)
                    message.lineReplyNoMention({ embed: nonukeplz });
                    await button.reply.defer();
                    await SentMessage.edit({ embed: nopr, components: [row3] });
                }
            }
        })
    }
};