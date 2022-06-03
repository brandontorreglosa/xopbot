const color = process.env.Color;
const fetch = require("node-fetch");
const lineReplyNoMention = require("discord-reply");
module.exports = {
    name: "instagram",
    aliases: ["ig"],
    cooldown: 10,
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    description: "Let's you fetch instagram data from any user except non-existed!",
    async execute(client, message, cmd, args, Discord) {
        try {
            if (!args[0]) {
                const nopr = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`(prefix)instagram <username>\`**`)
                return message.lineReplyNoMention({ embed: nopr })
            }
            const usertofind = args[0];
            fetch(`https://api.popcat.xyz/instagram?user=${usertofind}`).then(response => response.json()).then(data => {
                let posts = data.posts === 0 ? "No Posts" : `${data.posts}`;
                let reels = data.reels === 0 ? "No Reels" : `${data.reels}`;
                let private = data.private === false ? "Public" : `${data.private}`;
                let followers = data.followers === 0 ? "No Followers" : `${data.followers}`;
                let following = data.following === 0 ? "Not Following Anyone" : `${data.following}`;
                const embed = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${data.username} | ${data.full_name}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`${data.biography}`).setThumbnail(`${data.profile_pic}`).addField("👤 Username", `${data.username}`, true).addField("👥 Followers", `${followers}`, true).addField("➕ Following", `${following}`, true).addField("📷 Posts", `${posts}`, true).addField("🎥 Reels", `${reels}`, true).addField("👀 Visibility", `${private}`, true);
                message.lineReplyNoMention({ embed: embed });
            });
        } catch (err) {
            return message.lineReplyNoMention({ content: "**Couldn't Find That User 😭!**" });
        }
    }
}