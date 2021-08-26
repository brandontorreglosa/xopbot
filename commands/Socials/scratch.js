module.exports = {
    name: 'scratch',
    cooldown: 3,
    permissions: ["SEND_MESSAGES"],
    description: "Sends The Owners Youtube Channel!",
    execute(client, message, cmd, args, Discord) {
        const embed = new Discord.MessageEmbed()
            .setColor('#c30202')
            .setTimestamp()
            .setTitle('My Scratch Account')
            .setURL('https://scratch.mit.edu/users/COOLBLUEINKLINGTM/')
            .addField(
                { name: 'Scratch Link', value: '[Click Here](https://scratch.mit.edu/users/COOLBLUEINKLINGTM/)' }
            )
        message.channel.send(embed);
    }
}