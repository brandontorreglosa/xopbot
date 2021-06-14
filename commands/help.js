const os = require('os')

module.exports = {
    name: "help",
    aliases: ['help moderation', 'help utility', 'help bugs', 'help status', 'help socials', 'help usage', 'help fun', 'help music', 'help economy', 'help leveling', 'help nsfw', 'help premium', 'help invites', 'help credits'],
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
     async execute(client, message, cmd, args, Discord) {

        if(cmd === 'help') {
        const embed = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
            .setTitle('XOPBOT Commands')
            .setColor('#c30202')
            .addFields(
                {
                    name: '__🛠️ Moderation__',
                    value: '`-help moderation`',
                    inline: true
                },
                {
                    name: '__⚙ Utility__',
                    value: '`-help utility`',
                    inline: true
                },
                {
                    name: '__🐛 Bugs__',
                    value: '`-help bugs`',
                    inline: true
                },
                {
                    name: '__📈 Status__',
                    value: '`-help status`',
                    inline: true
                },
                {
                    name: '__💬 Socials__',
                    value: '`-help socials`',
                    inline: true
                },
                {
                    name: '__🤖 Usage__',
                    value: '`-help usage`',
                    inline: true
                },
                {
                    name: '__🥳 Fun__',
                    value: '`-help fun`',
                    inline: true
                },
                {
                    name: '__🎶 Music__',
                    value: '`-help music`',
                    inline: true
                },
                {
                    name: '__🤑 Economy__',
                    value: '`-help economy`',
                    inline: true
                },
                {
                    name: '__⏫ Leveling__',
                    value: '`-help leveling`',
                    inline: true
                },
                {
                    name: '__🔞 NSFW__',
                    value: '`-help nsfw`',
                    inline: true
                },
                {
                    name: '__👑 Premium__',
                    value: '`-help premium`',
                    inline: true
                },
                {
                    name: '__🔗 Invites__',
                    value: '`-help invites`',
                    inline: true
                },
                {
                    name: '__🤖 Credits__',
                    value: '`-help credits`',
                    inline: true
                }
                
            )
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

        await message.channel.send(embed)
    }

    else if(cmd === 'help moderation') {
        const embed2 = new Discord.MessageEmbed()
        .setThumbnail(client.user.displayAvatarURL())
        .setTimestamp()
        .setTitle('Bot Stats')
        .setColor('#000000')
        .addFields(
            {name: '__🛠️ Moderation__', value: '`ban`-__***Ban A Member From A Server!***__  `\nkick`-__***Kick A Member From A Server!***__  `\n\mute`-__***Mute A Member From A Server!***__  `\n\mute timed`-__***Time Mute A Member From A Server!***__  `\nunmute`-__***Unmute A Member From A Server!***__  `\n\clear`-__***Clear Messages From A Server!***__  `\n\command`-__***Gives Basic Server Rules Of A Server!***__  `\n\slowmode`-__***Add Slowmode To A Text Channel!***__ `\naddrole`-__***Add A Role To A User!***__ `\nremoverole`-__***Remove A Role From A User!***__ `\nsetnick`-__***Set A Server Nickname!***__ `\nresetnick`-__***Reset To Normal Nickname!***__ `\nlock`-__***Lock A Channel From A Specific Role!***__ `\nunlock`-__***Unlock A Channel From A Specific Role!***__'},
        )
        .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

    await message.channel.send(embed2)
    }
}
}