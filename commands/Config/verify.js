const lineReplyNoMention = require("discord-reply");
const color = process.env.Color;
const gcolor = process.env.Gcolor;
const rcolor = process.env.Rcolor;
const errorChannel = process.env.errorChannel;

module.exports = {
    name: "verify",
    cooldown: 10,
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["MANAGE_ROLES", "MANAGE_CHANNELS", "SEND_MESSAGES"],
    description: "verify yourself through here",
    async execute(client, message, cmd, args, Discord) {
        try {
            const user = message.author;
            const channel = client.channels.cache.get('839389883486306304')

            const success = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor(`${gcolor}`)
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**You Have Been Verified Successfully! 😇**`)

            const alreadyv = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor(`${rcolor}`)
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**You're Already \`Verified\` ${message.author.username}! \nPlease Dont Use The Command For No Reason 😡 \n Sent Abused Data To Developer. You Will Face Consequences! `)

            const verify = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor(`${color}`)
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**Type The Code: \`verifymeinobot\` Or \`userverify\` To Verify! \n This Just Makes Sure Your Not A Robot. 🤖⛔ \n So You Can Then Have Server Access In \`${message.guild.name}\`.**`)
            message.lineReplyNoMention(verify)

            const filter = _message => message.author.id === _message.author.id && [`userverify`, 'n', 'verifymeinobot', 'no'].includes(_message.content.toLowerCase());
            const options = { max: 1, time: 30000, errors: ['time'] };
            const proceed = await message.channel.awaitMessages(filter, options)
                .then(collected => [`userverify`, 'verifymeinobot'].includes(collected.first().content.toLowerCase()) ? true : false)
                .catch(() => false);

            if (!proceed) {
                const nostopcmdplz = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`**You Cancelled The Verification Command Successfully!**`)
                return message.lineReplyNoMention(nostopcmdplz)
            };

            const verifieduser = message.guild.roles.cache.find(role => role.name == "Verified");
            if (user.roles.cache.has(verifieduser)) return message.lineReplyNoMention(alreadyv).then(() => channel.send({ content: `**ATTENTION! PTOS WAS ABUSED JUST NOW! \nUser: \`${message.author.username}\` Abused The PTOS. \nPlease Check The Before Reports For A Same Incident. \n Contact Developer For Futher Notice If Needed. \n Email: ||brandontorreglosa@gmail.com|| Or Website ||https://xopbot.glitch.me||**` }));
            else await user.roles.add(verifieduser);
            await message.lineReplyNoMention(success);

        } catch (err) {
            const errorlogs = client.channels.cache.get(errorChannel);
            message.lineReplyNoMention({ content: "**Looks Like An Error Has Occured!**" });
            errorlogs.send({ content: `**Error On Verification Command!\n\nError:\n\n ${err}**` })
        }
    }
}