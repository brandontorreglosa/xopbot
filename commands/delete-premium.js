const premiumSchema = require("../models/premium");

module.exports = {
    name: 'delete-premium',
    permissions: ["SEND_MESSAGES"],
    aliases: ['delete-p', 'r-p'],
    async execute(client, message, cmd, args, Discord) {
        if (message.member.id != "600094534386319370") return message.channel.send(`**Sorry Only 👑HACKERPROᵈᵉᵛ#1498 Can Run This Command 😔**`);

        const member = message.mentions.users.first() || message.guild.members.cache.get(args[0]);

        if (!member) return message.reply('***Please Specify A Valid User!***');

        premiumSchema.findOne(
            {
                User: member.id,
            },
            async (err, data) => {
                if (data)
                    return message.reply(
                        "***This User Does Not Have Premium! 😭 \nBuy Premium From Here (https://www.patreon.com/user?u=52511474&fan_landing=true)***"
                    );

                data.delete();
                message.channel.send(`***Removed ${member} From The Premium Database! 💲***`);
            }
        );



    },
}