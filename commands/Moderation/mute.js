const lineReplyNoMention = require('discord-reply');
const ms = require('ms');
module.exports = {
    name: 'mute',
    permissions: ["MUTE_MEMBERS"],
    clientpermissions: ["MUTE_MEMBERS", "SEND_MESSAGES", "EMBED_LINKS"],
    cooldown: 5,
    description: "This Mutes A Member",
    async execute(client, message, cmd, args, Discord) {
        const roletofind = args.slice(1).join(" ")
        const target = message.mentions.users.first()
        if (!args[0]) {
            return message.lineReplyNoMention({ content: '**`(prefix)mute <@user>`**' }) //, allowedMentions: { repliedUser: true } })
        }
        if (message.mentions.users.first().bot) {
            return message.lineReplyNoMention({ content: '**You Can Not Mute Bot`s!**' }) //, allowedMentions: { repliedUser: true } })
        }
        if (message.author.id === target.id) {
            return message.lineReplyNoMention({ content: '**Are You Alright? You Can Not Mute Yourself!**' }) //, allowedMentions: { repliedUser: true } });
        }
        if (target.id === client.user.id) {
            return message.lineReplyNoMention({ content: `**You Can Not Mute Me Through Me Lol!**` })
        }

        // if (message.member.roles.highest.position < member.roles.highest.position) {
        //     return message.lineReplyNoMention({ content: '**That User Has Higher Role Than Me!**' })
        // }

        if (target.id === message.guild.owner.id) {
            return message.lineReplyNoMention({
                content:
                    '**You Jerk, How You Can Mute Server Owner! 👿**' //, allowedMentions: { repliedUser: true }
            });
        }
        if (target) {
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

            let memberTarget = message.guild.members.cache.get(target.id);

            if (!args[1]) {
                memberTarget.roles.add(muteRole.id);
                message.lineReplyNoMention({ content: `** <@${memberTarget.user.id}> Has Been Muted!**` });
                return
            }

            memberTarget.roles.add(muteRole.id);
            message.lineReplyNoMention({ content: `** <@${memberTarget.user.id})> Has Been Muted For ${ms(ms(args[1]))}**` });

            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
            }, ms(args[1]));

        } else {
            message.lineReplyNoMention({ content: "**This User Does Not Exist! Try Checking The Down Solutions: \nMake Sure You Have Made The Muted Role `Muted` \nMake Sure Bot Is Not `Offline` \nMake Sure That The User Actually Exists \nAsk Help From `@👑HACKERPROᵈᵉᵛ#1498` If Not Any Of Those Solutions Work**" });  // \nMake Sure You Have Made The Verified Role `Verified` 

        }
    }
}
