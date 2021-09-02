const { Canvas } = require('canvacord');
const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: 'wasted',
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    description: 'what are you doing here?',
    async execute(client, message, cmd, args, Discord) {
        const user = message.mentions.users.first() || message.author;
        const avatar = user.displayAvatarURL({ size: 2048, format: "png" });

        const image = await Canvas.wasted(avatar);

        const attachment = new Discord.MessageAttachment(image, "xopbotwasted.gif");
        return message.lineReplyNoMention({ files: [{ attachment: image }] });
    }
}