const { pagination } = require("reconlx");
module.exports = {
    name: 'test',
    permissions: ["SEND_MESSAGES"],
    async execute(client, message, cmd, args, Discord) {
        const embed = new Discord.MessageEmbed()
            .setTitle('Boi')
            .setFooter('boiiiiiiii')
        const embed2 = new Discord.MessageEmbed()
            .setTitle('Boi')
        const embed3 = new Discord.MessageEmbed()
            .setTitle('Boi')
        const embed4 = new Discord.MessageEmbed()
            .setTitle('Boi')

        const embeds = [
            embed,
            embed2,
            embed3,
            embed4,
        ];

        pagination({
            embeds: embeds,
            message: message,
            time: 120000,
            fastSkip: true,
        })
    }
}