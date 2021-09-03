const math = require('mathjs');
const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: 'math',
    permissions: ["SEND_MESSAGES"],
    cooldown: 3,
    aliases: ['mathprob', 'mathproblem'],
    premium: true,
    async execute(client, message, cmd, args, Discord) {
        try {
            if (!args[0]) return message.channel.send({ content: "**`(prefix)math <equation>`**" });

            const embed = new MessageEmbed()
                .setColor('#c30202')
                .setTitle(`Result`)
                .setDescription(math.evaluate(args.join(" ")))
                .setTimestamp();

            message.lineReplyNoMention(embed);
        } catch (err) {
            message.lineReplyNoMention({ content: "**Your Question Is Not A Valid Equation! \nMade By `👑HACKERPROᵈᵉᵛ#1498`**" });
        }
    },
};