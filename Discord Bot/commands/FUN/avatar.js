const lineReply = require('discord-reply');
const color = process.env.Color;
const { MessageButton, MessageActionRow } = require("discord-buttons");
const logChannel = process.env.logChannel;
module.exports = {
    name: 'avatar',
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    aliases: ['icon', 'pfp', 'profilepic'],
    cooldown: 5,
    description: 'Return a user(s) avatar picture!',
    async execute(client, message, cmd, args, Discord) {
        const loggerchannel = client.channels.cache.get(logChannel);
        const user = message.mentions.users.first() || message.author;
        const button1 = new MessageButton().setStyle('red').setID('128').setLabel('128px')
        const button2 = new MessageButton().setStyle('blurple').setID('256').setLabel('256px')
        const button3 = new MessageButton().setStyle('green').setID('1024').setLabel('1024px')
        const row = new MessageActionRow().addComponents(button1, button2, button3);
        const button4 = new MessageButton().setStyle('red').setID('1281').setLabel('128px').setDisabled(true)
        const button5 = new MessageButton().setStyle('blurple').setID('2561').setLabel('256px').setDisabled(true)
        const button6 = new MessageButton().setStyle('green').setID('10241').setLabel('1024px').setDisabled(true)
        const row1 = new MessageActionRow().addComponents(button4, button5, button6);
        const row2 = new MessageActionRow().addComponents(button4, button5, button6);
        const row3 = new MessageActionRow().addComponents(button4, button5, button6);
        const avatar_list = new Discord.MessageEmbed().setAuthor(`${user.username}`, user.displayAvatarURL({ dynamic: true })).setColor(`${color}`).setTimestamp().setTitle(`Avatar Link`).setURL(`${user.displayAvatarURL({ dynamic: true })}`).setDescription(`**Other Fotmats Supported: [PNG](${user.displayAvatarURL({ dynamic: true, format: 'png' })})  [JPEG](${user.displayAvatarURL({ dynamic: true, format: 'jpg' })})  [GIF](${user.displayAvatarURL({ dynamic: true, format: 'gif' })})**`).setImage(`${user.displayAvatarURL({ size: 2048, dynamic: true })}`)
        const sendme = await message.channel.send({ embed: avatar_list, components: [row] });
        client.on("clickButton", async (button) => {
            if (button.id === "128") {
                if (button.clicker.user.id !== message.author.id) {
                    await button.reply.defer();
                    await button.message.lineReply({ content: `**This Is ${user.username}\'s Embed!**`, ephemeral: true });
                } else if (button.clicker.id === message.author.id) {
                    const avatar_list1 = new Discord.MessageEmbed().setAuthor(`${user.username}`, user.displayAvatarURL({ dynamic: true })).setColor(`${color}`).setTimestamp().setTitle(`Avatar Link`).setURL(`${user.displayAvatarURL({ dynamic: true })}`).setDescription(`**Other Fotmats Supported: [PNG](${user.displayAvatarURL({ dynamic: true, format: 'png' })})  [JPEG](${user.displayAvatarURL({ dynamic: true, format: 'jpg' })})  [GIF](${user.displayAvatarURL({ dynamic: true, format: 'gif' })})**`).setImage(`${user.displayAvatarURL({ size: 128, dynamic: true })}`)
                    await sendme.edit({ embed: avatar_list1, components: [row1] });
                    await button.reply.defer();
                }
            } else if (button.id === "256") {
                if (button.clicker.user.id !== message.author.id) {
                    await button.reply.defer();
                    await button.message.lineReply({ content: `**This Is ${user.username}\'s Embed!**`, ephemeral: true });
                } else if (button.clicker.id === message.author.id) {
                    const avatar_list2 = new Discord.MessageEmbed().setAuthor(`${user.username}`, user.displayAvatarURL({ dynamic: true })).setColor(`${color}`).setTimestamp().setTitle(`Avatar Link`).setURL(`${user.displayAvatarURL({ dynamic: true })}`).setDescription(`**Other Fotmats Supported: [PNG](${user.displayAvatarURL({ dynamic: true, format: 'png' })})  [JPEG](${user.displayAvatarURL({ dynamic: true, format: 'jpg' })})  [GIF](${user.displayAvatarURL({ dynamic: true, format: 'gif' })})**`).setImage(`${user.displayAvatarURL({ size: 256, dynamic: true })}`)
                    await sendme.edit({ embed: avatar_list2, components: [row2] });
                    await button.reply.defer();
                }
            } else if (button.id === "1024") {
                if (button.clicker.user.id !== message.author.id) {
                    await button.reply.defer();
                    await button.message.lineReply({ content: `**This Is ${user.username}\'s Embed!**`, ephemeral: true });
                } else if (button.clicker.id === message.author.id) {
                    const avatar_list3 = new Discord.MessageEmbed().setAuthor(`${user.username}`, user.displayAvatarURL({ dynamic: true })).setColor(`${color}`).setTimestamp().setTitle(`Avatar Link`).setURL(`${user.displayAvatarURL({ dynamic: true })}`).setDescription(`**Other Fotmats Supported: [PNG](${user.displayAvatarURL({ dynamic: true, format: 'png' })})  [JPEG](${user.displayAvatarURL({ dynamic: true, format: 'jpg' })})  [GIF](${user.displayAvatarURL({ dynamic: true, format: 'gif' })})**`).setImage(`${user.displayAvatarURL({ size: 1024, dynamic: true })}`)
                    await sendme.edit({ embed: avatar_list3, components: [row3] })
                    await button.reply.defer();
                }
            }
        });
        loggerchannel.send({ content: `**${message.author.username}#${message.author.discriminator} used the command ${this.name} in ${message.guild.name}**` })
    }
}