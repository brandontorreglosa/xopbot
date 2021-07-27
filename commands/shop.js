const Discord = require("discord.js");
const items = require("../utility/shopItems");
const items2 = require("../utility/shopItems2")

module.exports = {
    name: 'shop1',
    aliases: ['shop2'],
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    async execute(client, message, cmd, args, Discord) {
        if (cmd === 'shop1') {

            if (items.length === 0) return message.reply("**There Is Currently Nothing In XOPBOT's Shop!**");

            const shopList = items.map((value, index) => {
                return `**${index + 1})** ${value.item} -> **${value.coins}** Xocoins!`;
            });

            message.channel.send(shopList);
        }

        else if (cmd === 'shop2') {

            if (items2.length === 0) return message.reply("**There Is Currently Nothing In XOPBOT's Shop!**");

            const shopList = items2.map((value, index) => {
                return `**${index + 1})** ${value.item2} -> **${value.coins}** Xocoins!`;
            });

            message.channel.send(shopList);
        }

    }
}