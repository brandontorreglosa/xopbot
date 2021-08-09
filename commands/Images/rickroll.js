const errorChannel = process.env.errorChannel;
module.exports = {
    name: 'rickroll',
    permissions: ["SEND_MESSAGES"],
    cooldown: 5,
    description: 'get Rickrolled',
    async execute(client, message, cmd, args, Discord) {
        try {
            const user = message.mentions.users.first() || message.author;
            const embed = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#c30202')
                .setTitle(`OMG! You Just Got Rickrolled By ${message.author.username}`)
                .setImage('https://media1.tenor.com/images/23aeaaa34afd591deee6c163c96cb0ee/tenor.gif?itemid=7220603')
                .setFooter('You Just Got Rickrolled 😆')
            user.send(embed)
                .catch(() => message.channel.send("**That User Could Not Be Rickrolled!!**"))
                .then(() => message.channel.send(`**I Have Rickrolled ${user.tag}!**`));
        } catch (error) {
            const errorlogs = client.channels.cache.get(errorChannel);
            message.channel.send("**Looks Like An Error Has Occured!**");
            errorlogs.send("Error On Rickroll Command\n Error:\n" + error)
        }
    }
}