const errorChannel = process.env.errorChannel;

module.exports = {
    name: 'say',
    cooldown: 3,
    permissions: ["SEND_MESSAGES"],
    description: "Make the bot say your message",
    async execute(client, message, cmd, args, Discord) {

        try {

            const user = message.mentions.users.first();

            if (!args[0]) {
                message.channel.send("**Please Add Some Text For Me XOPBOT To Repeat!**")
            }

            if (message.content.match("gore") || message.content.match("boob") || message.content.match("tits") || message.content.match("fuck") || message.content.match("shit") || message.content.match("nigga") || message.content.match("hoe") || message.content.match("bitch") || message.content.match("dick") || message.content.match("gay") || message.content.match("lesbian") || message.content.match("blowjob") || message.content.match("porn") || message.content.match("cunt")) {
                message.delete();
                const embed1 = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor('#c30202')
                    .setDescription(`** ${message.author.username}, Im Not Allowed To Say Bad Words! Lol Cry 😂**`)
                message.channel.send(embed1);
            }

            if (message.content.match("@") || message.content.match("<@")) {
                message.delete();
                const embed12 = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor('#c30202')
                    .setDescription(`**Im Not Allowed To Ping Users! If U Got Pinged ${message.author.username} Did It!**`)
                message.channel.send(embed12);
            }

            let sayMessage = args.slice(0).join(' ');
            if (sayMessage.length > 100) return message.channel.send('**You Are Not Allowed To Go Over 100 Characters!**');

            const embed = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#c30202')
                .setDescription(`**${sayMessage}**`)
            message.channel.send(embed);

        } catch (err) {
            const errorlogs = client.channels.cache.get(errorChannel)
            errorlogs.send(`**Error On Say Command!\n\nError:\n\n ${err}**`)
        }
    }
}