const Discord = module.require("discord.js");

module.exports = {
    name: "wiki",
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    description: "Get Search Results from Wikipedia",
    async execute(client, message, cmd, args, Discord) {
        const search = args.join("_");
        const msg = args.join(" ");
        if (!msg) {
            return message.channel.send({ content: "**You Need To Enter Some Text to Search For!**" })
        }
        const link = `https://www.wikipedia.org/w/index.php?search=${search}&ns0=1`;
        const embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setTitle("Wikipedia Search")
            .addField(`You Searched For:`, `${msg}`)
            .addField(`Results:`, `[Here's What I Found](${link})`)
            .setColor('#c30202')

        message.channel.send({ embeds: [embed] });
    }
}