const premiumSchema =  require("../models/premium");

module.exports = {
    name: 'delete-premium',
   async execute(client, message, cmd, args, Discord) {
    if (message.member.id != "600094534386319370") return message.channel.send(`**Sorry Only 👑HACKERPROᵈᵉᵛ#1498 Can Run This Command 😔**`);

    const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);

    if(!memeber) return message.reply('***Please Specify A Valid User!***');

    premiumSchema.findOne(
        {
            User: member.id,
        },
        async (err,data) => {
            if (data)
            return message.reply(
                "This User Does Not Have Premium"
            );

            data.delete();
            message.channel.send(`***Removed ${user} From The Premium Database!***`);
        }
    );



    },
}