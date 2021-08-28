const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: "userinfo",
    permissions: ["SEND_MESSAGES"],
    aliases: ['usi', 'ui'],
    cooldown: 3,
    async execute(client, message, cmd, args, Discord) {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        let status;
        switch (user.presence.status) {
            case "online":
                status = "🟢 Online";
                break;
            case "dnd":
                status = "🔴 Dnd";
                break;
            case "idle":
                status = "🟡 Idle";
                break;
            case "offline":
                status = "⚫ Offline";
                break;
        }

        const embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setTitle(`${user.user.username} stats`)
            .setColor('#c30202')
            .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
            .addFields(
                {
                    name: "Name: ",
                    value: user.user.username,
                    inline: true
                },
                {
                    name: "#️⃣ Discriminator: ",
                    value: `#${user.user.discriminator}`,
                    inline: true
                },
                {
                    name: "🆔 ID: ",
                    value: user.user.id,
                },
                {
                    name: "Current Status: ",
                    value: status,
                    inline: true
                },
                {
                    name: "Activity: ",
                    value: user.presence.activities[0] ? user.presence.activities[0].name : `User isn't playing a game!`,
                    inline: true
                },
                {
                    name: 'Avatar link: ',
                    value: `[Click Here](${user.user.displayAvatarURL()})`
                },
                {
                    name: 'Creation Date: ',
                    value: user.user.createdAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: 'Joined Date: ',
                    value: user.joinedAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: 'User Roles: ',
                    value: user.roles.cache.map(role => role.toString()).join(" ,"),
                    inline: true
                }
            )
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

        await message.lineReplyNoMention(embed)
    }
}