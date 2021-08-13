const errorChannel = process.env.errorChannel;
module.exports = {
    name: 'rickroll',
    permissions: ["SEND_MESSAGES"],
    cooldown: 5,
    description: 'get Rickrolled',
    async execute(client, message, cmd, args, Discord) {
        try {
            const user = message.mentions.users.first()
            if (!args[0]) {
                return message.reply({ content: '**You Must Mention A User To Rickroll! 🤪**', allowedMentions: { repliedUser: true } })
            }
            if (message.mentions.users.first().bot) {
                return message.reply({ content: '**You Can Not Rickroll Bot`s! They Wont See It 😢**', allowedMentions: { repliedUser: true } })
            }
            const embed = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#c30202')
                .setTitle(`OMG! You Just Got Rickrolled By ${message.author.username}`)
                .setImage('https://media1.tenor.com/images/23aeaaa34afd591deee6c163c96cb0ee/tenor.gif?itemid=7220603')
                .setFooter('You Just Got Rickrolled 😆')
            user.send({ embeds: [embed] })
                .catch(() => message.channel.send({ content: "**That User Could Not Be Rickrolled! 😭**" }))
                .then(() => message.channel.send({ content: `**I Have Rickrolled ${user.tag}! 😉**` }));
        } catch (error) {
            const errorlogs = client.channels.cache.get(errorChannel);
            message.channel.send({ content: "**Looks Like An Error Has Occured!**" });
            errorlogs.send({ content: "Error On Rickroll Command\n Error:\n" + error })
        }
    }
}