module.exports = {
    name: 'pingroles',
    permissions: ["MANAGE_MESSAGES"],
    aliases: ['pr'],
    description: "Sets up a reaction role message!",
    async execute(client, message, cmd, args, Discord) {
        const channel = '827108899592470538';
        const robotTeamRole = message.guild.roles.cache.find(role => role.name === "Robot Pings");
        const giveawayTeamRole = message.guild.roles.cache.find(role => role.name === "Giveaway Pings");
        const serverTeamRole = message.guild.roles.cache.find(role => role.name === "Server Rules Pings");
        const youtubeTeamRole = message.guild.roles.cache.find(role => role.name === "Youtube Pings");

        const robotpingEmoji = '🤖';
        const giveawayTeamEmoji = '🎉';
        const serverTeamEmoji = '📈';
        const youtubeTeamEmoji = '🎮';

        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('**Pings**')
            .setDescription('**Choosing A Ping Will Allow You To Get Important Notifications!**\n\n'
                + `${robotpingEmoji} For Robot Pings\n`
                + `${giveawayTeamEmoji} For Giveaway Pings\n`
                + `${serverTeamEmoji} For Server Pings\n`
                + `${youtubeTeamEmoji} For Youtube Pings`);

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(robotpingEmoji);
        messageEmbed.react(giveawayTeamEmoji);
        messageEmbed.react(serverTeamEmoji);
        messageEmbed.react(youtubeTeamEmoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === robotpingEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(robotTeamRole);
                }
                if (reaction.emoji.name === giveawayTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(giveawayTeamRole);
                }

                if (reaction.emoji.name === serverTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(serverTeamRole);
                }

                if (reaction.emoji.name === youtubeTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(youtubeTeamRole);
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
                if (reaction.emoji.name === robotpingEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(robotTeamRole);
                }
                if (reaction.emoji.name === giveawayTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(giveawayTeamRole);
                }

                if (reaction.emoji.name === serverTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(serverTeamRole);
                }

                if (reaction.emoji.name === youtubeTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(youtubeTeamRole);
                }

            } else {
                return;
            }
        });
    }

}