const premiumSchema = require("../../models/premium");
const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: 'donate-premium',
    cooldown: 3,
    permissions: ["SEND_MESSAGES"],
    aliases: ['donate-p', 'd-p'],
    async execute(client, message, cmd, args, Discord) {
        if (message.member.id != "600094534386319370") return message.lineReplyNoMention({ content: `**Sorry Only 👑HACKERPROᵈᵉᵛ#1498 Can Run This Command 😔**` });

        const member = message.mentions.users.first() || message.guild.members.cache.get(args[0]);

        if (!member) return message.lineReplyNoMention({ content: '***Please Specify A Valid User!***' }) //, allowedMentions: { repliedUser: true } });

        premiumSchema.findOne(
            {
                User: member.id,
            },
            async (err, data) => {
                if (data)
                    return message.lineReplyNoMention({
                        content:
                            "***This User Has Already Premium Features***" //, allowedMentions: { repliedUser: true }
                    });

                new premiumSchema({
                    User: member.id
                }).save();
                return message.lineReplyNoMention({ content: `***Added ${member} To The Premium Database! 💲***` }) //, allowedMentions: { repliedUser: true } });
            }
        );



    },
}