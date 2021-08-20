module.exports = {
    name: "xopchat",
    permissions: ["SEND_MESSAGES"],
    aliases: ['iwantxopchat', 'requestxopchat'],
    cooldown: 600000,
    description: 'let users request xop-chat',
    async execute(client, message, cmd, args, Discord) {
        //the channel you want the bug-reports to be send to
        const channel = client.channels.cache.get('853326730937106452')

        //look if there is a bug specified
        const query = args.join(' ');
        if (!query) return message.reply({ content: '**Please Enter The Channel Id That You Want The Bot To Talk To!**', allowedMentions: {repliedUser: true} })

        //create an embed for the bug report
        const reportEmbed = new Discord.MessageEmbed()
            .setColor('#c30202')
            .setTitle('**Xop-Chat Request Wanted!**')
            .addField('Author', message.author.toString(), true)
            .addField('Guild', message.guild.name, true)
            .addField('Channel Id', query)
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
        channel.send(reportEmbed);
        //send the embed to the channel
        message.channel.send({ content: "**We Have Sent The Request! \nCould Take 1 To 3 Days For The Request To Be Accepted!**" })
    }
}