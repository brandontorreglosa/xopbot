const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'reroll',
    permissions: ["MANAGE_MESSAGES"],
    async execute(client, message, cmd, args, Discord)  {
        if(!args[0]) return message.channel.send('Please specify a message id')

        const giveaway = client.giveaways.giveaways.find((g) => g.messageID === args[0]);
        if(!giveaway) return message.channel.send('Couldn\'t find the giveaway.')

        client.giveaways.reroll(giveaway.messageID)
            .then(() => {
                message.channel.send("**Giveaway Rerolled**");
            })
            .catch(err => {
                console.log(err)
            })
    }
}