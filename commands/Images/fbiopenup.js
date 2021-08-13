const errorChannel = process.env.errorChannel;
module.exports = {
    name: 'fbiopenup',
    aliases: ['fbi', 'fbi-open-up'],
    permissions: ["SEND_MESSAGES"],
    cooldown: 5,
    description: 'Knock Knock FBI OPEN UP!',
    async execute(client, message, cmd, args, Discord) {
        try {
            const user = message.mentions.users.first()
            if (!args[0]) {
                return message.reply({ content: '**You Must Mention A User For The FBI To Get! 🤪**', allowedMentions: { repliedUser: true } })
            }
            if (message.mentions.users.first().bot) {
                return message.reply({ content: '**You Can Not Send The FBI To Bot`s! They Will Escape 😢**', allowedMentions: { repliedUser: true } })
            }
            const embed = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#c30202')
                .setTitle(`RUN! The FBI Found You Thanks To ${message.author.username}`)
                .setImage('https://cdn.discordapp.com/attachments/824319314495537175/874580794503467018/ezgif.com-gif-maker_1.gif')
                .setFooter('You Are Now In Danger Get Out 😨')
            user.send({ embeds: [embed] })
                .catch(() => message.channel.send({ content: "**The FBI Couldn`t Get To That User! 😭**" }))
                .then(() => message.channel.send({ content: `**The FBI Is Already At ${user.tag} House! 😉**` }));
        } catch (error) {
            const errorlogs = client.channels.cache.get(errorChannel);
            message.channel.send({ content: "**Looks Like An Error Has Occured!**" });
            errorlogs.send({ content: "Error On FBI Command\n Error:\n" + error })
        }
    }
}