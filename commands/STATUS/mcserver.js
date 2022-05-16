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
            const embed = new Discord.MessageEmbed().setThumbnail('https://i.pinimg.com/originals/3e/ce/2a/3ece2a1e5a5e5f430f5a530ba1104a14.jpg').setColor('#029602').setTitle('**MC Server Status**').setURL('https://minecraftservers.org/').setDescription(`The Minecraft Server Status Of ${args[0]}`).addField('🌐 Server IP', response.host).addField('👥 Online Players', response.onlinePlayers).addField('👨‍👩‍👦‍👦 Max Players', response.maxPlayers).addField('🔢 Version', response.version).setTimestamp();
            message.lineReplyNoMention({ embed: embed });
        })
            .catch((error) => {
                message.lineReplyNoMention({ content: '**There Was An Error Finding This Server**' });
                throw error;
            })
    }
}