const inventory = require("../../models/inventory");
const lineReplyNoMention = require("discord-reply");
const color = process.env.Color;
const itemToBuy = "🎣";

module.exports = {
    name: "fish",
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    cooldown: 20,
    description: "Fish For Stuff",
    async execute(client, message, cmd, args, Discord) {
        const e = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor(`${color}`)
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription('**You Dont Have A \`🎣 Fishing Rod\`!**')

        inventory.findOne(
            { Guild: message.guild.id, User: message.author.id },
            async (err, data) => {
                if (!data) return message.lineReplyNoMention(e);
                const hasItem = Object.keys(data.Inventory).includes(itemToBuy);
                if (!hasItem) {
                    message.channel.send(e)
                } else {
                    function random() {
                        const num = Math.floor(Math.random() * 5)
                        return num === 1
                    }

                    if (random() === true) {
                        const Boot = 0
                        const bootembed = new Discord.MessageEmbed()
                            .setTimestamp()
                            .setColor(`${color}`)
                            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                            .setDescription(`**LMFAO! You Just Caught A \`🥾\`, What A Loser 🤣. Its Worth \`${Boot}\` Xocoins!**`)
                        message.lineReplyNoMention(bootembed)
                        client.add(message.author.id, Boot)

                    } else if (random() === true) {
                        const YellowFish = 500
                        const yellowfishembed = new Discord.MessageEmbed()
                            .setTimestamp()
                            .setColor(`${color}`)
                            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                            .setDescription(`**LMAO! You Just Caught A \`🐠\`, What A Noob 😂. Its Worth \`${YellowFish}\` Xocoins!**`)
                        message.lineReplyNoMention(yellowfishembed)
                        client.add(message.author.id, YellowFish)

                    } else if (random() === true) {
                        const FatFish = 1000
                        const fatfishembed = new Discord.MessageEmbed()
                            .setTimestamp()
                            .setColor(`${color}`)
                            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                            .setDescription(`**LOL! You Just Caught A \`🐡\`, What A Bot 😆. Its Worth \`${FatFish}\` Xocoins!**`)
                        message.lineReplyNoMention(fatfishembed)
                        client.add(message.author.id, FatFish)
                    } else if (random() === true) {
                        const BlueFish = 1500
                        const bluefishembed = new Discord.MessageEmbed()
                            .setTimestamp()
                            .setColor(`${color}`)
                            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                            .setDescription(`**OK! You Just Caught A \`🐟\`, What A Rookie 😁. Its Worth \`${BlueFish}\` Xocoins!**`)
                        message.lineReplyNoMention(bluefishembed)
                        client.add(message.author.id, BlueFish)
                    } else if (random() === true) {
                        const Dolphin = 2000
                        const dolphinembed = new Discord.MessageEmbed()
                            .setTimestamp()
                            .setColor(`${color}`)
                            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                            .setDescription(`**Well Done! You Just Caught A \`🐬\`, What A Newbie 👶. Its Worth \`${Dolphin}\` Xocoins!**`)
                        message.lineReplyNoMention(dolphinembed)
                        client.add(message.author.id, Dolphin)
                    } else if (random() === true) {
                        const Lobster = 2500
                        const lobsterembed = new Discord.MessageEmbed()
                            .setTimestamp()
                            .setColor(`${color}`)
                            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                            .setDescription(`**Congrats! You Just Caught A \`🦞\`, What A Professional 🧑‍🏫. Its Worth \`${Lobster}\` Xocoins!**`)
                        message.lineReplyNoMention(lobsterembed)
                        client.add(message.author.id, Lobster)
                    } else if (random() === true) {
                        const Shark = 3500
                        const sharkembed = new Discord.MessageEmbed()
                            .setTimestamp()
                            .setColor(`${color}`)
                            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                            .setDescription(`**WTH! You Just Caught A \`🦈\`, What A Thug 😎. Its Worth \`${Shark}\` Xocoins!**`)
                        message.lineReplyNoMention(sharkembed)
                        client.add(message.author.id, Shark)
                    } else if (random() === true) {
                        const Crab = 4500
                        const crabembed = new Discord.MessageEmbed()
                            .setTimestamp()
                            .setColor(`${color}`)
                            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                            .setDescription(`**WTF! You Just Caught A \`🦀\`, What A Mafia Boss 🕵️‍♂️. Its Worth \`${Crab}\` Xocoins!**`)
                        message.lineReplyNoMention(crabembed)
                        client.add(message.author.id, Crab)
                    } else if (random() === true) {
                        const Squid = 5000
                        const squidembed = new Discord.MessageEmbed()
                            .setTimestamp()
                            .setColor(`${color}`)
                            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                            .setDescription(`**OMG! You Just Caught A \`🦑\`, What A Fisherman 🎣. Its Worth \`${Squid}\` Xocoins!**`)
                        message.lineReplyNoMention(squidembed)
                        client.add(message.author.id, Squid)
                    } else if (random() === true) {
                        const Whale = 5500
                        const whaleembed = new Discord.MessageEmbed()
                            .setTimestamp()
                            .setColor(`${color}`)
                            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                            .setDescription(`**OMFG! You Just Caught A \`🐋\`, What A Merperson 🧜‍♂️. Its Worth \`${Whale}\` Xocoins!**`)
                        message.lineReplyNoMention(whaleembed)
                        client.add(message.author.id, Whale)
                    } else if (random() === true) {
                        const Shrimp = 6500
                        const shrimpembed = new Discord.MessageEmbed()
                            .setTimestamp()
                            .setColor(`${color}`)
                            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                            .setDescription(`**WTH, OMG! You Just Caught A \`🦐\`, What A Boat 🛶. Its Worth \`${Shrimp}\` Xocoins!**`)
                        message.lineReplyNoMention(shrimpembed)
                        client.add(message.author.id, Shrimp)
                    } else if (random() === true) {
                        const Octopus = 7000
                        const octopusembed = new Discord.MessageEmbed()
                            .setTimestamp()
                            .setColor(`${color}`)
                            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                            .setDescription(`**WTF, OMFG! You Just Caught A \`🐙\`, What A Ship 🚢. Its Worth \`${Octopus}\` Xocoins!**`)
                        message.lineReplyNoMention(octopusembed)
                        client.add(message.author.id, Octopus)
                    } else if (random() === true) {
                        const Diamond = 10000
                        const diamondembed = new Discord.MessageEmbed()
                            .setTimestamp()
                            .setColor(`${color}`)
                            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                            .setDescription(`**Holy Crap, You Little Sh*t! You Just Caught A \`💎\`, What A Thief 🦹. Its Worth \`${Diamond}\` Xocoins!**`)
                        message.lineReplyNoMention(diamondembed)
                        client.add(message.author.id, Diamond)
                    }
                }
            })
    }
}