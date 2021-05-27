module.exports = {
    name: 'suggestions',
    permissions: ["SEND_MESSAGES"],
    aliases: ['sgs', 'suggest'],
    permissions: [],
    description: 'Create A Suggestion!',
    execute(client, message, cmd, args, Discord){
        const channel = message.guild.channels.cache.find(c => c.name === '💡suggestions');
        if(!channel) return message.channel.send('***💡suggestions Channel Does Not Exist!***')

        let messageArgs = args.join(' ');
        const embed = new Discord.MessageEmbed()
        .setColor('#c30202')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true}))
        .setDescription(messageArgs);

        channel.send(embed).then((msg) => {
            msg.react('👍');
            msg.react('👎');
            message.delete();
        }).catch((err) => {
            throw err;
        });
    }
}