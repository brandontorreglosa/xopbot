const premiumSchema = require("../../models/premium");

module.exports = {
    name: 'delete-premium',
    cooldown: 3,
    permissions: ["SEND_MESSAGES"],
    aliases: ['delete-p', 'r-p'],
    async execute(client, message, cmd, args, Discord) {
        if (message.member.id != "600094534386319370") return message.channel.send({ content: `**Sorry Only 👑HACKERPROᵈᵉᵛ#1498 Can Run This Command 😔**` });

        const member = message.mentions.users.first() || message.guild.members.cache.get(args[0]);

        if (!member) return message.reply({ content: '***Please Specify A Valid User!***', allowedMentions: { repliedUser: true } });

        premiumSchema.findOne(
            {
                User: member.id,
            },
            async (err, data) => {
                if (data)
                    return message.reply({
                        content:
                            "***This User Does Not Have Premium! 😭 \nBuy Premium From Here (https://www.patreon.com/user?u=52511474&fan_landing=true)***", allowedMentions: { repliedUser: true }
                    });

                data.delete();
                message.channel.send({ content: `***Removed ${member} From The Premium Database! 💲***` });
            }
        );



    },
}