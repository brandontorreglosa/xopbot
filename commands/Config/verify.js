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
            const user = message.mentions.users.first()
            const channel = client.channels.cache.get('839389883486306304')
            const randomCode = [
                '24309',
                '34504',
                '22234',
                '83482',
                '82378',
                '73267',
                '82341',
                'lt-67',
                '78299',
                'cdchs',
                'ver-1',
                'big-t',
                'goog-',
                'xobop',
                'hjews',
                '1h5f7',
                'uuebh',
                'hbsbs',
                'hshsh',
                'hjhjh',
                'iwjjw',
                'ip-12',
                'ser-3',
                'cad-2',
                '75t45',
                'hdhdb',
                'tit-1',
                'bruh1',
                'tooth',
                'twerz',
                '5gf67',
            ]

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
                .setDescription(`**Type The Code: \`13-v-cdshkIK\` Or \`x-v-IGur78o9\` To Verify! \n This Just Makes Sure Your Not A Robot. 🤖⛔ \n So You Can Then Have Server Access In \`${message.guild.name}\`.**`)
            message.lineReplyNoMention(verify)

            const filter = _message => message.author.id === _message.author.id && [`13-v-cdshkIK`, 'x-v-IGur78o9', 'n', 'no'].includes(_message.content.toLowerCase());
            const options = { max: 1, time: 30000, errors: ['time'] };
            const proceed = await message.channel.awaitMessages(filter, options)
                .then(collected => [`13-v-cdshkIK`, 'x-v-IGur78o9'].includes(collected.first().content.toLowerCase()) ? true : false)
                .catch(() => false);

            if (!proceed) {
                const nostopcmdplz = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`**You Cancelled The Verification Command Successfully!**`)
                return user.send(nostopcmdplz)
            };

            const role = message.guild.roles.cache.find(role => role.name == "Verified");
            if (!role) await message.guild.roles.create({
                data: {
                    name: "Verified",
                    color: "GREEN"
                }
            }).catch(err => console.log(err));
            role = message.guild.roles.cache.find(role => role.name == "Verified");
            if (user.roles.cache.has(role.id)) return message.lineReplyNoMention(alreadyv).then(() => channel.send({ content: `**ATTENTION! PTOS WAS ABUSED JUST NOW! \nUser: \`${message.author.username}\` Abused The PTOS. \nPlease Check The Before Reports For A Same Incident. \n Contact Developer For Futher Notice If Needed. \n Email: ||brandontorreglosa@gmail.com|| Or Website ||https://xopbot.glitch.me||**` }));
            else await user.roles.add(role.id);

            await message.lineReplyNoMention(success);
        } catch (err) {
            const errorlogs = client.channels.cache.get(errorChannel);
            message.lineReplyNoMention({ content: "**Looks Like An Error Has Occured!**" });
            errorlogs.send({ content: `**Error On Verification Command!\n\nError:\n\n ${err}**` })
        }
    }
}