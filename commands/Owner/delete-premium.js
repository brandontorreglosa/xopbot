const premiumSchema = require("../../models/premium");
const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: 'delete-premium',
    cooldown: 3,
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    aliases: ['delete-p', 'r-p'],
    async execute(client, message, cmd, args, Discord) {
        if (message.member.id != "600094534386319370") return message.lineReplyNoMention({ content: `**Sorry Only 👑HACKERPROᵈᵉᵛ#1498 Can Run This Command 😔**` });

        const member = message.mentions.users.first() || message.guild.members.cache.get(args[0]);

        if (!member) return message.lineReplyNoMention({ content: '**Please Specify A Valid User!**' }) //, allowedMentions: { repliedUser: true } });

        premiumSchema.findOne(
            {
                User: member.id,
            },
            async (err, data) => {
                if (data)
                    return message.lineReplyNoMention({
                        content:
                            "**This User Does Not Have Premium! 😭 \nBuy Premium From Here (https://www.patreon.com/user?u=52511474&fan_landing=true)**" //, allowedMentions: { repliedUser: true }
                    });

                data.delete();
                message.lineReplyNoMention({ content: `**Removed ${member} From The Premium Database! 💲**` });
            }
        );



    },
}