module.exports = {
    name: 'avatar',
    permissions: ["SEND_MESSAGES"],
    aliases: ['icon', 'pfp', 'profilepic'],
    cooldown: 2,
    description: 'Return a user(s) avatar picture!',
    //Use your own execute parameters
    execute(client, message, cmd, args, Discord) {

        if (!message.mentions.users.size) {
            return message.channel.send(`**Your Avatar: ** ${message.author.displayAvatarURL({ dynamic: true })}`);
        }

        const avatar_list = message.mentions.users.map(user => {
            return `**${user.username}'s Avatar: ** ${user.displayAvatarURL({ dynamic: true })}`;
        });

        message.channel.send(avatar_list);
    }
}