const os = require('os')
const OWNER_ID = process.env.Owner_ID;

module.exports = {
    name: "help",
    aliases: ['moderation', 'utility', 'bugs', 'status', 'socials', 'fun', 'games', 'music', 'economy', 'leveling', 'nsfw', 'premium', 'invites', 'credits', 'config', 'images', 'owner', 'βοηθεια', 'μετριοπαθεια', 'χρησιμοτητα', 'σφαλματα', 'κατασταση', 'κοινωνικα', 'διασκεδαση', 'παιχνιδια', 'μουσικη', 'οικονομια', 'ισοπεδωση', 'προσκαληση'],
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

        else if (cmd === 'moderation') {

            message.react('⛏');

            const embed2 = new Discord.MessageEmbed()
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
                //.setTitle('__🛠️ Moderation__')
                .setColor('#c30202')
                .addFields(
                    { name: '__🛠️ Moderation (20)__', value: '`dm`-__***Dm A User!***__  \n`ban`-__***Ban A Member From A Server!***__ \n`unban`-__***Unban A Member From A Server!***__  \n`kick`-__***Kick A Member From A Server!***__ \n`mute`-__***Mute A Member From A Server!***__ \n`unmute`-__***Unmute A Member From A Server!***__ \n`nuke`-__***Clear A Channel!***__ \n`clear`-__***Clear Messages From A Server!***__  \n`command`-__***Gives Basic Server Rules Of A Server!***__  \n`slowmode`-__***Add Slowmode To A Text Channel!***__ \n`addrole`-__***Add A Role To A User!***__ \n`removerole`-__***Remove A Role From A User!***__ \n`createembed`-__***Create A Custom Embed!***__ \n`createtext`-__***Create A Text Channel!***__ \n`createvoice`-__***Create A Voice Channel!***__ \n`deletechannel`-__***Delete A Channel!***__ \n`userlock`-__***Lock A Role From A Specific Channel!***__ \n`userunlock`-__***Unlock A Role From A Specific Channel!***__ \n`channellock`-__***Lock A Channel!***__ \n`channelunlock`-__***Unlock A Channel!***__' },
                )
                .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

            await message.channel.send(embed2)
        }

        else if (cmd === 'utility') {

            message.react('⚙');

            const embed3 = new Discord.MessageEmbed()
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
                //.setTitle('__⚙ Utility__')
                .setColor('#c30202')
                .addFields(
                    { name: '__⚙ Utility (9)__', value: '`ticket`-__***Generates Private Text Channel!***__ \n`webhook`-__***Send Something From A Webhook!***__ \n`xopchat`-__***Request For Xopchat!***__ \n`afk`-__***Get AFK Status!***__ \n`suggestions`-__***Make A Suggestion To The Admins!***__ \n`nickname`-__***Change Someones Nickname!***__ \n`anime`-__***Search For Anime!***__ \n`wiki`-__***Search Something On Wiki!***__ \n`google`-__***Search Something On Google!***__' }
                )
                .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

            await message.channel.send(embed3)
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

        else if (cmd === 'status') {

            message.react('💹');

            const embed5 = new Discord.MessageEmbed()
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
                //.setTitle('__📈 Status__')
                .setColor('#c30202')
                .addFields(
                    { name: '__📈 Status (6)__', value: '`mcserver`-__***Get Real-Time Status Of MCServers!***__  \n`statusping`-__***Get A Status Ping Of Your Server!***__ \n`serverinfo`-__***Get Your Servers Information!***__ \n`botinfo`-__***Get The Bots Information!***__ \n`covid`-__***Get Covid Information Of A Area!***__ \n`userinfo`-__***Get A Real User Info!***__' }
                )
                .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

            await message.channel.send(embed5)
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

        else if (cmd === 'fun') {

            message.react('🤪');

            const embed7 = new Discord.MessageEmbed()
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
                //.setTitle('__🥳 Fun__')
                .setColor('#c30202')
                .addFields(
                    { name: '__🥳 Fun (18)__', value: '`ping`-__***Not Real Ping!***__ \n`avatar`-__***Shows A Users Avatar!***__ \n`badges`-__***Gives You A Users Badge!***__ \n`8ball`-__***Ask 8ball A Question!***__ \n`reverse`-__***Reverse A Word That You Send!***__ \n`coinflip`-__***Flip A Coin!***__ \n`meme`-__***Get Memes From Reddit!***__ \n`say`-__***XOPBOT Repeats The Word!***__ \n`ascii`-__***Convert Text To Ascii!***__ \n`fliptext`-__***Flip Your Text!***__ \n`dog`-__***Get A Random Dog!***__ \n`cat`-__***Get A Random Cat!***__ \n`respect`-__***Respect A User!***__ \n`hack`-__***Hack A User!***__  \n`kill`-__***Kill A User!***__ \n`hug`-__***Hug A User!***__ \n`kiss`-__***Kiss A User!***__ \n`pp`-__***Get A Users PP!***__' }
                )
                .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

            await message.channel.send(embed7)
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

        else if (cmd === 'economy') {

            message.react('💵');

            const embed9 = new Discord.MessageEmbed()
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
                // .setTitle('__🤑 Economy__')
                .setColor('#c30202')
                .addFields(
                    { name: '__🤑 Economy (11)__', value: '`shop(1-2)`-__***Get Something From The Shop!***__ \n`profile`-__***Get Your Profile***__ \n`balance`-__***Get Your Banks And Wallet Balance!***__  \n`deposit`-__***Deposit Xocoins Into Your Bank!***__  \n`withdraw`-__***Withdraw Money Out Of Your Bank!***__  \n`beg`-__***Beg From XOPBOT For Xocoins!***__ \n`coins-set`-__***Private Command!***__  \n`give`-__***Private Command!***__  \n`search`-__***Search For Xocoins On Locations!***__ \n`work`-__***Work For Xocoins!***__ \n`daily`-__***Get Daily Xocoins!***__' }
                )
                .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

            await message.channel.send(embed9)
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

            var errMessage = "**You Little Pervert! 😊 This Is Not A NSFW Channel! 🔞**";
            if (!message.channel.nsfw) {
                message.react('💢');

                return message.reply(errMessage)
                    .then(message => {
                        message.delete({ timeout: 6000 })
                    })
            }

            message.react('🔞');

            const embed11 = new Discord.MessageEmbed()
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
                //.setTitle('__🔞 NSFW__')
                .setColor('#c30202')
                .addFields(
                    { name: '__🔞 NSFW (44)__', value: '**Real Life NSFW**: \n`4k` \n`orgy` \n`neko` \n`pgif` \n`spanks` \n`squirts` \n`gangbang` \n`handcuffed` \n`threesome` \n`stripgirls` \n`doggystyle` \n`lesbians` \n`lewds` \n`sluts` \n`bigass` \n`bigboobs` \n`bikinis` \n`panties` \n`yogapants` \n`gonewild` \n`creampie` \n`cumsluts` \n`blowjob` \n`dildo` \n`milf` \n`bdsm` \n`anal` \n`ass` \n`pussy` \n`boobs` \n`thigh` \n**Anime NSFW**: \n`hentai` \n`hthigh` \n`hanal` \n`hboobs` \n`rule34` \n`cowgirl` \n`netorare` \n`succubus` \n`paizuri` \n`yuri` \n`hmidriff` \n`hneko` \n`hkitsune` \n**Bot Invite**: (https://discord.com/oauth2/authorize?client_id=831824859066925087&scope=bot&permissions=4294967295)' },
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
                    { name: '__🔗 Invites (2)__', value: '`botinvite`-__***Invite The Bot To Your Server!***__ \n`websiteinvite`-__***Go To XOPBOTs Official Website!***__' }
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

        else if (cmd === 'config') {

            message.react('🌘');

            const embed15 = new Discord.MessageEmbed()
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
                //.setTitle('__🎮 Games__')
                .setColor('#c30202')
                .addFields(
                    { name: '__⚠ Config (9)__', value: '`antiwords`-__***Setup Bad Words Detector!***__ \n`antilink`-__***Setup Antilink On A Server!***__ \n`autonsfw`-__***Setup Autonsfw On A Server!***__ \n`automeme`-__***Setup Automeme On A Server!***__ \n`joinchannel`-__***Setup The Join Channel!***__ \n`leavechannel`-__***Setup The Leave Channel!***__ \n`joinmesage`-__***Setup The Join Message!***__ \n`leavemessage`-__***Setup The Leave Message!***__ \n`setprefix`-__***Set The Server Prefix!***__' }
                )
                .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

            await message.channel.send(embed15)
        }

        else if (cmd === 'images') {

            message.react('📸');

            const embed15 = new Discord.MessageEmbed()
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
                //.setTitle('__🎮 Games__')
                .setColor('#c30202')
                .addFields(
                    { name: '__📷 Images (13)__', value: '`ad`-__***Wow You Became A AD!***__ \n`pet`-__***Aww You Got Pet!***__ \n`m&m`-__***Wow You Are A M&M!***__ \n`phub`-__***What Are You Doing?***__ \n`drip`-__***Get A Image Of A Drip User!***__ \n`alert`-__***Alert The World!***__ \n`facts`-__***Facts Only Mate!***__ \n`clown`-__***Wow You Are A Clown!***__ \n`drake`-__***The Drake Meme!***__ \n`water`-__***I Need Water Guide Me!***__ \n`clyde`-__***Get An Image Of Clyde Sending!***__ \n`biden`-__***Make Biden Tweet Something!***__  \n`grave`-__***Get An Image Of A User In A Grave!***__ ' },
                    { name: '__📷 Images 2 (13)__', value: '\n`stonks`-__***Wow Im Rich ASF!***__ \n`heaven`-__***Get A Image Of A User In Heaven!***__ \n`pikachu`-__***Pikachu Meme If You Know!***__ \n`uncover`-__***The Rick And Morty Meme!***__ \n`iamspeed`-__***Yes Im Fast Asf Boi You See!***__ \n`rickroll`-__***You Just Got Rickrolled!***__ \n`tableflip`-__***Get A Image Doing A Tableflip!***__ \n`fbiopenup`-__***Oh Shoot The FBI Is Here!***__ \n`batmanslap`-__***Batman Slap XOPBOT!***__ \n`carreverse`-__***Reverse The Car From The Cringe!***__ \n`wideavatar`-__***Get A Image Of A Users Wide Pfp!***__ \n`dockofshame`-__***Get A Image Of A User On The Dock!***__ \n`changemymind`-__***Change A Users Mind!***__' },
                    { name: 'Total Images', value: '```26```'}
                )
                .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

            await message.channel.send(embed15)
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

        if (cmd === 'βοηθεια') {

            message.react('✅');

            const embed16 = new Discord.MessageEmbed()
                .setAuthor(`XOPBOT Εντολες`, client.user.displayAvatarURL({ dynamic: true }))
                //.setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
                .setImage('https://share.creavite.co/KZRSRMoPxz3F8kPp.gif') //my banner for my bot 
                //.setTitle('XOPBOT Commands')
                .setColor('#c30202')
                .addFields(
                    {
                        name: '__🛠️ Μετριοπαθεια__',
                        value: '`x!μετριοπαθεια`',
                        inline: true
                    },
                    {
                        name: '__⚙ Χρησιμοτητα__',
                        value: '`x!χρησιμοτητα`',
                        inline: true
                    },
                    {
                        name: '__🐛 Σφαλματα__',
                        value: '`x!σφαλματα`',
                        inline: true
                    },
                    {
                        name: '__📈 Κατασταση__',
                        value: '`x!κατασταση`',
                        inline: true
                    },
                    {
                        name: '__💬 Κοινωνικα__',
                        value: '`x!κοινωνικα`',
                        inline: true
                    },
                    {
                        name: '__🎮 Παιχνιδια__',
                        value: '`x!παιχνιδια`',
                        inline: true
                    },
                    {
                        name: '__🥳 Διασκεδαση__',
                        value: '`x!διασκεδαση`',
                        inline: true
                    },
                    {
                        name: '__🎶 Μουσικη__',
                        value: '`x!μουσικη`',
                        inline: true
                    },
                    {
                        name: '__🤑 Οικονομια__',
                        value: '`x!οικονομια`',
                        inline: true
                    },
                    {
                        name: '__⏫ Ισοπεδωση__',
                        value: '`x!ισοπεδωση`',
                        inline: true
                    },
                    {
                        name: '__🔗 Προσκαληση__',
                        value: '`x!προσκαληση`',
                        inline: true
                    },


                )
                .setFooter(`Φτιαχτηκε Απο Τ(ο/η)ν: ${message.author.tag}`, message.author.displayAvatarURL())

            await message.channel.send(embed16)
        }

        else if (cmd === 'μετριοπαθεια') {

            message.react('⛏');

            const embed17 = new Discord.MessageEmbed()
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
                //.setTitle('__🛠️ Moderation__')
                .setColor('#c30202')
                .addFields(
                    { name: '__🛠️ Mετριοπαθεια__', value: '`ban`-__***Κανε Ban Ενα Member!***__  `\nkick`-__***Κανε Kick Ενα Member!***__  `\n\mute`-__***Κανε Mute Ενα Member!***__  `\n\mute timed`-__***Κανε Time Mute Ενα Member!***__  `\nunmute`-__***Κανε Unmute Ενα Member!***__  `\n\clear`-__***Κανε Clear Messages Απο Ενα Server!***__  `\n\command`-__***Δινει Βασικους Κανονες Απο Server!***__  `\n\slowmode`-__***Κανε Add Slowmode Σε Text Channel!***__ `\naddrole`-__***Δωσε Ενα Role Σε User!***__ `\nremoverole`-__***Σβησε Εωα Role Απο User!***__ `\nsetnick`-__***Κανε Set Server Nickname!***__ `\nresetnick`-__***Κανε Reset To Normal Nickname!***__ `\nlock`-__***Κανε Lock Channel Απο Συγκεκριμενο Role!***__ `\nunlock`-__***Κανε Unlock Channel Απο Συγκεκριμενο Role!***__' },
                )
                .setFooter(`Φτιαχτηκε Απο Τ(ο/η)ν: ${message.author.tag}`, message.author.displayAvatarURL())

            await message.channel.send(embed17)

        }

        else if (cmd === 'χρησιμοτητα') {

            message.react('⚙');

            const embed18 = new Discord.MessageEmbed()
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
                //.setTitle('__⚙ Utility__')
                .setColor('#c30202')
                .addFields(
                    { name: '__⚙ Χρησιμοτητα__', value: '`ticket`-__***Κανει Generate Ιδιωτικο Text Channel!***__ `\nafk`-__***Παρε AFK Status!***__ `\n\suggestions`-__***Κανε Suggest Στους Admins!***__' }
                )
                .setFooter(`Φτιαχτηκε Απο Τ(ο/η)ν: ${message.author.tag}`, message.author.displayAvatarURL())

            await message.channel.send(embed18)
        }

        else if (cmd === 'σφαλματα') {

            message.react('🐜');

            const embed19 = new Discord.MessageEmbed()
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
                //.setTitle('__🐛 Bugs__')
                .setColor('#c30202')
                .addFields(
                    { name: '__🐛 Σφαλματα__', value: '`bugreport`-__***Κανε Report Ενα Bug Στους Admins!***__ `\nfindbugs`-__***Ψαξε Bugs Στο Server Σου!***__ `\nclearbugs`-__***Κανε Clear Bugs Απο Το Server Σου!***__' }
                )
                .setFooter(`Φτιαχτηκε Απο Τ(ο/η)ν: ${message.author.tag}`, message.author.displayAvatarURL())

            await message.channel.send(embed19)
        }

        else if (cmd === 'κατασταση') {

            message.react('💹');

            const embed20 = new Discord.MessageEmbed()
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
                //.setTitle('__📈 Status__')
                .setColor('#c30202')
                .addFields(
                    { name: '__📈 Κατασταση__', value: '`mcserver`-__***Παρε Real-Time Κατασταση Για MCServers!***__  `\nstatusping`-__***Παρε Κατασταση Του Ping Του Server Σου!***__ `\nserverinfo`-__***Παρε Το Server Information!***__ `\nbotinfo`-__***Παρε Tο Bot Information!***__ `\ncovid`-__***Παρε Covid Information Για Τη Περιοχη Σου!***__ `\nuserinfo`-__***Παρε Real User Info!***__' }
                )
                .setFooter(`Φτιαχτηκε Απο Τ(ο/η)ν: ${message.author.tag}`, message.author.displayAvatarURL())

            await message.channel.send(embed20)
        }

        else if (cmd === 'κοινωνικα') {

            message.react('🗨');

            const embed21 = new Discord.MessageEmbed()
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
                //.setTitle('__💬 Socials__')
                .setColor('#c30202')
                .addFields(
                    { name: '__💬 Κοινωνικα__', value: '`youtube`-__***Πηγαινε Στο Youtube Channel Μου!***__ `\nscratch`-__***Πηγαινε Στο Scratch Account Μου!***__ `\namino`-__***Πηγαινε Στο Amino Account Μου!***__' }
                )
                .setFooter(`Φτιαχτηκε Απο Τ(ο/η)ν: ${message.author.tag}`, message.author.displayAvatarURL())

            await message.channel.send(embed21)
        }

        else if (cmd === 'διασκεδαση') {

            message.react('🤪');

            const embed22 = new Discord.MessageEmbed()
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
                //.setTitle('__🥳 Fun__')
                .setColor('#c30202')
                .addFields(
                    { name: '__🥳 Διασκεδαση__', value: '`ping`-__***Οχι Αληθινο Ping!***__ `\navatar`-__***Δειχνει Το User Avatar!***__ `\nbadges`-__***Δειχνει Το Users Badge!***__ `\n8ball`-__***Ρωτησε Τον 8ball Μια Ερωτηση!***__ `\nreverse`-__***Κανε Reverse Μια Λεξη Που Κανεις Send!***__ `\ncoinflip`-__***Κανε Flip A Coin!***__ `\nmeme`-__***Παρε Memes Απο Το Google!***__  `\nkill`-__***Κανε Kill Ενα User!***__ `\nhug`-__***Κανε Hug Ενα User!***__ `\nkiss`-__***Κανε Kiss Ενα User!***__ `\npp`-__***Παρε Ενα Users PP!***__' }
                )
                .setFooter(`Φτιαχτηκε Απο Τ(ο/η)ν: ${message.author.tag}`, message.author.displayAvatarURL())

            await message.channel.send(embed22)
        }

        else if (cmd === 'μουσικη') {

            message.react('🎵');

            const embed23 = new Discord.MessageEmbed()
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
                // .setTitle('__🎶 Music__')
                .setColor('#c30202')
                .addFields(
                    { name: '__🎶 Mουσικη__', value: '`play`-__***Κανε Play Ενα Τραγουδι Απο Το Youtube!***__  `\nstop`-__***Κανε Stop Tο Player!***__  `\n\skip`-__***Κανε Skip To Τραγουδι Στο Queue!***__ `\n\pause`-__***Κανε Pause Tο Τραγουδι Απο Να Κανει Play!***__ `\nunpause`-__***Κανε Unpause Tο Τραγουδι Ωστε Να Κανει Play!***__' }
                )
                .setFooter(`Φτιαχτηκε Απο Τ(ο/η)ν: ${message.author.tag}`, message.author.displayAvatarURL())

            await message.channel.send(embed23)
        }

        else if (cmd === 'οικονομια') {

            message.react('💵');

            const embed24 = new Discord.MessageEmbed()
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
                // .setTitle('__🤑 Economy__')
                .setColor('#c30202')
                .addFields(
                    { name: '__🤑 Οικονομια__', value: '`balance`-__***Παρε Το Δικo Σου Bank Και Wallet Balance!***__  `\ndeposit`-__***Καταθετησε Xocoins Στην Δικη Σου Τραπεζα!***__  `\nwithdraw`-__***Αποσυρωσε Xocoins Εξω Απο Το Bank Σου!***__  `\nbeg`-__***Παρακαλεσε Τον XOPBOT Για Xocoins!***__  `\ngive`-__***Ιδιωτικο Command!***__  `\nsearch`-__***Ψαξε Για Xocoins Σε Περιοχες!***__ `\nwork`-__***Δουλεψε Για Xocoins!***__ `\ndaily`-__***Παρε Ημερησια Δοση Xocoins!***__' }
                )
                .setFooter(`Φτιαχτηκε Απο Τ(ο/η)ν: ${message.author.tag}`, message.author.displayAvatarURL())

            await message.channel.send(embed24)
        }

        else if (cmd === 'ισοπεδωση') {

            message.react('🆙');

            const embed25 = new Discord.MessageEmbed()
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
                //.setTitle('__⏫ Leveling__')
                .setColor('#c30202')
                .addFields(
                    { name: '__⏫ Ισοπεδωση__', value: '`xoprank`-__***Ιδιωτικο Command!***__ `\nrank`-__***Παρε Το Level Rank Card Σου!***__  `\nleaderboard`-__***Παρε Το Server Leaderboard!***__ `\nlevel`-__***Παρε Το Level Ενος User!***__ `\nedit`-__***Κανε Edit Level Η Xp!***__' }
                )
                .setFooter(`Φτιαχτηκε Απο Τ(ο/η)ν: ${message.author.tag}`, message.author.displayAvatarURL())

            await message.channel.send(embed25)
        }

        else if (cmd === 'προσκαληση') {

            message.react('🖇');

            const embed26 = new Discord.MessageEmbed()
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
                //.setTitle('__🔗 Invites__')
                .setColor('#c30202')
                .addFields(
                    { name: '__🔗 Προσκαληση__', value: '`botinvite`-__***Κανε Invite Tο Bot Στο Server Σου!***__ `\nwebsiteinvite`-__***Πηγαινε Στο Official Website Του XOPBOT!***__' }
                )
                .setFooter(`Φτιαχτηκε Απο Τ(ο/η)ν: ${message.author.tag}`, message.author.displayAvatarURL())

            await message.channel.send(embed26)
        }

        else if (cmd === 'παιχνιδια') {

            message.react('🎯');

            const embed27 = new Discord.MessageEmbed()
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
                //.setTitle('__🎮 Games__')
                .setColor('#c30202')
                .addFields(
                    { name: '__🎮 Παιχνιδια__', value: '`guessthenumber`-__***Μαντεψε Tο Nουμερο!***__ `\nrps`-__***Παιξε Rock,Paper,Sciccors!***__ `\nhangman`-__***Παιξε Hangman!***__' }
                )
                .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

            await message.channel.send(embed27)
        }

    }
}
