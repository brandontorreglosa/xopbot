const DIG = require("discord-image-generation");
const lineReplyNoMention = require("discord-reply");
const color = process.env.Color;

module.exports = {
    name: "spank",
    cooldown: 10,
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    description: "you've been bad. you need spanking bad kid!",
    async execute(client, message, cmd, args, Discord) {
        if (!args[0]) {
            const nopr = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor(`${color}`)
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**\`(prefix)spank <@user>\`**`)
            return message.lineReplyNoMention(nopr)
        }
        const user = message.mentions.users.first();
        const avatar2 = message.author.displayAvatarURL({ size: 2048, dynamic: true, format: 'png' });
        const avatar = user.displayAvatarURL({ dynamic: true, format: 'png' });
        const img = await new DIG.Spank().getImage(`${avatar2}`, `${avatar}`);
        const attachment = new Discord.MessageAttachment(img, "xopbotspank.png")
        return message.lineReplyNoMention({ files: [attachment] });
    }
}