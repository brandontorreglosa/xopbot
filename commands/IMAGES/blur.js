const lineReplyNoMention = require("discord-reply");
const color = process.env.Color;
module.exports = {
    name: "blur",
    cooldown: 10,
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    description: "just blur a photo",
    async execute(client, message, cmd, args, Discord) {
        const user = message.mentions.users.first() || message.author;
        const avatar = user.displayAvatarURL({ size: 2048, dynamic: true, format: 'png' });
        message.lineReplyNoMention({ files: [{ attachment: `https://api.popcat.xyz/blur?image=${avatar}`, name: "xopbotblur.png" }] });
    }
}