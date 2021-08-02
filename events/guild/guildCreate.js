client.on('guildCreate', (guild) => {
    let channeltoSend;
    guild.channels.cache.forEach((channel) => {
        if (
            channel.type === "text" &&
            !channeltoSend &&
            channel.permissionsFor(guild.me).has("SEND_MESSAGES")
        ) channeltoSend = channel;
    });
    if (!channeltoSend) return;

    const letjoinembed = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor('#c30202')
        .setDescription(`**XOPBOT Thanks You For Inviting Me To ${message.guild.name}** \n\n**About Me** XOPBOT Is A Multipurpose Bot With Over 160+ Commands! \nIts Very Safe To Users And Also Customizable To Admins, \nWith XOPBOT The Server Runs So Smooth, Its Like Your In A Dream! \nXOPBOT Is 24/7 Always Except On Updates :) \n\n**XOPBOT Not Working?** \nIf You Encounter A Bug Try Doing x!findbugs And Then x!clearbugs \nYou Can Also Kick The Bot And Re-Add It Back If It Dont Respond! \nLastly You Can Check If THe Bot Is Offline!`)
        .setFooter('Once Again Thank You For Inviting Me 😉')
    channeltoSend.send(letjoinembed).catch(e => {
        if (e) {
            return;
        }});
})