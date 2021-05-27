module.exports = {
    name: "bugreport",
    permissions: ["SEND_MESSAGES"],
    aliases: ['bug', 'reportbug'],
    cooldown: 20,
    description: 'let users report bugs',
    async execute(client, message, cmd, args, Discord){
        //the channel you want the bug-reports to be send to
        const channel = client.channels.cache.get('839389883486306304')

         //look if there is a bug specified
        const query = args.join(' ');
        if(!query) return message.reply('**Please Specify The Bug**')
        
         //create an embed for the bug report
        const reportEmbed = new Discord.MessageEmbed()
        .setTitle('**New Bug Found!**')
        .addField('Author', message.author.toString(), true)
        .addField('Guild', message.guild.name, true)
        .addField('Report', query)
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        .setTimestamp()
        channel.send(reportEmbed);
        //send the embed to the channel
        message.channel.send("**Bug Report Has Been Sent!**")
    }
}