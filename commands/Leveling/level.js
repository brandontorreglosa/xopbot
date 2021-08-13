const Levels = require('discord-xp');

module.exports = {
    name: 'level',
    permissions: ["SEND_MESSAGES"],
    cooldown: 5,
    description: "Shows Level Of You Or User!",
    async execute(client, message, cmd, args, Discord) {
        let mentionedMember = message.mentions.members.first()
        if (!args[0]) {
            return message.reply({ content: '**Please Mention A User To Check His Level!**', allowedMentions: { repliedUser: true } })
        }

        const target = await Levels.fetch(mentionedMember.user.id, message.guild.id);
        if (!target) return message.channel.send({ content: '**The Member Mentioned Does Not Exist In This Server!**' });

        try {
            message.channel.send({ content: `**${mentionedMember.user.tag} Level Is ${target.level} And Has ${target.xp}/${Levels.xpFor(target.level + 1)}**` })
        } catch (err) {
            console.log(err);
        }
    }
}