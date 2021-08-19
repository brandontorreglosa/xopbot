const nsfwSchema = require("../../models/registernsfw");

module.exports = {
    name: 'register',
    cooldown: 3,
    permissions: ["SEND_MESSAGES"],
    aliases: ['register-nsfw', 'nsfw-register'],
    async execute(client, message, cmd, args, Discord) {
        const member = message.author;
        message.channel.send({ content: `**By Registering For NSFW Commands You Confirm Your 18. 🔞 \nAnd XOPBOT Is Not Responsible For Any Consequences! Continue?**` });

        const filter = _message => message.author.id === _message.author.id && ['y', 'n', 'yes', 'no', 'ok', 'idk'].includes(_message.content.toLowerCase());
        const options = { max: 1, time: 30000, errors: ['time'] };
        const proceed = await message.channel.awaitMessages(filter, options)
            .then(collected => ['y', 'yes', 'ok'].includes(collected.first().content.toLowerCase()) ? true : false)
            .catch(() => false);

        if (!proceed) {
            return message.channel.send({ content: `**${message.author.username}**, You Cancelled The NSFW Registration!` });
        };

        nsfwSchema.findOne(
            {
                User: member.id,
            },
            async (err, data) => {
                if (data)
                    return message.reply({
                        content:
                            "***You Have Already Registered For NSFW Commands!***", allowedMentions: { repliedUser: true }
                    });

                new nsfwSchema({
                    User: member.id
                }).save();
                return message.reply({ content: `***Added ${member} To The NSFW Database! 🔞 \nHave Fun You Little Perv 😊***`, allowedMentions: { repliedUser: true } });
            }
        );



    },
}