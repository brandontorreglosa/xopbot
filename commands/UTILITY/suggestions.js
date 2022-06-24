const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
    name: 'suggestions',
    cooldown: 10,
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS", "MANAGE_CHANNELS", "MANAGE_MESSAGES"],
    aliases: ['sgs', 'suggest'],
    permissions: [],
    description: 'Create A Suggestion!',
    async execute(client, message, cmd, args, Discord) {
        const channel = message.guild.channels.cache.find(x => x.name.toLowerCase().includes("suggestions"));
        if (!channel) message.guild.channels.create(`suggestions`);
        let messageArgs = args.join(' ');
        if (!args[0]) {
            const nopr = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`(prefix)suggest <suggestion>\`**`)
            return message.lineReplyNoMention({ embed: nopr })
        }
        const embed = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true })).setDescription(messageArgs);
        channel.send({ embed: embed }).then((msg) => {
            msg.react('👍');
            msg.react('👎');
            message.delete();
        }).catch((err) => {
            throw err;
        });
    }
}