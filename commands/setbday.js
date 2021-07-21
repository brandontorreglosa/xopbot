const bdaySchema = require('../models/bdayprofile');

module.exports = {
    name: 'setbday',
    aliases: ["set-birthday"],
    cooldown: 20,
    permissions: ["SEND_MESSAGES"],
    async execute(client, message, cmd, args, Discord) {
        if (!doc) {
            doc = new bdaySchema({ _id: message.author.id });
        };

        if (!date) {
            return message.channel.send(`**${message.author.tag}**, Please Add The Date`);
        } else {
            date = moment(date, 'DD-MM');

            if (!date.isValid()) {
                return message.channel.send(`**${message.author.tag}**, Please Add The Date In DD-MM Format`);
            };

            doc.data.profile.birthday = date.format('Do MMMM');

            return doc.save()
                .then(() => message.channel.send(`**${message.author.tag}**, Your Birthday Has Been Updated To **${date.format('Do MMMM')}**!`))
                .catch(() => message.channel.send(`**${message.author.tag}**, Your Birthday Update Failed!`))
        };
    }
}