module.exports = {
    name: 'clear',
    permissions: ["MANAGE_MESSAGES"],
    cooldown: 3,
    description: "Clear messages!",
    async execute(client, message, cmd, args, Discord) {
        if (!args[0]) return message.reply("**Please Enter The Amount Of Messages To Clear!**");

        if (isNaN(args[0])) return message.reply("**Please Type A Real Number!**");

        if (args[0] > 100) return message.reply("**You Cant Delete More Than 100 messages!**");

        if (args[0] < 1) return message.reply("**You Have To Delete At Least One Message!**");

        await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
            message.channel.bulkDelete(messages)
            message.reply(`**Successfully** Deleted **${messages.size}** Messages.`)
                .then(message => {
                    message.delete({ timeout: 3000 })
                })
        });

    }
}


