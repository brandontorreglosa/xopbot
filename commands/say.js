module.exports = {
    name: 'say',
    permissions: ["SEND_MESSAGES"],
    description: "Make the bot say your message",
    async execute(client, message, cmd, args, Discord) {

        const channel = client.channels.cache.get('860085472944848927')

        const user = message.mentions.users.first();

        let sayMessage = args.slice(0).join(' ');
        if (sayMessage.length > 65) return message.channel.send('**You Are Not Allowed To Go Over 65 Characters!**');


        if (message.content.match("gore") || message.content.match("fuck") || message.content.match("shit") || message.content.match("nigga") || message.content.match("hoe") || message.content.match("bitch") || message.content.match("dick") || message.content.match("gay") || message.content.match("lesbian") || message.content.match("blowjob") || message.content.match("porn") || message.content.match("cunt")) {
            message.delete();
            message.reply(`**You Have Been Reported To The Developer!**`);
            // message.delete(4000);
            const embed = new Discord.MessageEmbed()
                .setTimestamp()
                .setTitle(`Author \n${message.author.username} Used The Say Command!`)
                .setDescription(`Guild \nIn ${message.guild.name} \nHe Commanded This Word ${sayMessage}`)
            channel.send(embed);
        }

        if (!args[0]) {
            message.channel.send("**Please Add Some Text for Me XOPBOT To Repeat! \nAnything Rude Is Sended To The Developer!**")
        }

        message.channel.send(`${sayMessage}`, { allowedMentions: { parse: ["users"] } });
        //  message.delete(10000);
    }
}