const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: 'clear',
    permissions: ["MANAGE_MESSAGES"],
    cooldown: 4,
    description: "Clear messages!",
    async execute(client, message, cmd, args, Discord) {
        try {
            if (!args[0]) return message.lineReplyNoMention({ content: "**`(prefix)clear <number>`**"}) //, allowedMentions: { repliedUser: true } });

            if (isNaN(args[0])) return message.lineReplyNoMention({ content: "**Please Type A Real Number!**"}) //, allowedMentions: { repliedUser: true } });

            if (args[0] > 100) return message.lineReplyNoMention({ content: "**You Cant Delete More Than 100 messages!**"}) //, allowedMentions: { repliedUser: true } });

            if (args[0] < 1) return message.lineReplyNoMention({ content: "**You Have To Delete At Least One Message!**"}) //, allowedMentions: { repliedUser: true } });

            await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
                message.channel.bulkDelete(messages)
                message.lineReplyNoMention({ content: `**Successfully** Deleted **${messages.size}** Messages.`}) //, allowedMentions: { repliedUser: true } })
                    .then(message => {
                        setTimeout(() => message.delete(), 4000);
                    })
            });
        } catch (err) {
            return message.lineReplyNoMention({ content: '**Cannot Delete Message Old Than 14 Days!**' })
        }

    }
}