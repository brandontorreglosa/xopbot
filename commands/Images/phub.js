const { Canvas } = require('canvacord');

module.exports = {
    name: 'phub',
    cooldown: 8,
    permissions: ["SEND_MESSAGES"],
    description: 'what are you doing here?',
    async execute(client, message, cmd, args, Discord) {
        const mention = message.mentions.members.first() || message.member;
        const avatar = mention.user.displayAvatarURL({ format: "png" });

        if (!args[0])
            return message.reply({ content: '**Please Provide Some Text!**', allowedMentions: { repliedUser: true } })

        const bidenMessage = args.slice(0).join(' ')
        const member = message.author.tag;
        if (bidenMessage.length > 15) return message.reply({ content: '**You Are Not Allowed To Go Over 15 Characters!**', allowedMentions: { repliedUser: true } });

        const image = await Canvas.phub({
            username: member,
            message: bidenMessage,
            image: avatar,
        });

        const attachment = new Discord.MessageAttachment(image, "phub.png");
        return message.channel.send({ files: [{ attachment: image }] });
    }
}