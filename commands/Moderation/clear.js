const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
    name: 'clear',
    permissions: ["MANAGE_MESSAGES"],
    clientpermissions: ["MANAGE_MESSAGES", "SEND_MESSAGES", "EMBED_LINKS"],
    cooldown: 4,
    description: "Clear messages!",
    async execute(client, message, cmd, args, Discord) {
        try {
            const aman = args[0];
            if (!args[0]) {
                const nopr = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`**\`(prefix)clear <number>\`**`)
                return message.lineReplyNoMention(nopr)
            }

            if (isNaN(args[0])) {
                const nonum = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`**\`${aman}\` Is Not A Number!**`)
                return message.lineReplyNoMention(nonum)
            }

            if (args[0] > 100) {
                const maxlen = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`**You Are Not Allowed To Delete More Than \`100\` Messages!**`)
                return message.lineReplyNoMention(maxlen)
            }

            if (args[0] < 1) {
                const minlen = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`**You Have To Delete At Least \`1\` Message!**`)
                return message.lineReplyNoMention(minlen)
            }

            await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
                message.channel.bulkDelete(messages)
                const success = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`**Successfully Deleted \`${messsages, size}\` Messages!**`)

                message.lineReplyNoMention(success)
                    .then(message => {
                        setTimeout(() => message.delete(), 4000);
                    })
            });
        } catch (err) {
            return message.lineReplyNoMention({ content: '**Cannot Delete Message Old Than 14 Days!**' })
            .then(message => {
                setTimeout(() => message.delete(), 6000);
            })
        }

    }
}