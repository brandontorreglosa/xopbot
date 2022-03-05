const DIG = require("discord-image-generation");
const lineReplyNoMention = require("discord-reply");
const color = process.env.Color;

module.exports = {
    name: "monster",
    cooldown: 10,
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    description: "mum help! there's a monster under my bed.",
    async execute(client, message, cmd, args, Discord) {
        if (!args[0]) {
            const nopr = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor(`${color}`)
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**\`(prefix)monster <@user>\`**`)
            return message.lineReplyNoMention(nopr)
        }
        const user = message.mentions.users.first();
        const avatar2 = message.author.displayAvatarURL({ dynamic: true, format: 'png' });
        const avatar = user.displayAvatarURL({ dynamic: true, format: 'png' });
        const img = await new DIG.Bed().getImage(`${avatar2}`, `${avatar}`);
        const attachment = new Discord.MessageAttachment(img, "xopbotmonster.png")
        return message.lineReplyNoMention({ files: [attachment] });
    }
}