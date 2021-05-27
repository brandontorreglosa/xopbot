const Levels = require('discord-xp');

module.exports = {
    name: 'edit',
    permissions: ["ADMINISTRATOR"],
    description: 'Edit Xp Level',
    async execute(client, message, cmd, args, Discord) {
        let usage = '!edit @member [xp, level] [add, set, remove] <number>';
        const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) return message.channel.send(`**You Need To State More Arguments \`${usage}\`**`);
        if(!mentionedMember) return message.channel.send('**The Member Stated Does Not Exist In This Server!**');
        if (!args[1]) return message.channel.send(`**You Must State If You Are Editing The Members Level Or Xp: \`${usage}\`**`);
        if (!['xp', 'level'].includes(args[1])) return message.channel.send('**Your Second Argument Was Not Xp Or Level**');
        if (args[1] == 'xp') {
           if (!['add', 'set', 'remove'].includes(args[2])) return message.channel.send('**You Have To State If You Are Adding Or Setting Or Removing Xp From The Member!**' + usage);
           const value = Number(args[3]);
           const levelUser = await Levels.fetch(mentionedMember.user.id, message.guild.id);
           if (!levelUser) return message.channel.send('**The Member Does Not Exist In The Database!**');
           if (args[2] == 'add') {
           if (!value) return message.channel.send('**The Number Stated Is Not A Valid Number!**');
           try {
           await Levels.appendXp(mentionedMember.user.id, message.guild.id, value);
           message.channel.send(`**Added: ${value} Xp To ${mentionedMember.user.tag}**`);
           } catch (err) {
               console.log(err);
           }
           } else if (args[2] == 'remove') {
            if (!value) return message.channel.send('**The Number Stated Is Not A Valid Number!**');
            try {
            await Levels.subtractXp(mentionedMember.user.id, message.guild.id, value);
            message.channel.send(`**Removed: ${value} Xp From ${mentionedMember.user.tag}**`);
            } catch (err) {
                console.log(err);
            }
           } else if (args[2] == 'set') {
            if (!value) return message.channel.send('**The Number Stated Is Not A Valid Number!**');
            try {
            await Levels.setXp(mentionedMember.user.id, message.guild.id, value);
            message.channel.send(`**Set: ${value} Xp To ${mentionedMember.user.tag}**`);
            } catch (err) {
                console.log(err);
            }
           }


        } else if (args[1] == 'level') {
            if (!['add', 'set', 'remove'].includes(args[2])) return message.channel.send('**You Have To State If You Are Adding Or Setting Or Removing Levels From The Member!**' + usage);
            const value = Number(args[3]);
            const levelUser = await Levels.fetch(mentionedMember.user.id, message.guild.id);
            if (!levelUser) return message.channel.send('**The Member Does Not Exist In The Database!**');
            if (args[2] == 'add') {
            if (!value) return message.channel.send('**The Number Stated Is Not A Valid Number!**');
            try {
            await Levels.appendLevel(mentionedMember.user.id, message.guild.id, value);
            message.channel.send(`**Added: ${value} Levels To ${mentionedMember.user.tag}**`);
            } catch (err) {
                console.log(err);
            }
            } else if (args[2] == 'remove') {
             if (!value) return message.channel.send('**The Number Stated Is Not A Valid Number!**');
             try {
             await Levels.subtractLevel(mentionedMember.user.id, message.guild.id, value);
             message.channel.send(`**Removed: ${value} Levels From ${mentionedMember.user.tag}**`);
             } catch (err) {
                 console.log(err);
             }
            } else if (args[2] == 'set') {
             if (!value) return message.channel.send('**The Number Stated Is Not A Valid Number!**');
             try {
             await Levels.setLevel(mentionedMember.user.id, message.guild.id, value);
             message.channel.send(`**Set: ${value} Levels To ${mentionedMember.user.tag}**`);
             } catch (err) {
                 console.log(err);
             }
            }
        }
    }
};