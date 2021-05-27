module.exports = {
    name: 'hug',
    permissions: ["SEND_MESSAGES"],
    aliases: [],
    cooldown: 2,
    description: 'hug a user',
    //Use your own execute parameters
    execute(client, message, cmd, args, Discord) {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        const hug_list = message.mentions.users.map(user => {
            return `**${user.username} Was Hugged By ${message.author.username} And Now ${user.username} Is ${randomNumber}% Happy!**`;
        });

        message.channel.send(hug_list);
    }
}