const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
    name: 'kiss',
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES"],
    cooldown: 3,
    description: 'kiss a user',
    async execute(client, message, cmd, args, Discord) {
        if (!args[0]) {
            const nopr = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor(`${color}`)
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**\`(prefix)kiss <@user>\`**`)
            return message.lineReplyNoMention(nopr)
        }
        const Choices = [
            'Marry You',
            'Ask You For Date',
            'Rickroll You',
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
        const user = message.mentions.users.first()
        const hug_list = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor(`${color}`)
            .setAuthor(`${user.username} Was Kissed!`)
            .setDescription(`**\`${user.username}\` Was Kissed By \`${message.author.username}\` And Now \`${user.username}\` Is \`${randomNumber}\` Happy And Would Like To \`${randomChoices}\`!**`)
        return message.lineReplyNoMention(hug_list)
    }
}