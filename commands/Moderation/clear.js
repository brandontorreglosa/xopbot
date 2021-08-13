module.exports = {
    name: 'clear',
    permissions: ["MANAGE_MESSAGES"],
    cooldown: 4,
    description: "Clear messages!",
    async execute(client, message, cmd, args, Discord) {
        try {
            if (!args[0]) return message.reply({ content: "**Please Enter The Amount Of Messages To Clear!**", allowedMentions: { repliedUser: true } });

            if (isNaN(args[0])) return message.reply({ content: "**Please Type A Real Number!**", allowedMentions: { repliedUser: true } });

            if (args[0] > 100) return message.reply({ content: "**You Cant Delete More Than 100 messages!**", allowedMentions: { repliedUser: true } });

            if (args[0] < 1) return message.reply({ content: "**You Have To Delete At Least One Message!**", allowedMentions: { repliedUser: true } });

            await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
                message.channel.bulkDelete(messages)
                message.reply({ content: `**Successfully** Deleted **${messages.size}** Messages.`, allowedMentions: { repliedUser: true } })
                    .then(message => {
                        setTimeout(() => message.delete(), 3000);
                    })
            });
        } catch (err) {
            return message.channel.send({ content: '**Cannot Delete Message Old Than 14 Days!**' })
        }

    }
}