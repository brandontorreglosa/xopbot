const Levels = require('discord-xp');
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
    name: 'edit',
    permissions: ["ADMINISTRATOR"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    cooldown: 5, description: 'Edit Xp Level',
    async execute(client, message, cmd, args, Discord) {
        const usage = '(prefix)edit <@user> <(xp)(level)> <(add)(set)(remove)> <number>';
        const mentionedMember = message.mentions.users.first() || message.guild.members.cache.get(args[0]); const catchnomen = args[0];
        if (!args[0]) {
            const nopr = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`${usage}\`**`)
            return message.lineReplyNoMention({ embed: nopr })
        }
        if (!mentionedMember) {
            const nomen = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`${catchnomen}\` Is Not A Valid User!**`)
            return message.lineReplyNoMention({ embed: nomen })
        }
        if (!args[1]) {
            const nopr1 = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**Please Specify If Your Editing \`xp\` Or \`level\`!**`)
            return message.lineReplyNoMention({ embed: nopr1 })
        }
        const fakearg = args[1]; if (!['xp', 'level'].includes(args[1])) {
            const noxplvl = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`${fakearg}\` Is Not \`xp\` Or \`level\`!**`)
            return message.lineReplyNoMention({ embed: noxplvl })
        }
        if (args[1] == 'xp') {
            if (!['add', 'set', 'remove'].includes(args[2])) {
                const statxp = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**You Need To Specify If Your \`(Adding)(Setting)(Removing)\` The \`xp\`!**`)
                return message.lineReplyNoMention({ embed: statxp })
            }
            const value = Number(args[3]); const levelUser = await Levels.fetch(mentionedMember.id, message.guild.id); if (!levelUser) {
                const nolvlu = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**The User Does Not Exist In The Database OF \`XOPBOT\`!**`)
                return message.lineReplyNoMention({ embed: nolvlu })
            }
            if (args[2] == 'add') {
                if (!value) {
                    const nopr2 = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`${value}\` Is Not A Number!**`)
                    return message.lineReplyNoMention({ embed: nopr2 })
                }
                try {
                    await Levels.appendXp(mentionedMember.id, message.guild.id, value); const successxp = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**Added: \`${value}\`Xp To \`${mentionedMember.tag}\`!**`)
                    message.lineReplyNoMention({ embed: successxp })
                } catch (err) { console.log(err); }
            } else if (args[2] == 'remove') {
                if (!value) {
                    const nopr3 = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`${value}\` Is Not A Number!**`)
                    return message.lineReplyNoMention({ embed: nopr3 })
                }
                try {
                    await Levels.subtractXp(mentionedMember.id, message.guild.id, value); const successrmv = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**Removed: \`${value}\`Xp From \`${mentionedMember.tag}\`!**`)
                    message.lineReplyNoMention({ embed: successrmv })
                } catch (err) { console.log(err); }
            } else if (args[2] == 'set') {
                if (!value) {
                    const nopr4 = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`${value}\` Is Not A Number!**`)
                    return message.lineReplyNoMention({ embed: nopr4 })
                }
                try {
                    await Levels.setXp(mentionedMember.id, message.guild.id, value); const successset = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**Set: \`${value}\`Xp To \`${mentionedMember.tag}\`!**`)
                    return message.lineReplyNoMention({ embed: successset })
                } catch (err) { console.log(err); }
            }
        } else if (args[1] == 'level') {
            if (!['add', 'set', 'remove'].includes(args[2])) {
                const nopr5 = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**You Need To Specify If Your \`(Adding)(Setting)(Removing)\` The \`Level\`!**`)
                return message.lineReplyNoMention({ embed: nopr5 })
            }
            const value = Number(args[3]); const levelUser = await Levels.fetch(mentionedMember.id, message.guild.id); if (!levelUser) {
                const nopr6 = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**The User Does Not Exist In The Database Of \`XOPBOT\`!**`)
                return message.lineReplyNoMention({ embed: nopr6 })
            }
            if (args[2] == 'add') {
                if (!value) {
                    const nopr7 = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`${value}\` Is Not A Number!**`)
                    return message.lineReplyNoMention({ embed: nopr7 })
                }
                try {
                    await Levels.appendLevel(mentionedMember.id, message.guild.id, value); const successlvl = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**Added: \`${value}\`Level(s) To \`${mentionedMember.tag}\`!**`)
                    message.lineReplyNoMention({ embed: successlvl })
                } catch (err) { console.log(err); }
            } else if (args[2] == 'remove') {
                if (!value) {
                    const nopr8 = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`${value}\`Is Not A Number!**`)
                    return message.lineReplyNoMention({ embed: nopr8 })
                }
                try {
                    await Levels.subtractLevel(mentionedMember.id, message.guild.id, value); const successrmv1 = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**Removed: \`${value}\`Level(s) From \`${mentionedMember.tag}\`!**`)
                    message.lineReplyNoMention({ embed: successrmv1 })
                } catch (err) { console.log(err); }
            } else if (args[2] == 'set') {
                if (!value) {
                    const nopr9 = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`${value}\` Is Not A Number!**`)
                    return message.lineReplyNoMention({ embed: nopr9 })
                }
                try {
                    await Levels.setLevel(mentionedMember.id, message.guild.id, value); const successset1 = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**Set: \`${value}\`Level(s) To \`${mentionedMember.tag}\`**`)
                    message.lineReplyNoMention({ embed: successset1 })
                } catch (err) { console.log(err); }
            }
        }
    }
};