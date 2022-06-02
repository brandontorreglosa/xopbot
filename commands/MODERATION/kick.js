const lineReplyNoMention = require('discord-reply');
const errorChannel = process.env.errorChannel;
const color = process.env.Color;
module.exports = {
    name: 'kick',
    clientpermissions: ["KICK_MEMBERS", "SEND_MESSAGES", "EMBED_LINKS"],
    permissions: ["KICK_MEMBERS"],
    cooldown: 5,
    description: "This Command Kicks Member",
    async execute(client, message, cmd, args, Discord) {
        try {
            const member = message.mentions.users.first()
            const catcherban = args[0];
            if (!args[0]) {
                const nopr = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`(prefix)kick <@user> <reason>\`**`)
                return message.lineReplyNoMention({ embed: nopr })
            }
            const reason = args.slice(1).join(" ")
            if (!reason) {
                const norr = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**Please Give A Reason To Kick That User!**`)
                return message.lineReplyNoMention({ embed: norr })
            }
            if (message.author.id === member.id) {
                const cantbanyourself = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**Are You Alright? You Can Not Kick Yourself!**`)
                return message.lineReplyNoMention({ embed: cantbanyourself })
            }
            if (member.id === client.user.id) {
                const nobanbot = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**You Can't Just Kick Me Through Me, Thats Way Too Evil!**`)
                return message.lineReplyNoMention({ embed: nobanbot })
            }
            if (member.id === message.guild.owner.id) {
                const nobanowner = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**You Jerk, How Can You Kick Server Owner! 👿**`)
                return message.lineReplyNoMention({ embed: nobanowner })
            }
            if (!member) {
                const reps = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**I Searched Everywhere And Could Not Find \`${catcherban}\`!**`)
                return message.lineReplyNoMention({ embed: reps })
            }
            const rapdab = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`${catcherban}\` Is Not Currently Kickable!**`)
            if (member) {
                const memberTarger = message.guild.members.cache.get(member.id);
                const unsucer = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**Could Not Send To \`${member.username}\` Reason Of Kick!**`)
                const funsucer = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**Could Not Kick \`${member.username}\`!**`)
                const successful = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**Kicked Successfully \`${member.username}\` For \`${reason}\`!**`)
                const embed = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setTitle(`You Were Kicked From ${message.guild.name}`).setDescription(`**Kicked By: ${message.author.username} \nReason: \`${reason}\`**`)
                memberTarger.send({ embed: embed }).catch(() => message.lineReplyNoMention({ embed: unsucer }))
                message.guild.member(memberTarger).kick({ reason: `**Kicked By ${message.author.username} \nReason: \`${reason}\`**` }).catch(() => message.lineReplyNoMention(funsucer))
                    .then(() => message.lineReplyNoMention({ embed: successful }))
            } else {
                return message.lineReplyNoMention({ embed: rapdab });
            }
        } catch (err) {
            const errorlogs = client.channels.cache.get(errorChannel);
            message.lineReplyNoMention({ content: "**Looks Like An Error Has Occured!**" });
            errorlogs.send({ content: `**Error On Kick Command!\n\nError:\n\n ${err}**` })
        }
    }
}