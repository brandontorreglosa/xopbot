const color = process.env.Color;
const lineReplyNoMention = require("discord-reply");
const logChannel = process.env.logChannel;
module.exports = {
    name: "shop",
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    cooldown: 20,
    description: "Buy From Shop",
    async execute(client, message, cmd, args, Discord) {
        const loggerchannel = client.channels.cache.get(logChannel);
        const shope = new Discord.MessageEmbed().setTimestamp().setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setThumbnail(message.author.displayAvatarURL({ dynamic: true })).setColor(`${color}`).setTitle('The Dealers Shop').setDescription(`**Items Available:\n\n🖥️ Computer \nPrice:\`4000\`\nUse \`x!buy 🖥️\`To Get It!\n\n🎣 Fishing Rod \nPrice:\`6000\`\nUse \`x!buy 🎣\`To Get It!\n\n🪓 Battle Axe \nPrice:\`8000\`\nUse \`x!buy 🪓\`To Get It!\n\n🔫 Hunting Gun \nPrice:\`15000\`\nUse \`x!buy 🔫\`To Get It!\n\n🏹 Crossbow \nPrice:\`22000\`\nUse \`x!buy 🏹\`To Get It!\n\n😺 Cat \nPrice:\`30000\`\nUse \`x!buy 😺\`To Get It!\n\n🐶 Dog \nPrice:\`38000\`\nUse \`x!buy 🐶\`To Get It!\n\n🤖 Robot \nPrice:\`45000\`\nUse \`x!buy 🤖\`To Get It!\n\n🐸 Dank Frog \nPrice:\`80000\`\nUse \`x!buy 🐸\`To Get It!\n\n<:FBI_OPEN_UP:824886936862457897>FBI Patrick \nPrice:\`120000\`\nUse \`x!buy<:FBI_OPEN_UP:824886936862457897>\`To Get It!**`).setFooter('No Refunds - Dealer')
        message.lineReplyNoMention({ embed: shope })
        loggerchannel.send({ content: `**${message.author.username}#${message.author.discriminator} used the command ${this.name} in ${message.guild.name}**` })
    }
}