const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: 'scratch',
    cooldown: 3,
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    description: "Sends The Owners Youtube Channel!",
    async execute(client, message, cmd, args, Discord) {
        const embed = new Discord.MessageEmbed()
            .setColor('#c30202')
            .setTimestamp()
            .setTitle('My Scratch Account')
            .setURL('https://scratch.mit.edu/users/COOLBLUEINKLINGTM/')
            .setDescription('`Scratch Link` \n[Click Here](https://scratch.mit.edu/users/COOLBLUEINKLINGTM/)')
        message.lineReplyNoMention(embed);
    }
}