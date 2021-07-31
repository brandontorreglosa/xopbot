module.exports = {
    name: 'suggestions',
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    aliases: ['sgs', 'suggest'],
    permissions: [],
    description: 'Create A Suggestion!',
    async execute(client, message, cmd, args, Discord) {
        const channel = message.guild.channels.cache.find(x => x.name.toLowerCase().includes("suggestions"));
        if (!channel) message.guild.channels.create(`suggestions`);
        // const channel = await message.guild.channels.create(`💡suggestions`);

        let messageArgs = args.join(' ');
        const embed = new Discord.MessageEmbed()
            .setColor('#c30202')
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
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