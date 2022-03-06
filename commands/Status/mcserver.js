const util = require('minecraft-server-util');
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
    name: 'mcserver',
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    aliases: ['mcs'],
    cooldown: 5,
    description: 'get information about a minecraft server',
    async execute(client, message, cmd, args, Discord) {
        if (!args[0]) {
            const nopr = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`(prefix)mcserver <serverip> <serverport>\` \nDont Know? Visit: https://minecraftservers.org/**`)
            return message.lineReplyNoMention({ embed: nopr })
        }
        if (!args[1]) {
            const nopr1 = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**Please Add The Server Port! \nDont Know? Visit: https://minecraftservers.org/**`)
            return message.lineReplyNoMention({ embed: nopr1 })
        }
        util.status(args[0], { port: parseInt(args[1]) }).then((response) => {
            //console.log(response);
            const embed = new Discord.MessageEmbed().setColor('#029602').setTitle('**MC Server Status**').setURL('https://minecraftservers.org/').addFields({ name: '🌐 Server IP', value: response.host }, { name: '👥 Online Players', value: response.onlinePlayers }, { name: '👨‍👩‍👦‍👦 Max Players', value: response.maxPlayers }, { name: '🔢 Version', value: response.version }).setFooter('MC Server By Bot Developer Team');
            message.lineReplyNoMention({ embed: embed });
        })
            .catch((error) => {
                message.lineReplyNoMention({ content: '**There Was An Error Finding This Server**' });
                throw error;
            })
    }
}