const Levels = require('discord-xp');
const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: 'edit',
    permissions: ["ADMINISTRATOR"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    cooldown: 5,
    description: 'Edit Xp Level',
    async execute(client, message, cmd, args, Discord) {
        let usage = '(prefix)edit @user [xp, level] [add, set, remove] <number>';
        const mentionedMember = message.mentions.users.first() || message.guild.members.cache.get(args[0]);

        if (!args[0]) return message.lineReplyNoMention({ content: `**You Need To State More Arguments \`${usage}\`**` });
        if (!mentionedMember) return message.lineReplyNoMention({ content: '**The Member Stated Does Not Exist In This Server!**' });
        if (!args[1]) return message.lineReplyNoMention({ content: `**You Must State If You Are Editing The Members Level Or Xp: \`${usage}\`**` });
        if (!['xp', 'level'].includes(args[1])) return message.lineReplyNoMention({ content: '**Your Second Argument Was Not Xp Or Level**' });
        if (args[1] == 'xp') {
            if (!['add', 'set', 'remove'].includes(args[2])) return message.lineReplyNoMention({ content: '**You Have To State If You Are Adding Or Setting Or Removing Xp From The Member!**' + usage });
            const value = Number(args[3]);
            const levelUser = await Levels.fetch(mentionedMember.user.id, message.guild.id);
            if (!levelUser) return message.lineReplyNoMention({ content: '**The Member Does Not Exist In The Database!**' });
            if (args[2] == 'add') {
                if (!value) return message.lineReplyNoMention({ content: '**The Number Stated Is Not A Valid Number!**' });
                try {
                    await Levels.appendXp(mentionedMember.user.id, message.guild.id, value);
                    message.lineReplyNoMention({ content: `**Added: ${value} Xp To ${mentionedMember.user.tag}**` });
                } catch (err) {
                    console.log(err);
                }
            } else if (args[2] == 'remove') {
                if (!value) return message.lineReplyNoMention({ content: '**The Number Stated Is Not A Valid Number!**' });
                try {
                    await Levels.subtractXp(mentionedMember.user.id, message.guild.id, value);
                    message.lineReplyNoMention({ content: `**Removed: ${value} Xp From ${mentionedMember.user.tag}**` });
                } catch (err) {
                    console.log(err);
                }
            } else if (args[2] == 'set') {
                if (!value) return message.lineReplyNoMention({ content: '**The Number Stated Is Not A Valid Number!**' });
                try {
                    await Levels.setXp(mentionedMember.user.id, message.guild.id, value);
                    message.lineReplyNoMention({ content: `**Set: ${value} Xp To ${mentionedMember.user.tag}**` });
                } catch (err) {
                    console.log(err);
                }
            }


        } else if (args[1] == 'level') {
            if (!['add', 'set', 'remove'].includes(args[2])) return message.lineReplyNoMention({ content: '**You Have To State If You Are Adding Or Setting Or Removing Levels From The Member!**' + usage });
            const value = Number(args[3]);
            const levelUser = await Levels.fetch(mentionedMember.user.id, message.guild.id);
            if (!levelUser) return message.lineReplyNoMention({ content: '**The Member Does Not Exist In The Database!**' });
            if (args[2] == 'add') {
                if (!value) return message.lineReplyNoMention('**The Number Stated Is Not A Valid Number!**');
                try {
                    await Levels.appendLevel(mentionedMember.user.id, message.guild.id, value);
                    message.lineReplyNoMention({ content: `**Added: ${value} Levels To ${mentionedMember.user.tag}**` });
                } catch (err) {
                    console.log(err);
                }
            } else if (args[2] == 'remove') {
                if (!value) return message.lineReplyNoMention({ content: '**The Number Stated Is Not A Valid Number!**' });
                try {
                    await Levels.subtractLevel(mentionedMember.user.id, message.guild.id, value);
                    message.lineReplyNoMention({ content: `**Removed: ${value} Levels From ${mentionedMember.user.tag}**` });
                } catch (err) {
                    console.log(err);
                }
            } else if (args[2] == 'set') {
                if (!value) return message.lineReplyNoMention({ content: '**The Number Stated Is Not A Valid Number!**' });
                try {
                    await Levels.setLevel(mentionedMember.user.id, message.guild.id, value);
                    message.lineReplyNoMention({ content: `**Set: ${value} Levels To ${mentionedMember.user.tag}**` });
                } catch (err) {
                    console.log(err);
                }
            }
        }
    }
};