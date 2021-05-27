module.exports = {
    name: 'teamrole',
    permissions: ["MANAGE_MESSAGES"],
    description: "Sets up a reaction role message!",
    async execute(client, message, cmd, args, Discord) {
        const channel = '827108899592470538';
        const redTeamRole = message.guild.roles.cache.find(role => role.name === "Red Team");
        const blueTeamRole = message.guild.roles.cache.find(role => role.name === "Blue Team");

        const redTeamEmoji = '🔴';
        const blueTeamEmoji = '🔵';

        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Choose a team to play on!')
            .setDescription('Choosing a team will allow you to interact with your teammates!\n\n'
                + `${redTeamEmoji} For Red Team\n`
                + `${blueTeamEmoji} For Blue Team`);

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(redTeamEmoji);
        messageEmbed.react(blueTeamEmoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === redTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(redTeamRole);
                }
                if (reaction.emoji.name === blueTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(blueTeamRole);
                }
            } else {
                return;
            }

        });

        client.on('messageReactionRemove', async (reaction, user) => {

            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;


            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === redTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(redTeamRole);
                }
                if (reaction.emoji.name === blueTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(blueTeamRole);
                }
            } else {
                return;
            }
        });
    }

}