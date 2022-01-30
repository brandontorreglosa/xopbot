const { MessageButton, MessageActionRow, MessageMenuOption, MessageMenu } = require('discord-buttons');
const os = require('os')
const OWNER_ID = process.env.Owner_ID;
const color = process.env.Color;
module.exports = {
    name: "help",
    aliases: ['bugs', 'socials', 'games', 'leveling', 'nsfw', 'premium', 'invites', 'credits', 'owner'],
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    async execute(client, message, cmd, args, Discord) {

        const xopemoji = client.emojis.cache.get('836214135866785806');
        const heheemoji = client.emojis.cache.get('862038389687320586');
        const spongepog = client.emojis.cache.get('824886938804682812');

        if (cmd === 'help') {

            message.react('✅');

            const option = new MessageMenuOption()
                .setLabel('**Utility**')
                .setValue('menuid')

            const option2 = new MessageMenuOption()
                .setLabel('**Config**')
                .setValue('menuid')

            const option3 = new MessageMenuOption()
                .setLabel('**Bugs**')
                .setValue('menuid')

            const option4 = new MessageMenuOption()
                .setLabel('**Status**')
                .setValue('menuid')

            const option5 = new MessageMenuOption()
                .setLabel('**Socials**')
                .setValue('menuid')

            const option6 = new MessageMenuOption()
                .setLabel('**Games**')
                .setValue('menuid')

            const option7 = new MessageMenuOption()
                .setLabel('**Fun**')
                .setValue('menuid')

            const option8 = new MessageMenuOption()
                .setLabel('**Images**')
                .setValue('menuid')

            const option9 = new MessageMenuOption()
                .setLabel('**Music**')
                .setValue('menuid')

            const option10 = new MessageMenuOption()
                .setLabel('**Economy**')
                .setValue('menuid')

            const select = new MessageMenu()
                .setID('customid')
                .setPlaceholder('**Moderation**')
                .setMaxValues(10)
                .setMinValues(5)
                .addOption(option, option2, option3, option4, option5, option6, option7, option8, option9, option10)

            const button = new MessageButton()
                .setStyle('url')
                .setURL('https://xopbot.glitch.me/')
                .setLabel(`Site`)
                .setEmoji(`💻`)

            const button2 = new MessageButton()
                .setStyle('url')
                .setURL('https://xopbot.glitch.me/#donations')
                .setLabel(`Offer`)
                .setEmoji(`💰`)

            const button3 = new MessageButton()
                .setStyle('url')
                .setURL('https://xopbot.glitch.me/services/api/home')
                .setLabel(`API`)
                .setEmoji(`🌐`)

            const button19 = new MessageButton()
                .setStyle('url')
                .setURL('https://xopbot.glitch.me/policy/privacy')
                .setLabel('PTOS')
                .setEmoji('🕵️‍♂️')

            const row = new MessageActionRow()
                .addComponents(button, button2, button3, button19);

            const embed = new Discord.MessageEmbed()
                .setAuthor(`XOPBOT Commands`, client.user.displayAvatarURL({ dynamic: true }))
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
                .setImage('https://cdn.discordapp.com/attachments/824319314495537175/861288765145088030/standard_1.gif') //my banner for my bot 
                //.setTitle('XOPBOT Commands')
                .setColor(`${color}`)
                .addFields(
                    {
                        name: '__<:amongusBan:829300772860592136> Moderation__',
                        value: '`x!moderation`',
                        inline: true
                    },
                    {
                        name: '__⚙ Utility__',
                        value: '`x!utility`',
                        inline: true
                    },
                    {
                        name: '__⚠ Config__',
                        value: '`x!config`',
                        inline: true
                    },
                    {
                        name: '__👷‍♂️ Owner__',
                        value: '`x!owner`',
                        inline: true
                    },
                    {
                        name: '__🐛 Bugs__',
                        value: '`x!bugs`',
                        inline: true
                    },
                    {
                        name: '__📈 Status__',
                        value: '`x!status`',
                        inline: true
                    },
                    {
                        name: '__💬 Socials__',
                        value: '`x!socials`',
                        inline: true
                    },
                    {
                        name: '__🎮 Games__',
                        value: '`x!games`',
                        inline: true
                    },
                    {
                        name: '__🥳 Fun__',
                        value: '`x!fun`',
                        inline: true
                    },
                    {
                        name: '__<:BonkGoToHornyJail:824886935091675177> Images__',
                        value: '`x!images`',
                        inline: true,
                    },
                    {
                        name: '__<a:uwudogmeme:828235782619267083> Music__',
                        value: '`x!music`',
                        inline: true
                    },
                    {
                        name: '__🤑 Economy__',
                        value: '`x!economy`',
                        inline: true
                    },
                    {
                        name: '__🎉 Giveaway__',
                        value: '`x!giveaway`',
                        inline: true
                    },
                    {
                        name: '__<:Stonks:824886940079489025> Leveling__',
                        value: '`x!leveling`',
                        inline: true
                    },
                    {
                        name: '__🔞 NSFW__',
                        value: '`x!nsfw`',
                        inline: true
                    },
                    {
                        name: '__👑 Premium__',
                        value: '`x!premium`',
                        inline: true
                    },
                    {
                        name: '__🔗 Invites__',
                        value: '`x!invites`',
                        inline: true
                    },
                    {
                        name: '__🤖 Credits__',
                        value: '`x!credits`',
                        inline: true
                    },
                    {
                        name: '__📢 Announcment__',
                        value: '```Website Domain Changed! New Domain Is https://xopbot.glitch.me/```'
                    }
                )
                .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

            await message.channel.send(embed, row)
        }

        else if (cmd === 'bugs') {

            message.react('🐜');

            const button4 = new MessageButton()
                .setStyle('url')
                .setURL('https://xopbot-gg.glitch.me/')
                .setLabel('Website')
                .setEmoji(`💻`)

            const embed4 = new Discord.MessageEmbed()
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
                //.setTitle('__🐛 Bugs__')
                .setColor(`${color}`)
                .addFields(
                    { name: '__🐛 Bugs (3)__', value: '\n[bugreport](https://xopbot-gg.glitch.me/) \n__***Report A Bug To Admins!***__ \n[findbugs](https://xopbot-gg.glitch.me/) \n__***Find Bugs On Your Server!***__ \n[clearbugs](https://xopbot-gg.glitch.me/) \n__***Clear Bugs From Your Server!***__' }
                )
                .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

            await message.channel.send(embed4, button4)
        }

        else if (cmd === 'socials') {

            message.react('🗨');

            const button5 = new MessageButton()
                .setStyle('url')
                .setURL('https://xopbot-gg.glitch.me/')
                .setLabel('Website')
                .setEmoji(`💻`)

            const embed6 = new Discord.MessageEmbed()
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
                //.setTitle('__💬 Socials__')
                .setColor(`${color}`)
                .addFields(
                    { name: '__💬 Socials (3)__', value: '\n[youtube](https://xopbot-gg.glitch.me/) \n__***Go To My Youtube Channel!***__ \n[scratch](https://xopbot-gg.glitch.me/) \n__***Go To My Scratch Account!***__ \n[amino](https://xopbot-gg.glitch.me/) \n__***Go To My Amino Account!***__' }
                )
                .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

            await message.channel.send(embed6, button5)
        }

        else if (cmd === 'leveling') {

            message.react('🆙');

            const button7 = new MessageButton()
                .setStyle('url')
                .setURL('https://xopbot-gg.glitch.me/')
                .setLabel('Website')
                .setEmoji(`💻`)

            const embed10 = new Discord.MessageEmbed()
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
                //.setTitle('__⏫ Leveling__')
                .setColor(`${color}`)
                .addFields(
                    { name: '__⏫ Leveling (4)__', value: '\n[rank](https://xopbot-gg.glitch.me/) \n__***Get Your Level Rank Card!***__  \n[leaderboard](https://xopbot-gg.glitch.me/) \n__***Get Your Servers Leaderboard!***__ \n[level](https://xopbot-gg.glitch.me/) \n__***Get A Users Level!***__ \n[edit](https://xopbot-gg.glitch.me/) \n__***Edit Level Or Xp!***__' }
                )
                .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

            await message.channel.send(embed10, button7)
        }

        else if (cmd === 'nsfw') {

            const nsfenochcembed = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor(`${color}`)
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription("**You Little Pervert! 😊 This Is Not A NSFW Channel! 🔞**")

            if (!message.channel.nsfw) {
                message.delete()

                return message.lineReplyNoMention(nsfenochcembed)
                    .then(message => {
                        setTimeout(() => message.delete(), 6000);
                    })
            }

            message.react('🔞');

            const button8 = new MessageButton()
                .setStyle('url')
                .setURL('https://pornhub.com/')
                .setLabel('PornHub')
                .setEmoji(`👅`)

            const button81 = new MessageButton()
                .setStyle('url')
                .setURL('https://xnxx.com/')
                .setLabel('XNXX')
                .setEmoji(`💦`)

            const button811 = new MessageButton()
                .setStyle('url')
                .setURL('https://hanime.tv')
                .setLabel('Hanime')
                .setEmoji(`💋`)

            const row2 = new MessageActionRow()
                .addComponents(button8, button81, button811)

            const embed11 = new Discord.MessageEmbed()
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
                //.setTitle('__🔞 NSFW__')
                .setColor(`${color}`)
                .addFields(
                    { name: '__🔞 NSFW (45)__', value: '**Real Life NSFW**: \n```4k, orgy, gapes, neko, pgif, spanks, squirts, gangbang, handcuffed, threesome, doggystyle, masturbation, lewds, sluts, bigass, bigboobs, bikinis, panties, yogapants, gonewild, creampie, cumsluts, blowjob, dildo, milf, bdsm, anal, ass, pussy, boobs, thigh``` \n**Anime NSFW (Premium)**: \n```hentai, hthigh, hanal, hboobs, hrule34, hcowgirl, hmasturbation, hnetorare, hsuccubus, hpaizuri, hyuri, hmidriff, hneko, hkitsune```' },
                )
                .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

            await message.channel.send(embed11, row2)
        }

        else if (cmd === 'premium') {

            message.react('🏆');

            const button9 = new MessageButton()
                .setStyle('url')
                .setURL('https://xopbot-gg.glitch.me/')
                .setLabel('Website')
                .setEmoji(`💻`)

            const embed12 = new Discord.MessageEmbed()
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
                //.setTitle('__👑 Premium__')
                .setColor(`${color}`)
                .addFields(
                    { name: '__👑 Premium (5)__', value: '\n[fakeuserinfo](https://xopbot-gg.glitch.me/) \n__***Get A Fake User Info! (Premium)***__ \n[weather](https://xopbot-gg.glitch.me/) \n__***Get Your Current Weather! (Premium)***__ \n[oldmeme](https://xopbot-gg.glitch.me/) \n__***Get Old Memes From Google! (Premium)***__ \n[tictactoe](https://xopbot-gg.glitch.me/) \n__***Play Tictactoe! (Premium)***__ \n[math](https://xopbot-gg.glitch.me/) \n__***Do Math Problems! (Premium)***__' }
                )
                .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

            await message.channel.send(embed12, button9)
        }

        else if (cmd === 'invites') {

            message.react('🖇');

            const button10 = new MessageButton()
                .setStyle('url')
                .setURL('https://xopbot-gg.glitch.me/')
                .setLabel('Website')
                .setEmoji(`💻`)

            const embed13 = new Discord.MessageEmbed()
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
                //.setTitle('__🔗 Invites__')
                .setColor(`${color}`)
                .addFields(
                    { name: '__🔗 Invites (3)__', value: '\n[botinvite](https://xopbot-gg.glitch.me/) \n__***Invite The Bot To Your Server!***__ \n[websiteinvite](https://xopbot-gg.glitch.me/) \n__***Go To XOPBOTs Official Website!***__ \n[voteinvite](https://xopbot-gg.glitch.me/) \n__***Vote For XOPBOT To Get Famous!***__' }
                )
                .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

            await message.channel.send(embed13, button10)
        }

        else if (cmd === 'credits') {

            message.react('📃');

            const button11 = new MessageButton()
                .setStyle('url')
                .setURL('https://xopbot-gg.glitch.me/')
                .setLabel('Website')
                .setEmoji(`💻`)

            const button12 = new MessageButton()
                .setStyle('url')
                .setURL('https://discord.com/oauth2/authorize?client_id=831824859066925087&scope=bot&permissions=4294967295')
                .setLabel('Invite')
                .setEmoji(`🔗`)

            const row3 = new MessageActionRow()
                .addComponents(button11, button12)

            const embed14 = new Discord.MessageEmbed()
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
                //.setTitle('__🤖 Credits__')
                .setColor(`${color}`)
                .addFields(
                    { name: '__🤖 Bot Credits__', value: '`Bot:`-__***The Bots Credits***__ \n`Bot Creator`-__***@👑HACKERPROᵈᵉᵛ#1498***__ \n`Bot Supporter`-__***@Trixer#8894***__' },
                    { name: '__🤖 Bot Website Credits__', value: '`Bot Website:`-__***The Bots Credits Of The Website***__ \n`Bot Website Creator`-__***@👑HACKERPROᵈᵉᵛ#1498***__ \n`Bot Website Manager`-__***@Trixer#8894***__' }
                )
                .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

            await message.channel.send(embed14, row3)
        }

        else if (cmd === 'games') {

            message.react('🎯');

            const button13 = new MessageButton()
                .setStyle('url')
                .setURL('https://xopbot-gg.glitch.me/')
                .setLabel('Website')
                .setEmoji(`💻`)

            const embed115 = new Discord.MessageEmbed()
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
                //.setTitle('__🎮 Games__')
                .setColor(`${color}`)
                .addFields(
                    { name: '__🎮 Games (5)__', value: '\n[guessthenumber](https://xopbot-gg.glitch.me/) \n__***Play GuessTheNumber!***__ \n[rps](https://xopbot-gg.glitch.me/) \n__***Play RockPaperSciccors!***__ \n[hangman](https://xopbot-gg.glitch.me/) \n__***Play Hangman!***__ \n[snake](https://xopbot-gg.glitch.me/) \n__***Play Snake Game!***__ \n[connect4](https://xopbot-gg.glitch.me/) \n__***Play Connect4!***__' }
                )
                .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

            await message.channel.send(embed115, button13)
        }

        else if (cmd === 'owner') {

            message.react('👷‍♂️');

            const button14 = new MessageButton()
                .setStyle('url')
                .setURL('https://xopbot-gg.glitch.me/')
                .setLabel('Website')
                .setEmoji(`💻`)

            if (message.author.id != OWNER_ID) return message.channel.send(`**Sorry Only 👑HACKERPROᵈᵉᵛ#1498 Can Run This Command! 😔**`);

            const embed116 = new Discord.MessageEmbed()
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
                .setColor(`${color}`)
                .addFields(
                    { name: '__👷‍♂️ Owner (6)__', value: '\n[donate-premium](https://xopbot-gg.glitch.me/) \n__***Give Premium To User!***__\n[delete-premium](https://xopbot-gg.glitch.me/) \n__***Remove Premium From User!***__ \n[botservers](https://xopbot-gg.glitch.me/) \n__***Get The Bots Server Names!***__ \n[leaveservers](https://xopbot-gg.glitch.me/) \n__***Make Bot Leave Servers!***__ \n[shutdown](https://xopbot-gg.glitch.me/) \n__***Shutdown The Bot!***__ \n[remind](https://xopbot-gg.glitch.me/) \n__***Remind Me Something!***__' }
                )
                .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())


            await message.channel.send(embed116, button14)
        }
    }
}