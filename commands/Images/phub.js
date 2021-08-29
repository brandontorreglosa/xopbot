const { Canvas } = require('canvacord');
const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: 'phub',
    cooldown: 8,
    permissions: ["SEND_MESSAGES"],
    description: 'what are you doing here?',
    async execute(client, message, cmd, args, Discord) {
        if (!args[0]) {
            return message.lineReplyNoMention({ content: '**`(prefix)phub <text>`**' }) //, allowedMentions: { repliedUser: true } })
        }
        const mention = message.author;
        const avatar = mention.user.displayAvatarURL({ format: "png" });
        const member = message.author.tag;

        let splitArgs = args.join(' ').split('/');
        const text = splitArgs[0];
        if (!text) {
            return message.lineReplyNoMention({ content: "**Enter The First Text!**" }) //, allowedMentions: { repliedUser: true } })
        }
        if (text.length > 70) return message.reply({ content: `**You Cant Go Over 70 Characters!**`, allowedMentions: { repliedUser: true } })

        const image = await Canvas.phub({
            username: member,
            message: text,
            image: avatar,
        });

        const attachment = new Discord.MessageAttachment(image, "xopbotphub.png");
        return message.channel.send({ files: [{ attachment: image }] });
    }
}