const lineReplyNoMention = require('discord-reply');
const ms = require('ms');
const color = process.env.Color;
module.exports = {
    name: 'mute',
    permissions: ["MUTE_MEMBERS"],
    clientpermissions: ["MUTE_MEMBERS", "SEND_MESSAGES", "EMBED_LINKS"],
    cooldown: 5,
    description: "This Mutes A Member",
    async execute(client, message, cmd, args, Discord) {
        const fetchmute = args[0];
        const target = message.mentions.users.first()
        if (!args[0]) {
            const nopr = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`(prefix)mute <@user> <[optional]time(s)(m)(h)(d)>\`**`)
            return message.lineReplyNoMention({ embed: nopr })
        }
        if (message.mentions.users.first().bot) {
            const nomutebots = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**You Can Not Mute Bot\`s!**`)
            return message.lineReplyNoMention({ embed: nomutebots })
        }
        if (message.author.id === target.id) {
            const annieareyouok = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**Are You Alright? You Can Not Mute Yourself!**`)
            return message.lineReplyNoMention({ embed: annieareyouok })
        }
        if (target.id === client.user.id) {
            const whymuteme = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**You Can't Just Mute Me Through Me, Thats Way Too Evil! **`)
            return message.lineReplyNoMention({ embed: whymuteme })
        }
        if (target.id === message.guild.owner.id) {
            const howyoumuteserver = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**You Jerk, How You Can Mute Server Owner! 👿**`)
            return message.lineReplyNoMention({ embed: howyoumuteserver })
        }
        const faksucer = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**Could Not Mute \`${fetchmute}\`! Try The Down Solutions: \nCheck If You Have The \`Muted\` Role Created. \nCheck If The \`User\` Actually Exists!**`)
        if (target) {
            const muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
            const memberTarget = message.guild.members.cache.get(target.id);
            if (!args[1]) {
                memberTarget.roles.add(muteRole.id);
                const sucermute = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**Muted Successfully \`${target.username}\`!**`)
                return message.lineReplyNoMention({ embed: sucermute });
            }
            memberTarget.roles.add(muteRole.id);
            const tempsucermute = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**Temporary Muted Successfully \`${target.username}\` For \`${ms(ms(args[1]))}\`!**`)
            message.lineReplyNoMention({ embed: tempsucermute });
            setTimeout(function() {
                memberTarget.roles.remove(muteRole.id);
            }, ms(args[1]));
        } else {
            message.lineReplyNoMention({ embed: faksucer })
        }
    }
}