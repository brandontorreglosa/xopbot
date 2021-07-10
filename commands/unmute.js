module.exports = {
    name: 'unmute',
    permissions: ["MUTE_MEMBERS"],
    description: "This Unmutes A Member",
    execute(client, message, cmd, args, Discord) {
        const target = message.mentions.users.first();
        if (target) {
            //let mainRole = message.guild.roles.cache.find(role => role.name === 'Verified');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(muteRole.id);
            //memberTarget.roles.add(mainRole.id);
            message.channel.send(`*** <@${memberTarget.user.id}> Has Been Unmuted!***`);
        } else {
            message.channel.send('**Cant Find The User Because It Dont Exist Or He Is Cheating!**');
        }
    }
}