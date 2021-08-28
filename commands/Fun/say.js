const errorChannel = process.env.errorChannel;
const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: 'say',
    cooldown: 3,
    permissions: ["SEND_MESSAGES"],
    description: "Make the bot say your message",
    async execute(client, message, cmd, args, Discord) {

        try {

            //const channel = client.channels.cache.get('860085472944848927')

            const user = message.mentions.users.first();

            if (!args[0]) {
                message.lineReplyNoMention({ content: "**`(prefix)say <text>`**" })
            }

            if (message.content.match("gore") || message.content.match("boob") || message.content.match("tits") || message.content.match("fuck") || message.content.match("shit") || message.content.match("nigga") || message.content.match("hoe") || message.content.match("bitch") || message.content.match("dick") || message.content.match("gay") || message.content.match("lesbian") || message.content.match("blowjob") || message.content.match("porn") || message.content.match("cunt") || message.content.match("@")) {
                message.delete();
                const embed1 = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor('#c30202')
                    .setDescription(`**${message.author.username}, Im Not Allowed To Say Bad Words Or Ping! Lol Cry 😂**`)
                message.lineReplyNoMention(embed1)
            }

            let sayMessage = args.slice(0).join(' ');
            if (sayMessage.length > 100) return message.lineReplyNoMention({ content: '**You Are Not Allowed To Go Over 100 Characters!**' });

            const embed = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#c30202')
                .setDescription(`**${sayMessage}**`)
            message.lineReplyNoMention(embed);

        } catch (err) {
            const errorlogs = client.channels.cache.get(errorChannel)
            errorlogs.send({ content: `**Error On Say Command!\n\nError:\n\n ${err}**` })
        }
    }
}