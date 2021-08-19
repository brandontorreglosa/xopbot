const os = require('os')
const OWNER_ID = process.env.Owner_ID;

module.exports = {
    name: "help",
    aliases: ['bugs', 'socials', 'games', 'music', 'leveling', 'nsfw', 'premium', 'invites', 'credits', 'owner'],
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    async execute(client, message, cmd, args, Discord) {

        if (cmd === 'help') {

            message.react('✅');

            const embed = new Discord.MessageEmbed()
                .setAuthor(`XOPBOT Commands`, client.user.displayAvatarURL({ dynamic: true }))
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
                .setImage('https://cdn.discordapp.com/attachments/824319314495537175/861288765145088030/standard_1.gif') //my banner for my bot 
                //.setTitle('XOPBOT Commands')
                .setColor('#c30202')
                .addFields(
                    {
                        name: '__🛠️ Moderation__',
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
                        name: '__📷 Images__',
                        value: '`x!images`',
                        inline: true,
                    },
                    {
                        name: '__🎶 Music__',
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
                        name: '__⏫ Leveling__',
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
                    }

                )
                .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

            await message.channel.send(embed)
        }

        else if (cmd === 'bugs') {

            message.react('🐜');

            const embed4 = new Discord.MessageEmbed()
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
                //.setTitle('__🐛 Bugs__')
                .setColor('#c30202')
                .addFields(
                    { name: '__🐛 Bugs (3)__', value: '`bugreport`-__***Report A Bug To Admins!***__ \n`findbugs`-__***Find Bugs On Your Server!***__ \n`clearbugs`-__***Clear Bugs From Your Server!***__' }
                )
                .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

            await message.channel.send(embed4)
        }

        else if (cmd === 'socials') {

            message.react('🗨');

            const embed6 = new Discord.MessageEmbed()
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
                //.setTitle('__💬 Socials__')
                .setColor('#c30202')
                .addFields(
                    { name: '__💬 Socials (3)__', value: '`youtube`-__***Go To My Youtube Channel!***__ \n`scratch`-__***Go To My Scratch Account!***__ \n`amino`-__***Go To My Amino Account!***__' }
                )
                .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

            await message.channel.send(embed6)
        }

        else if (cmd === 'music') {

            message.react('🎵');

            const embed8 = new Discord.MessageEmbed()
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
                // .setTitle('__🎶 Music__')
                .setColor('#c30202')
                .addFields(
                    { name: '__🎶 Music (5)__', value: '`play`-__***Play Any Music From Youtube!***__  \n`stop`-__***Stop The Player!***__ \n`skip`-__***Skip To The Song In Queue!***__ \n`pause`-__***Pause The Song From Playing!***__ \n`unpause`-__***Unpause The Song To Play!***__' }
                )
                .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

            await message.channel.send(embed8)
        }

        else if (cmd === 'leveling') {

            message.react('🆙');

            const embed10 = new Discord.MessageEmbed()
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
                //.setTitle('__⏫ Leveling__')
                .setColor('#c30202')
                .addFields(
                    { name: '__⏫ Leveling (4)__', value: '`rank`-__***Get Your Level Rank Card!***__  \n`leaderboard`-__***Get Your Servers Leaderboard!***__ \n`level`-__***Get A Users Level!***__ \n`edit`-__***Edit Level Or Xp!***__' }
                )
                .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

            await message.channel.send(embed10)
        }

        else if (cmd === 'nsfw') {

            const errMessage = "**You Little Pervert! 😊 This Is Not A NSFW Channel! 🔞**";
            if (!message.channel.nsfw) {
                message.react('💢');

                return message.reply({ content: errMessage, allowedMentions: { repliedUser: true } })
                    .then(message => {
                        setTimeout(() => message.delete(), 6000);
                    })
            }

            message.react('🔞');

            const embed11 = new Discord.MessageEmbed()
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
                //.setTitle('__🔞 NSFW__')
                .setColor('#c30202')
                .addFields(
                    { name: '__🔞 NSFW (43)__', value: '**Real Life NSFW**: ``` 4k, orgy, neko, pgif, spanks, squirts, gangbang, handcuffed, threesome, stripgirls, doggystyle, lewds, sluts, bigass, bigboobs, bikinis, panties, yogapants, gonewild, creampie, cumsluts, blowjob, dildo, milf, bdsm, anal, ass, pussy, boobs, thigh \n**Anime NSFW**: ``` hentai, hthigh, hanal, hboobs, rule34, cowgirl, netorare, succubus, paizuri, yuri, hmidriff, hneko, hkitsune \n**Bot Invite**: (https://discord.com/oauth2/authorize?client_id=831824859066925087&scope=bot&permissions=4294967295)' },
                )
                .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

            await message.channel.send(embed11)
        }

        else if (cmd === 'premium') {

            message.react('🏆');

            const embed12 = new Discord.MessageEmbed()
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
                //.setTitle('__👑 Premium__')
                .setColor('#c30202')
                .addFields(
                    { name: '__👑 Premium (5)__', value: '`fakeuserinfo`-__***Get A Fake User Info! (Premium)***__ \n`weather`-__***Get Your Current Weather! (Premium)***__ \n`oldmeme`-__***Get Old Memes From Google! (Premium)***__ \n`tictactoe`-__***Play Tictactoe! (Premium)***__ \n`math`-__***Do Math Problems! (Premium)***__' }
                )
                .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

            await message.channel.send(embed12)
        }

        else if (cmd === 'invites') {

            message.react('🖇');

            const embed13 = new Discord.MessageEmbed()
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
                //.setTitle('__🔗 Invites__')
                .setColor('#c30202')
                .addFields(
                    { name: '__🔗 Invites (3)__', value: '`botinvite`-__***Invite The Bot To Your Server!***__ \n`websiteinvite`-__***Go To XOPBOTs Official Website!***__ \n`voteinvite`-__***Vote For XOPBOT To Get Famous!***__' }
                )
                .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

            await message.channel.send(embed13)
        }

        else if (cmd === 'credits') {

            message.react('📃');

            const embed14 = new Discord.MessageEmbed()
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
                //.setTitle('__🤖 Credits__')
                .setColor('#c30202')
                .addFields(
                    { name: '__🤖 Bot Credits__', value: '`Bot:`-__***The Bots Credits***__ \n`Bot Creator`-__***@👑HACKERPROᵈᵉᵛ#1498***__ \n`Bot Supporter`-__***@Trixer#8894***__' },
                    { name: '__🤖 Bot Website Credits__', value: '`Bot Website:`-__***The Bots Credits Of The Website***__ \n`Bot Website Creator`-__***@👑HACKERPROᵈᵉᵛ#1498***__ \n`Bot Website Manager`-__***@Trixer#8894***__' },
                    { name: '__🤖 Invites__', value: '[Bot Invite](https://discord.com/oauth2/authorize?client_id=831824859066925087&scope=bot&permissions=4294967295) \n[Bot Website](https://xopbot-gg.glitch.me/)' }
                )
                .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

            await message.channel.send(embed14)
        }

        else if (cmd === 'games') {

            message.react('🎯');

            const embed115 = new Discord.MessageEmbed()
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
                //.setTitle('__🎮 Games__')
                .setColor('#c30202')
                .addFields(
                    { name: '__🎮 Games (3)__', value: '`guessthenumber`-__***Guess The Number!***__ \n`rps`-__***Play Rock,Paper,Sciccors!***__ \n`hangman`-__***Play Hangman!***__' }
                )
                .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

            await message.channel.send(embed115)
        }

        else if (cmd === 'owner') {

            message.react('👷‍♂️');

            if (message.author.id != OWNER_ID) return message.channel.send(`**❌ Developer Only ❌**`);

            const embed116 = new Discord.MessageEmbed()
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
                .setColor('#c30202')
                .addFields(
                    { name: '__👷‍♂️ Owner (2)__', value: '`botservers`-__***Get The Bots Server Names!***__ \n`shutdown`-__***Shutdown The Bot!***__' }
                )
                .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())


            await message.channel.send(embed116)
        }
    }
}