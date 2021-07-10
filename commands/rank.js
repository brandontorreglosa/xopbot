const Discord = require('discord.js');
const Levels = require("discord-xp");
const canvacord = require("canvacord");

module.exports = {
    name: 'rank',
    permissions: ["SEND_MESSAGES"],
    description: 'get rank',
    async execute(client, message, cmd, args, Discord) {

        // const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 100);

        // const leaderboard = await Levels.computeLeaderboard(client, rawLeaderboard, true);

        const target = message.mentions.users.first() || message.author;

        const user = await Levels.fetch(target.id, message.guild.id);

        const neededXp = Levels.xpFor(parseInt(user.level) + 1);

        if (!user) return message.reply("**You Dont Have Any Xp, Try Sending More Messages!**");

        const rank = new canvacord.Rank()
            .setAvatar(message.author.displayAvatarURL({ dynamic: false, format: 'png' }))
            // .setRank(leaderboard)
            .setLevel(user.level)
            .setCurrentXP(user.xp)
            .setRequiredXP(neededXp)
            .setStatus(message.member.presence.status)
            .setBackground("IMAGE", "https://th.bing.com/th/id/Rcf6f575500f15f55cddf043c1a79d902?rik=M0%2bN0%2bVBxLmchA&pid=ImgRaw")
            .setProgressBar("#c30202")
            .setUsername(message.author.username)
            .setDiscriminator(message.author.discriminator);

        rank.build()
            .then(data => {
                const attachment = new Discord.MessageAttachment(data, "RankCard.png");
                message.channel.send(attachment);
            });
    }
}
