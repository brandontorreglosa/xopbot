const Discord = require("discord.js");
const items = require("../../shopItems");

module.exports = {
    name: 'shop',
    permissions: ["SEND_MESSAGES"],
    async execute(client, message, cmd, args, Discord) {
        if (items.length === 0) return message.reply("**There Is Currently Nothing In Xopbots Shop!**");

        const shopList = items.map((value, index) => {
            return `**${index + 1})** ${value.item} -> **${value.coins}** Xocoins!`;
        });

        message.channel.send(shopList);
    }
}