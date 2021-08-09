
const ms = require('ms');
module.exports = {
    name: 'mute',
    permissions: ["MUTE_MEMBERS"],
    cooldown: 3,
    description: "This Mutes A Member",
    async execute(client, message, cmd, args, Discord) {
        const roletofind = args.slice(1).join(" ")
        const target = message.mentions.users.first();
        if (!args[0]) {
            return message.reply('**You Did Not Mention A User To Mute!**')
        }
        if(message.mentions.users.first().bot) {
            return message.reply('**You Can Not Mute Bot`s!**')
          }
        if (message.author.id === target.id) {
			return message.reply('**Are You Alright? You Can Not Mute Yourself!**');
		}

		if (target.id === message.guild.owner.id) {
			return message.reply(
				'**You Jerk, How You Can Mute Server Owner! 👿**'
			);
		}
        if (target) {
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

            let memberTarget = message.guild.members.cache.get(target.id);

            if (!args[1]) {
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`*** <@${memberTarget.user.id}> Has Been Muted!***`);
                return
            }

            memberTarget.roles.add(muteRole.id);
            message.channel.send(`*** <@${memberTarget.user.id})> Has Been Muted For ${ms(ms(args[1]))}***`);

            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
            }, ms(args[1]));

        } else {
            message.channel.send("**This User Does Not Exist! Try Checking The Down Solutions: \nMake Sure You Have Made The Muted Role `Muted` \nMake Sure Bot Is Not `Offline` \nMake Sure That The User Actually Exists \nAsk Help From `@👑HACKERPROᵈᵉᵛ#1498` If Not Any Of Those Solutions Work**");  // \nMake Sure You Have Made The Verified Role `Verified` 

        }
    }
}
