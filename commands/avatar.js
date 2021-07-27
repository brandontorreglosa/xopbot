module.exports = {
    name: 'avatar',
    permissions: ["SEND_MESSAGES"],
    aliases: ['icon', 'pfp', 'profilepic'],
    cooldown: 2,
    description: 'Return a user(s) avatar picture!',
    //Use your own execute parameters
    async execute(client, message, cmd, args, Discord) {

        const user = message.mentions.users.first() || message.author;

        const avatar_list = new Discord.MessageEmbed()
            .setAuthor(`${user.username}`, user.displayAvatarURL({ dynamic: true }))
            .setColor(`#c30202`)
            .setTimestamp()
            .setTitle(`Avatar Link`)
            .setUrl(`${user.displayAvatarURL({ dynamic: true })}`)
            .setImage(`${user.displayAvatarURL({ dynamic: true })}`)
        message.channel.send(avatar_list);
    }
}