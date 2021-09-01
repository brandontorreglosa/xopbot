const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: 'kiss',
    permissions: ["SEND_MESSAGES"],
    cooldown: 3,
    description: 'kiss a user',
    async execute(client, message, cmd, args, Discord) {
        if(!args[0]) {
            return message.lineReplyNoMention('**`(prefix)kiss <@user>`**')
        }
        const Choices = [
            'Marry You',
            'Ask You For Date',
            'Rickroll',
            'Kiss You Back',
            'Punch You Back',
            'Ignore What Just Happened',
            'Say It To Your Mom',
            'Say It To Your Father',
            'Say It To Your Brother',
            'Say It To Your Sister',
            'Call The FBI (Cuz Your Under 18 Lol)',
            'Run Away (Scared Of Girls) Or (Scared Of Boys)',
            'Give U A Flower',
            'Not Talk To You Again Cuz Of Himself Pretending To Be Happy',
            'Suicide',
            'Call Local Authorites',
            'Kill You',
            'Do NOTHING :( R.I.P :('
        ];

        const randomChoices = Choices.sort(() => Math.random() - Math.random()).slice(0, 1);

        const randomNumber = Math.floor(Math.random() * 2000) + 1;
        const hug_list = message.mentions.users.map(user => {
            return `**${user.username} Was Kissed By ${message.author.username} And Now ${user.username} Is ${randomNumber}% Happy And Would Like To ${randomChoices}!**`;
        });

        message.lineReplyNoMention({ content: hug_list });
    }
}