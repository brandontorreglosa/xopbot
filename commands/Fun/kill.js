module.exports = {
    name: 'kill',
    permissions: ["SEND_MESSAGES"],
    aliases: ['slaughter', 'cut'],
    cooldown: 2,
    description: 'kill a user',
    //Use your own execute parameters
    execute(client, message, cmd, args, Discord) {
        const randomNumber = Math.floor(Math.random() * 500) + 1;
        const kill_list = message.mentions.users.map(user => {
            return `**${user.username} Was Killed By ${message.author.username} Who Used ${randomNumber} Power!**`;
        });

        message.channel.send({ content: kill_list });
    }
}