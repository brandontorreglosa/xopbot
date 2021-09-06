const { Canvas } = require('canvacord');
const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: 'phub',
    cooldown: 8,
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    description: 'what are you doing here?',
    async execute(client, message, cmd, args, Discord) {
        if (!args[0]) {
            const nopr = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#c30202')
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**\`(prefix)phub <text>\`**`)
            return message.lineReplyNoMention(nopr)
        }
        const user = message.mentions.users.first() || message.author;
        const avatar = user.displayAvatarURL({ size: 2048, format: "png" });
        const member = message.author.tag;

        let splitArgs = args.join(' ').split('/');
        const text = splitArgs[0];
        if (!text) {
            const notxt1 = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#c30202')
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**Enter Some Text!**`)
            return message.lineReplyNoMention(notxt1)
        }
        if (text.length > 70) {
            const maxlen = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#c30202')
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**You Are Not Allowed To Go Over \`70\` Characters!**`)
            return message.lineReplyNoMention(maxlen)
        }

        const image = await Canvas.phub({
            username: member,
            message: text,
            image: avatar,
        });

        const attachment = new Discord.MessageAttachment(image, "xopbotphub.png");
        return message.lineReplyNoMention({ files: [{ attachment: image }] });
    }
}