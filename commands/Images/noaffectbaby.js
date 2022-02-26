const DIG = require('discord-image-generation');
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;

module.exports = {
    name: "noaffectbaby",
    aliases: ['noaffectmybaby', 'affectbaby', 'babyaffect'],
    cooldown: 10,
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    description: 'just dont affect the baby',
    async execute(client, message, cmd, args, Discord) {
        const user = message.mentions.users.first() || message.author;
        const avatar = user.displayAvatarURL({ dynamic: true, format: 'png' });
        const img = await new DIG.Affect().getImage(`${avatar}`);
        const attachment = new Discord.MessageAttachment(img, "xopbotnoaffectbaby.png")
        return message.lineReplyNoMention({ files: [attachment] });
    }
}