const Canvas = require('canvacord');

module.exports = {
    name: 'phub',
    permissions: ["SEND_MESSAGES"],
    description: 'what are you doing here?',
    async execute(client, message, cmd, args, Discord) {
        const mention = message.mentions.members.first() || message.member;
        const avatar = mention.user.displayAvatarURL({ format: "png" });

        const image = await Canvas.phub(avatar)

        message.channel.send(new MessageAttachment(image, 'xopbotphub.png'));
    }
}