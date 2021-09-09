const premiumSchema = require("../../models/premium");
const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: 'donate-premium',
    cooldown: 3,
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    aliases: ['donate-p', 'd-p'],
    async execute(client, message, cmd, args, Discord) {
        if (message.member.id != "600094534386319370") {
            const nopr = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#c30202')
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**Sorry Only 👑HACKERPROᵈᵉᵛ#1498 Can Run This Command! 😔**`)
            return message.lineReplyNoMention(nopr)
        }

        const member = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
        const notvalmem = args[0];
        if (!member) {
            const nomemn = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#c30202')
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**\`${notvalmem}\` Is Not A Valid User!**`)
            return message.lineReplyNoMention(nomemn)
        }

        const alpremium = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#c30202')
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`**\`${member.username}\` Already Has Premium Features!**`)

        premiumSchema.findOne(
            {
                User: member.id,
            },
            async (err, data) => {
                if (data)
                    return message.lineReplyNoMention(alpremium);

                new premiumSchema({
                    User: member.id
                }).save();
                const success = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor('#c30202')
                    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`**Added Successfully \`${member.username}\` To The Premium Database! 💲**`)
                return message.lineReplyNoMention(success)
            }
        );



    },
}