// const moment = require('moment');

// module.exports = {
//     name: 'snipe',
//     permissions: ["MANAGE_MESSAGES"],
//     async execute(client, message, cmd, args, Discord) {
//         const snipes = client.snipes.get(message, channel.id);
//         if(!snipes) return message.reply('**XOPBOT Can Not Find Any Messages Recently Deleted In This Channel!**');

//         const snipe = +args[0] - 1 || 0;
//         const target = snipes[snipe];
//         if(!target) return message.reply(`**There Is Only ${snipes.length} Messages!**`);

//         const { msg, time, image} = target;
//         const embed = new Discord.MessageEmbed()
//         .setTitle(`OMG ${target} Got Sniped Down`)
//         .setDescription(msg.content)
//         .setAuthor(msg.author.tag, msg.author.displayAvatarURL())
//         .setImage(image)
//         .setFooter(`${moment(time).fromNow()} | ${snipe + 1} / ${snipes.length}`)
//         .setColor("RED")
//     }
// }