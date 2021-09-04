const Levels = require('discord-xp');
const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: 'level',
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    cooldown: 5,
    description: "Shows Level Of You Or User!",
    async execute(client, message, cmd, args, Discord) {
        let mentionedMember = message.mentions.members.first()
        if (!args[0]) {
            return message.lineReplyNoMention({ content: '**Please Mention A User To Check His Level!**' }) // allowedMentions: { repliedUser: true } })
        }

        const target = await Levels.fetch(mentionedMember.user.id, message.guild.id);
        if (!target) return message.lineReplyNoMention({ content: '**The Member Mentioned Does Not Exist In This Server!**' });

        try {
            message.lineReplyNoMention({ content: `**${mentionedMember.user.tag} Level Is ${target.level} And Has ${target.xp}/${Levels.xpFor(target.level + 1)}**` })
        } catch (err) {
            console.log(err);
        }
    }
}