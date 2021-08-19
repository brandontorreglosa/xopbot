module.exports = {
    name: 'config',
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    async execute(client, message, cmd, args, Discord) {
        message.react('🌘');

        const embed15 = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
            //.setTitle('__🎮 Games__')
            .setColor('#c30202')
            .addFields(
                { name: '__⚠ Config (9)__', value: '`antiwords`-__***Setup Bad Words Detector!***__ \n`antilink`-__***Setup Antilink On A Server!***__ \n`autonsfw`-__***Setup Autonsfw On A Server!***__ \n`automeme`-__***Setup Automeme On A Server!***__ \n`joinchannel`-__***Setup The Join Channel!***__ \n`leavechannel`-__***Setup The Leave Channel!***__ \n`joinmesage`-__***Setup The Join Message!***__ \n`leavemessage`-__***Setup The Leave Message!***__ \n`setprefix`-__***Set The Server Prefix!***__' }
            )
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

        await message.channel.send({ embeds: [embed15] })
    }
}