const ms = require('ms')

module.exports = {
    name: 'end',
    permissions: ["MANAGE_MESSAGES"],
    async execute(client, message, cmd, args, Discord)  {
        if(!args[0]) return message.channel.send('Please specify a message id')

        const giveaway = client.giveaways.giveaways.find((g) => g.messageID === args.join(" "))
        if(!giveaway) return message.channel.send('Giveaway not found')

        client.giveaways.edit(giveaway.messageID, {
            setEndTimestamp: Date.now()
        }).then(()  => {
            message.channel.send(`**Giveaway Wil End In Less Than ${client.giveaway.options.updateCountdownEvery / 1000} Seconds!**`)
        }).catch(err => {
            console.log(err)
            message.channel.send('An error occured')
        })
        
    }
}