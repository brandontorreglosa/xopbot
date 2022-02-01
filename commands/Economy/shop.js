const color = process.env.Color;
const lineReplyNoMention = require("discord-reply");

module.exports = {
    name: "shop",
    permissions: ["SEND_MESSGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    cooldown: 20,
    description: "Buy From Shop",
    async execute(client, message, cmd, args, Discord) {
        const shope = new Discord.MessageEmbed()
            .setTimestamp()
            .setAuthor(`${user.username}\`s Balance`, user.displayAvatarURL({ dynamic: true }))
            .setColor(`${Color}`)
            .setTitle('The Dealers Shop')
            .setDescription(`**\nItems Available: \n\n🖥️ Computer \nPrice: \`4000\` \nUse \`x!buy 🖥️\` To Get It! \n\n🎣 Fishing Rod \nPrice: \`6000\` \nUse \`x!buy 🎣\` To Get It! \n\n🪓 Battle Axe \nPrice: \`8000\` \nUse \`x!buy 🪓\` To Get It!**`)
    }
}