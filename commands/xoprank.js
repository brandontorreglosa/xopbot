module.exports = {
    name: 'xoprank',
    permissions: ["MANAGE_MESSAGES"],
    aliases: ['xrank', 'xr'],
    description: "Embeds!",
    execute(client, message, cmd, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true}))
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        .setColor('#c30202')
        .setTitle('**Rank Leaderboard**')
        .addFields(
        {name: '1st', value: '_**@HACKERPROTMᵈᵉᵛ#1498 Wallet: 1000000 Xocoins | Bank: 19288022 Xocoins**_'},
        {name: '2nd', value: '_**@Texro#8894 Wallet: 92607 Xocoins | Bank: 5120000 Xocoins**_'},
        {name: '3rd', value: '_**@Damn Hero#8189 Wallet: 71000 Xocoins | Bank: 0 Xocoins**_'},
        {name: '4th', value: '_**@Soup#4376 Wallet: 2000 Xocoins | Bank: 23000 Xocoins**_'},
        {name: '5th', value: '_**@imG#0001 Wallet: 21000 Xocoins | Bank: 0 Xocoins**_'}
        )
        .setFooter('***The Rank Leaderboard Changes Every 5 Days!***');

        message.channel.send(newEmbed);
    }
}