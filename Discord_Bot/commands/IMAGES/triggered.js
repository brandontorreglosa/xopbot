// const { Canvas } = require('canvacord');
// const lineReplyNoMention = require('discord-reply');
// module.exports = {
//     name: 'triggered',
//     cooldown: 8,
//     permissions: ["SEND_MESSAGES"],
//     clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
//     description: 'what are you doing here?',
//     async execute(client, message, cmd, args, Discord) {
//         const user = message.mentions.users.first() || message.author;
//         const avatar = user.displayAvatarURL({ size: 2048, format: "png" });

//         const image = await Canvas.trigger(avatar);

//         const attachment = new Discord.MessageAttachment(image, "xopbottriggered.gif");
//         return message.lineReplyNoMention({ files: [{ attachment: image }] });
//     }
// }