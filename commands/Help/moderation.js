module.exports = {
    name: 'moderation',
    aliases: ['mod'],
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    async execute(client, message, cmd, args, Discord) {
        message.react('⛏');

        const embed2 = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
            //.setTitle('__🛠️ Moderation__')
            .setColor('#c30202')
            .addFields(
                { name: '__🛠️ Moderation (20)__', value: '`dm`-__***Dm A User!***__  \n`ban`-__***Ban A Member From A Server!***__ \n`unban`-__***Unban A Member From A Server!***__  \n`kick`-__***Kick A Member From A Server!***__ \n`mute`-__***Mute A Member From A Server!***__ \n`unmute`-__***Unmute A Member From A Server!***__ \n`nuke`-__***Clear A Channel!***__ \n`clear`-__***Clear Messages From A Server!***__  \n`command`-__***Gives Basic Server Rules Of A Server!***__  \n`slowmode`-__***Add Slowmode To A Text Channel!***__ \n`addrole`-__***Add A Role To A User!***__ \n`removerole`-__***Remove A Role From A User!***__ \n`createembed`-__***Create A Custom Embed!***__ \n`createtext`-__***Create A Text Channel!***__ \n`createvoice`-__***Create A Voice Channel!***__ \n`deletechannel`-__***Delete A Channel!***__ \n`userlock`-__***Lock A Role From A Specific Channel!***__ \n`userunlock`-__***Unlock A Role From A Specific Channel!***__ \n`channellock`-__***Lock A Channel!***__ \n`channelunlock`-__***Unlock A Channel!***__' },
            )
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

        await message.channel.send(embed2)
    }
}