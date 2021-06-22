const math = require('mathjs');

module.exports = {
    name: 'math',
    permissions: ["SEND_MESSAGES"],
    cooldown: 3,
    aliases: ['mathprob', 'mathproblem'],
    premium: true,
async execute(client, message, cmd, args, Discord) {
    try {
        message.channel.send(
            new MessageEmbed()
            .addField("Question", args.join(" "))
            .addField("Solution", math.evaluate(args.join(" ")))
        );
    } catch (err) {
        message.channel.send("***Your Question Is Not A Valid Equation! \nMade By `👑HACKERPROᵈᵉᵛ#1498`***");
    }
},
};