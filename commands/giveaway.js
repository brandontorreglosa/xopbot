const ms = require('ms')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'giveaway',
    permissions: ["MANAGE_MESSAGES"],
    async execute(client, message, cmd, args, Discord) {  
        const channel = message.mentions.channels.first()
        if(!channel) return message.channel.send('**Please Specify A Channel!**')

        const duration = args[1]
        if(!duration) return message.channel.send('**Please Enter A Valid Duration!**')

        const winners = args[2]
        if(!winners) return message.channel.send('**Please Specify An Amount Of Winners!**')

        const prize = args.slice(3).join(" ")
        if(!prize) return message.channel.send('**Please Specify A Prize To Win**')

        client.giveaways.startGiveaway(channel, {
            time : ms(duration),
            prize : prize,
            winnerCount: winners,
            hostedBy: message.author,
            messages: {
                giveaway:  "🎉🎉 **GIVEAWAY** 🎉🎉",
                giveawayEnd:  "🎉🎉 **GIVEAWAY ENDED** 🎉🎉",
                timeRemaining: "Time Remaining **{duration}**",
                inviteToParticipate: "React with 🎉 to join the giveaway",
                winMessage: "Congrats {winners}, You Have Won This Giveaway",
                embedFooter: "Giveaway Time!",
                noWinner: "Could not determine a winner",
                hostedBy: 'Hosted by {user}',
                winners: "winners",
                endedAt: 'Ends at',
                units: {
                    seconds: "seconds",
                    minutes: "minutes",
                    hours: 'hours',
                    days: 'days',
                    pluralS: false
                }
            },
           
        })
        message.channel.send(`**Giveaway Is Starting In ${channel}**`)
    }
}