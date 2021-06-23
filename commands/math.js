const math = require('mathjs');

module.exports = {
    name: 'math',
    permissions: ["SEND_MESSAGES"],
    cooldown: 3,
    aliases: ['mathprob', 'mathproblem'],
    premium: true,
async execute(client, message, cmd, args, Discord) {
    try {
        if (!args[0]) return message.channel.send("**Please Give Me Equation!**");

        const embed = new MessageEmbed()
          .setColor(`${Color}`)
          .setTitle(`Result`)
          .setDescription(math.evaluate(args.join(" ")))
          .setTimestamp();
  
        message.channel.send(embed);
    } catch (err) {
        message.channel.send("***Your Question Is Not A Valid Equation! \nMade By `👑HACKERPROᵈᵉᵛ#1498`***");
    }
},
};