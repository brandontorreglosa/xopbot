const { Calculator } = require("weky");
const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: 'math',
    permissions: ["SEND_MESSAGES"],
    cooldown: 3,
    aliases: ['mathprob', 'mathproblem'],
    premium: true,
    async execute(client, message, cmd, args, Discord) {
        await Calculator({
            message: message,
            embed: {
                title: 'Calculator v12',
                color: '#c30202',
                timestamp: true
            },
            disabledQuery: '**Calculator Is Disabled!**',
            invalidQuery: '**The Provided Equation Is Invalid!**',
            othersMessage: '**Only <@{{author}}> Can Use The Buttons!**'
        });
    }
}