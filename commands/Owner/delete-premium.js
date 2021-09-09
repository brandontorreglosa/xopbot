const premiumSchema = require("../../models/premium");
const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: 'delete-premium',
    cooldown: 3,
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    aliases: ['delete-p', 'r-p'],
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

        const noplusac = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#c30202')
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`**\`${member.username}\` Does Not Have \`Premium\`! 😭 \nBuy Premium From Here (https://www.patreon.com/user?u=52511474&fan_landing=true)**`)

        premiumSchema.findOne(
            {
                User: member.id,
            },
            async (err, data) => {
                if (data)
                    return message.lineReplyNoMention(noplusac);

                data.delete();
                const success = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor('#c30202')
                    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`**Removed Successfully \`${member.username}\` From The Premium Database! 💲**`)
                return message.lineReplyNoMention(success)
            }
        );



    },
}