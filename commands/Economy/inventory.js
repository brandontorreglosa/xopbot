const inventory = require("../../models/inventory");
const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: 'inventory',
    cooldown: 15,
    aliases: ['inv'],
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES"],
    description: "Inventory Command!",
    async execute(client, message, cmd, args, Discord) {
        inventory.findOne(
            { Guild: message.guild.id, User: message.author.id },
            async (err, data) => {
                if (!data) return message.lineReplyNoMention({ content: "**Your Inventory Is Empty!**" });
                const mappedData = Object.keys(data.Inventory)
                    .map((key) => {
                        return `${key}(${data.Inventory[key]})`
                    })
                    .join(", ");

                message.lineReplyNoMention({ content: mappedData });
            }
        )
    }
}
