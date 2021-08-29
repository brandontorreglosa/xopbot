const lineReplyNoMention = require('discord-reply');
const profileModel = require("../../models/profileSchema");
module.exports = {
    name: 'robbery',
    permissions: ["SEND_MESSAGES"],
    cooldown: 10800,
    description: "Rob Command!",
    async execute(client, message, cmd, args, Discord) {
        const user = message.mentions.users.first()
        if (!user) return message.lineReplyNoMention({ content: '**`(prefix)robbery <@user>`**' })

        function random() {
            const num = Math.floor(Math.random() * 2)
            return num === 1
        }
        const targetData = await profileModel.findOne({ userID: user.id });
        if (!targetData) return message.channel.send({ content: `**This User Does Not Exist In The Database!**` });
        if (random() === true) {
            const RobAmount = Math.floor(Math.random() * 2000)
            message.lineReplyNoMention({ content: `**Cograts You Stole ${RobAmount} From ${user.username}**` })
            await profileModel.findOneAndUpdate(
                {
                    userID: message.author.id,
                },
                {
                    $inc: {
                        coins: RobAmount,
                    },
                },
                {
                    userID: user.id,
                },
                {
                    $inc: {
                        coins: -RobAmount,
                    },
                }
            );
        } else {
            const LooseAmount = Math.floor(Math.random() * 4000)
            message.channel.send({ content: `**Awwww! You Lost ${LooseAmount}. Better Luck Next Time!**` })
            await profileModel.findOneAndUpdate(
                {
                    userID: message.author.id,
                },
                {
                    $inc: {
                        coins: -LooseAmount,
                    },
                }
            );
        }
    }
}