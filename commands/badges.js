module.exports = {
    name: 'badges',
    permissions: ["SEND_MESSAGES"],
    cooldown: 3,
    aliases: ['usersbadge'],
    async execute(client, message, cmd, args, Discord) {
        const user = message.mentions.users.first() || message.author;

        const flags = user.flags.toArray();

        console.log(flags);

        message.channel.send(`${user}'s badges: ${flags.join(', ')}`)
    }
}

