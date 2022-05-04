const inventory = require("../../models/inventory");
const items = require("../../models/shopitems");
const color = process.env.Color;
const lineReplyNoMention = require("discord-reply");
const logChannel = process.env.logChannel;
module.exports = {
    name: "buy",
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    cooldown: 15,
    description: "buy something",
    async execute(client, message, cmd, args, Discord) {
        const loggerchannel = client.channels.cache.get(logChannel);
        if (!args[0]) {
            const nospec = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription('**`(prefix)buy <item-name>`**')
            return message.lineReplyNoMention({ embed: nospec })
        }
        const itemToBuy = args[0].toLowerCase()
        const validItem = !!items.find((val) => val.item.toLowerCase() === itemToBuy); if (!validItem) {
            const novalid = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription('**The Item Mentioned Does Not Exist Or Is Not Valid!**')
            return message.lineReplyNoMention({ embed: novalid })
        }
        const itemPrice = items.find((val) => (val.item.toLowerCase()) === itemToBuy).price; const userBalance = await client.bal(message.author.id); const noxocoins = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**You Only Have \`${userBalance}\` Xocoins! You Need \`${itemPrice}\` Xocoins To Buy It!**`)
        if (userBalance < itemPrice) return message.lineReplyNoMention({ embed: noxocoins });
        const params = { Guild: message.guild.id, User: message.author.id, }; inventory.findOne(params, async (err, data) => {
            if (data) {
                const hasItem = Object.keys(data.Inventory).includes(itemToBuy); if (!hasItem) { data.Inventory[itemToBuy] = 1; } else { data.Inventory[itemToBuy]++; }
                console.log(data); await inventory.findOneAndUpdate(params, data);
            } else { new inventory({ Guild: message.guild.id, User: message.author.id, Inventory: { [itemToBuy]: 1, }, }).save(); }
            const sucbuy = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**You Have Bought The Item \`${itemToBuy}\` For \`${itemPrice}\` Xocoins! The Dealer Has Taken From You That Price!**`)
            message.lineReply({ embed: sucbuy });
            client.rmv(message.author.id, itemPrice);
            loggerchannel.send({ content: `**${message.author.username}#${message.author.discriminator} used the command ${this.name} in ${message.guild.name} \nBought: ${itemToBuy} | Price: ${itemPrice}**` })
        })
    }
}