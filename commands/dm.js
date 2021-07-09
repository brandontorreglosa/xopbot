const errorChannel = process.env.errorChannel;


module.exports = {
    name: 'dm',
    permissions: ["MANAGE_MESSAGES"],
    cooldown: 15,
    async execute(client, message, cmd, args, Discord) {
        try {
        var mentions = message.mentions.users.first();
                var dmMessage = args.slice(0).join(' ');
                if(!dmMessage) return message.channel.send(`${message.author.username} Couldnt Send Without A Message!`)
                mentions.send(`**${dmMessage}**`) 
            }  catch (err) {

                const errorlogs = client.channels.cache.get(errorChannel)
                errorlogs.send(`Error On Bot Server Command!\n\nError:\n\n ${err}`)
            }
        }
        }