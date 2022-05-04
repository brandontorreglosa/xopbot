const lineReplyNoMention = require("discord-reply");
const color = process.env.Color;
const DIG = require("discord-image-generation");
module.exports = {
    name: "jail",
    cooldown: 10,
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    description: "you went to jail, stop doing bad stuff you're only 13!",
    async execute(client, message, cmd, args, Discord) {
        const user = message.mentions.users.first() || message.author;
        const avatar = user.displayAvatarURL({ size: 2048, dynamic: true, format: 'png' });
        const img = await new DIG.Jail().getImage(`${avatar}`);
        const attachment = new Discord.MessageAttachment(img, "xopbotjail.png")
        return message.lineReplyNoMention({ files: [attachment] });
    }
}