const premiumSchema =  require("../models/premium");

module.exports = {
    name: 'donate-premium',
    cooldown: 3,
    permissions: ["SEND_MESSAGES"],
    aliases: ['donate-p', 'd-p'],
   async execute(client, message, cmd, args, Discord) {
    if (message.member.id != "600094534386319370") return message.channel.send(`**Sorry Only 👑HACKERPROᵈᵉᵛ#1498 Can Run This Command 😔**`);

    const member = message.mentions.users.first() || message.guild.members.cache.get(args[0]);

    if(!member) return message.reply('***Please Specify A Valid User!***');

    premiumSchema.findOne(
        {
            User: member.id,
        },
        async (err,data) => {
            if (data)
            return message.reply(
                "***This User Has Already Premium Features***"
            );

            new premiumSchema({
                User: member.id
            }).save();
            return message.reply(`***Added ${member} To The Premium Database! 💲***`);
        }
    );



    },
}