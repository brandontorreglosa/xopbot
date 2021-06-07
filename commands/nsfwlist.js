module.exports = {
    name: 'nsfwlist',
    description: "nsfw",
    permissions: ["SEND_MESSAGES"],
    execute(client, message, cmd, args, Discord) {

        if (!message.channel.nsfw) return message.channel.send('**This Is Not A NSFW Channel! 🔞**') 

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#c30202')
        .setTimestamp()
        .setTitle('NSFW List')
        .addFields(
            {name: '🔞 NSFW', value: '`4k,hentai,neko,pgif`'}
        )
        .setFooter('Bot Developer @👑HACKERPRO™#9999');

        message.channel.send(newEmbed);
    }

}
