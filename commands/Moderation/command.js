
module.exports = {
    name: 'command',
    cooldown: 5,
    permissions: ["MANAGE_MESSAGES"],
    description: "Embeds!",
    execute(client, message, cmd, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#c30202')
            .setTitle('Rules')
            .setURL('https://www.youtube.com/channel/UCCfKUHKPwTullX7aoFUjCIQ/featured')
            .setDescription('**These Are The Server Rules Please Read Them Carefully ^_^**')
            .addFields(
                { name: 'Rule 1', value: '***No NSFW Content Your Breaking The Rules***' },
                { name: 'Rule 2', value: '***Respect The Bot Rules Or You Will Get A Punishment***' },
                { name: 'Rule 3', value: '***Please Dont Ping The Moderators Thank You***' },
                { name: 'Rule 4', value: '***Please Dont Start Arguments And Dont Be A Drama Queen Its Annoying Asf.***' },
                { name: 'Rule 5', value: '***Please Use The Bots On The Right Channels Thank You***' }
            )
            .setImage('https://th.bing.com/th/id/R9b49851638e4bd8b010e80d0034cecd9?rik=l9sPq5ljKRkgFQ&riu=http%3a%2f%2fwww.referralcoach.com%2fwp-content%2fuploads%2f2016%2f12%2f12-15-16-Blog-Pic-1024x576.jpg&ehk=q5E2VRH4Zd1qPcJ%2buxnbVdfl5HDsDDQzsAsfYu9EzIQ%3d&risl=&pid=ImgRaw')
            .setFooter('Make Sure To Read This Rules Again Because Your Close To Getting Banned!');

        message.channel.send(newEmbed);
    }



}