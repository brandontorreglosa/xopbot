const disbutpages = require("discord-embeds-pages-buttons")
module.exports = {
    name: 'test',
    permissions: ["SEND_MESSAGES"],
    async execute(client, message, cmd, args, Discord) {
        const embed1 = new Discord.MessageEmbed()
        .setColor("YELLOW")
        .setTitle("1")
        
        const embed2 = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("2")
        
        const embed3 = new Discord.MessageEmbed()
        .setColor("PINK")
        .setTitle("3")
        
        const pages = [embed1, embed2, embed3]
        disbutpages.pages(message, pages, {
          timeout: 60*1000,
            buttons: {
                delete: {
                    style: "red",
                    emoji: "❌",
                    text: "Delete"
                },
                forward: {
                    style: "green",
                    emoji: "⏩",
                    text: "Forward"
                },
                backward: {
                    style: "green",
                    emoji: "⏪",
                    text: "Backward"
                }
            },
            extraRows: [],
            extraPos: "below",
            message: "",
            ephemeral: "boi",
        })
    }
}