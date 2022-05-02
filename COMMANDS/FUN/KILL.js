const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
    name: 'kill',
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES"],
    aliases: ['slaughter', 'cut'],
    cooldown: 5,
    description: 'kill a user',
    async execute(client, message, cmd, args, Discord) {
        if (!args[0]) {
            const nopr = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`(prefix)kill <@user>\`**`)
            return message.lineReplyNoMention({ embed: nopr })
        }
        const links = ['https://th.bing.com/th/id/OIP.PO3uT4EYhVyD6gVGNJjzJgHaE9?pid=ImgDet&rs=1', 'https://th.bing.com/th/id/OIP.877cS00bngniZF0m2--FAgHaEK?pid=ImgDet&rs=1']
        const user = message.mentions.users.first()
        const randomLinks = links[Math.floor(Math.random() * links.length)]; const randomNumber = Math.floor(Math.random() * 500) + 1; const kill_list = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setTitle(`${user.username} Was Killed!`).setDescription(`**\`${user.username}\` Was Killed By \`${message.author.username}\` Who Used \`${randomNumber}\` Power!**`).setImage(`${randomLinks}`)
        return message.lineReplyNoMention({ embed: kill_list })
    }
}