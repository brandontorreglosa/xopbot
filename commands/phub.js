const { Canvas } = require('canvacord');

module.exports = {
    name: 'phub',
    permissions: ["SEND_MESSAGES"],
    description: 'what are you doing here?',
    async execute(client, message, cmd, args, Discord) {
        const mention = message.mentions.members.first() || message.member;
        const avatar = mention.user.displayAvatarURL({ format: "png" });

        if (!args[0])
            return message.channel.send('**Please Provide Some Text!**')

        const bidenMessage = args.slice(0).join(' ')
        const member = message.author.tag;
        if (bidenMessage.length > 15) return message.channel.send('**You Are Not Allowed To Go Over 15 Characters!**');

        const image = await Canvas.phub({
            username: member,
            message: bidenMessage,
            image: avatar,
        });

        const attachment = new Discord.MessageAttachment(image, "phub.png");
        return message.channel.send(attachment);
    }
}