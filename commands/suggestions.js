module.exports = {
    name: 'suggestions',
    permissions: ["SEND_MESSAGES"],
    aliases: ['sgs', 'suggest'],
    permissions: [],
    description: 'Create A Suggestion!',
    async execute(client, message, cmd, args, Discord) {
        const channel = await message.guild.channels.create(`💡suggestions`);
        //if(!channel) return message.channel.send('***💡suggestions Channel Does Not Exist! \nMake Sure To Make A Channel Called `💡suggestions`!***')

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