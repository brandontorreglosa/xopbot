const bdaySchema = require('../models/bdayprofile');

module.exports = {
    name: 'setbday',
    aliases: ["set-birthday"],
    cooldown: 20,
    permissions: ["SEND_MESSAGES"],
    async execute(client, message, cmd, args, Discord) {
        const data = new bdaySchema({ _id: message.author.id });
        if (!args[0]) {
            return message.channel.send(`**${message.author.tag}**, Please Add The Date In DD-MM Format`);
        };
        let bdayMessage = args.slice(0).join(' ');
        if (bdayMessage.length > 5) return message.channel.send('**Your Bday Must Be Like Exa. 27-02 \nNot Longer Than 5 Characters Please!**');
        const embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setTitle('Bday Has Been Set Up')
            .setDescription(`Your Bday Is ${bdayMessage}`)
        data.save()
            .then(() => message.channel.send(embed))
            .catch(() => message.channel.send(`**${message.author.username} Failed To Set Your Bday! 😭`))
    }
}