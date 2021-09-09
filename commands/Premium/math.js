const math = require('mathjs');
const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: 'math',
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    cooldown: 3,
    aliases: ['mathprob', 'mathproblem'],
    premium: true,
    async execute(client, message, cmd, args, Discord) {
        try {

            if (!args[0]) {
                const nopr = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor('#c30202')
                    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`**\`(prefix)math <equation>\`**`)
                return message.lineReplyNoMention(nopr)
            }

            const embed = new MessageEmbed()
                .setColor('#c30202')
                .setAuthor(`RESULT`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(math.evaluate(args.join(" ")))
                .setTimestamp();

            message.lineReplyNoMention(embed);
        } catch (err) {
            const catcher = args.slice(0).join(" ");
            const noequatic = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#c30202')
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**\`${catcher}\` Is Not A Valid Equation!**`)
            message.lineReplyNoMention(noequatic)
        }
    },
};