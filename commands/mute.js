
const ms = require('ms');
module.exports = {
    name: 'mute',
    permissions: ["MUTE_MEMBERS"],
    description: "This Mutes A Member",
    async execute(client, message, cmd, args, Discord) {
        const roletofind = args.slice(1).join(" ")
        const target = message.mentions.users.first();
        if (target) {
        // let mainRole = message.guild.roles.cache.find(r => r.id === roletofind)
        // let muteRole = message.guild.roles.cache.find(r => r.id === roletofind)
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Verified');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

            let memberTarget = message.guild.members.cache.get(target.id);

            if (!args[1]) {
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`*** <@${memberTarget.user.id})> Has Been Muted!***`);
                return
            }



            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`*** <@${memberTarget.user.id})> Has Been Muted For ${ms(ms(args[1]))}***`);

            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
            }, ms(args[1]));



      } else {
            message.channel.send("**This User Does Not Exist! Try Checking The Down Solutions: \nMake Sure You Have Made The Verified Role `Verified` \nMake Sure You Have Made The Muted Role `Muted` \nMake Sure Bot Is Not `Offline` \nMake Sure That The User Actually Exists \nAsk Help From `@👑HACKERPROᵈᵉᵛ#1498` If Not Any Of Those Solutions Work**");
        
    }
}
}
    