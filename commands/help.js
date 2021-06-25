const os = require('os')

module.exports = {
    name: "help",
    aliases: ['moderation', 'mod', 'utility', 'bugs', 'status', 'socials', 'fun', 'games', 'music', 'economy', 'leveling', 'nsfw', 'premium', 'invites', 'credits', 'βοηθεια', 'μετριοπαθεια', 'χρησιμοτητα', 'σφαλματα', 'κατασταση', 'κοινωνικα', 'διασκεδαση', 'παιχνιδια', 'μουσικη', 'οικονομια', 'ισοπεδωση', 'προσκαληση'],
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
     async execute(client, message, cmd, args, Discord) {

        if(cmd === 'help') {

            message.react('✅');

        const embed = new Discord.MessageEmbed()
            .setAuthor(`XOPBOT Commands`, client.user.displayAvatarURL({ dynamic: true }))
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
            .setImage('https://share.creavite.co/yTKDKm6JFnN7Db89.gif') //my banner for my bot 
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
                   name:'__🎉 Giveaway__',
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
        //.then((msg) => {
        //     msg.react('✔');
        // }).catch((err) => {
        //     throw err;
        // });
         }

    else if(cmd === 'moderation', 'mod') {

        message.react('⛏');

        const embed2 = new Discord.MessageEmbed()
        .setThumbnail(client.user.displayAvatarURL())
        .setTimestamp()
        //.setTitle('__🛠️ Moderation__')
        .setColor('#c30202')
        .addFields(
            {name: '__🛠️ Moderation__', value: '`ban`-__***Ban A Member From A Server!***__  `\nkick`-__***Kick A Member From A Server!***__  `\n\mute`-__***Mute A Member From A Server!***__ `\nunmute`-__***Unmute A Member From A Server!***__  `\n\clear`-__***Clear Messages From A Server!***__  `\n\command`-__***Gives Basic Server Rules Of A Server!***__  `\n\slowmode`-__***Add Slowmode To A Text Channel!***__ `\naddrole`-__***Add A Role To A User!***__ `\nremoverole`-__***Remove A Role From A User!***__ `\nuserlock`-__***Lock A Role From A Specific Channel!***__ `\nuserunlock`-__***Unlock A Role From A Specific Channel!***__ `\nchannellock`-__***Lock A Channel!***__ `\nchannelunlock`-__***Unlock A Channel!***__'},
        )
        .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

    await message.channel.send(embed2)
    }

    else if(cmd === 'utility') {

message.react('⚙');

        const embed3 = new Discord.MessageEmbed()
        .setThumbnail(client.user.displayAvatarURL())
        .setTimestamp()
        //.setTitle('__⚙ Utility__')
        .setColor('#c30202')
        .addFields(
            {name: '__⚙ Utility__', value: '`ticket`-__***Generates Private Text Channel!***__ `\nwebhook`-__***Send Something From A Webhook!***__ `\nxopchat`-__***Request For Xopchat!***__ `\nafk`-__***Get AFK Status!***__ `\nsuggestions`-__***Make A Suggestion To The Admins!***__ `\nnickname`-__***Change Someones Nickname!***__ `\nwiki`-__***Search Something On Wiki!***__ `\ngoogle`-__***Search Something On Google!***__'}
        )
        .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

    await message.channel.send(embed3)
    }

    else if(cmd === 'bugs') {

message.react('🐜');

        const embed4 = new Discord.MessageEmbed()
        .setThumbnail(client.user.displayAvatarURL())
        .setTimestamp()
        //.setTitle('__🐛 Bugs__')
        .setColor('#c30202')
        .addFields(
            {name: '__🐛 Bugs__', value: '`bugreport`-__***Report A Bug To Admins!***__ `\nfindbugs`-__***Find Bugs On Your Server!***__ `\nclearbugs`-__***Clear Bugs From Your Server!***__'}
        )
        .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

    await message.channel.send(embed4)
    }

    else if(cmd === 'status') {

message.react('💹');

        const embed5 = new Discord.MessageEmbed()
        .setThumbnail(client.user.displayAvatarURL())
        .setTimestamp()
        //.setTitle('__📈 Status__')
        .setColor('#c30202')
        .addFields(
            {name: '__📈 Status__' , value: '`mcserver`-__***Get Real-Time Status Of MCServers!***__  `\nstatusping`-__***Get A Status Ping Of Your Server!***__ `\nserverinfo`-__***Get Your Servers Information!***__ `\nbotinfo`-__***Get The Bots Information!***__ `\ncovid`-__***Get Covid Information Of A Area!***__ `\nuserinfo`-__***Get A Real User Info!***__'}
        )
        .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

    await message.channel.send(embed5)
    }

    else if(cmd === 'socials') {

        message.react('🗨');

        const embed6 = new Discord.MessageEmbed()
        .setThumbnail(client.user.displayAvatarURL())
        .setTimestamp()
        //.setTitle('__💬 Socials__')
        .setColor('#c30202')
        .addFields(
            {name: '__💬 Socials__', value: '`youtube`-__***Go To My Youtube Channel!***__ `\nscratch`-__***Go To My Scratch Account!***__ `\namino`-__***Go To My Amino Account!***__'}
        )
        .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

    await message.channel.send(embed6)
    }

    else if(cmd === 'fun') {

message.react('🤪');

        const embed7 = new Discord.MessageEmbed()
        .setThumbnail(client.user.displayAvatarURL())
        .setTimestamp()
        //.setTitle('__🥳 Fun__')
        .setColor('#c30202')
        .addFields(
            {name: '__🥳 Fun__' , value: '`ping`-__***Not Real Ping!***__ `\navatar`-__***Shows A Users Avatar!***__ `\nbadges`-__***Gives You A Users Badge!***__ `\n8ball`-__***Ask 8ball A Question!***__ `\nreverse`-__***Reverse A Word That You Send!***__ `\ncoinflip`-__***Flip A Coin!***__ `\nmeme`-__***Get Memes From Google!***__ `\nsay`-__***XOPBOT Repeats The Word!***__ `\nascii`-__***Convert Text To Ascii!***__ `\nfliptext`-__***Flip Your Text!***__ `\ndog`-__***Get A Random Dog!***__ `\ncat`-__***Get A Random Cat!***__ `\nrespect`-__***Respect A User!***__ `\nhack`-__***Hack A User!***__  `\nkill`-__***Kill A User!***__ `\nhug`-__***Hug A User!***__ `\nkiss`-__***Kiss A User!***__ `\npp`-__***Get A Users PP!***__'}
        )
        .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

    await message.channel.send(embed7)
    }

    else if(cmd === 'music') {

message.react('🎵');

        const embed8 = new Discord.MessageEmbed()
        .setThumbnail(client.user.displayAvatarURL())
        .setTimestamp()
       // .setTitle('__🎶 Music__')
        .setColor('#c30202')
        .addFields(
            {name: '__🎶 Music__' , value: '`play`-__***Play Any Music From Youtube!***__  `\nstop`-__***Stop The Player!***__  `\n\skip`-__***Skip To The Song In Queue!***__ `\n\pause`-__***Pause The Song From Playing!***__ `\nunpause`-__***Unpause The Song To Play!***__'}
        )
        .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

    await message.channel.send(embed8)
    }

    else if(cmd === 'economy') {

message.react('💵');

        const embed9 = new Discord.MessageEmbed()
        .setThumbnail(client.user.displayAvatarURL())
        .setTimestamp()
       // .setTitle('__🤑 Economy__')
        .setColor('#c30202')
        .addFields(
            {name: '__🤑 Economy__' , value: '`shop(1-2)`-__***Get Something From The Shop!***__ `\nbalance`-__***Get Your Banks And Wallet Balance!***__  `\ndeposit`-__***Deposit Xocoins Into Your Bank!***__  `\nwithdraw`-__***Withdraw Money Out Of Your Bank!***__  `\nbeg`-__***Beg From XOPBOT For Xocoins!***__  `\ngive`-__***Private Command!***__  `\nsearch`-__***Search For Xocoins On Locations!***__ `\nwork`-__***Work For Xocoins!***__ `\ndaily`-__***Get Daily Xocoins!***__'}
        )
        .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

    await message.channel.send(embed9)
    }

    else if(cmd === 'leveling') {

message.react('🆙');

        const embed10 = new Discord.MessageEmbed()
        .setThumbnail(client.user.displayAvatarURL())
        .setTimestamp()
        //.setTitle('__⏫ Leveling__')
        .setColor('#c30202')
        .addFields(
            {name: '__⏫ Leveling__', value: '`rank`-__***Get Your Level Rank Card!***__  `\nleaderboard`-__***Get Your Servers Leaderboard!***__ `\nlevel`-__***Get A Users Level!***__ `\nedit`-__***Edit Level Or Xp!***__'}
        )
        .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

    await message.channel.send(embed10)
    }

    else if(cmd === 'nsfw') {

        var errMessage = "**This Is Not A NSFW Channel! 🔞**";
        if (!message.channel.nsfw) {
            message.react('💢');

            return message.reply(errMessage)
        .then(message => {
            message.delete({ timeout: 3000 })
        })
    }
 
    message.react('🔞');

        const embed11 = new Discord.MessageEmbed()
        .setThumbnail(client.user.displayAvatarURL())
        .setTimestamp()
        //.setTitle('__🔞 NSFW__')
        .setColor('#c30202')
        .addFields(
            {name: '__🔞 NSFW__', value: 'Real Life NSFW: `4k` `neko` `pgif` `gonewild` `cumsluts` `blowjob` `milf` `anal` `ass` `pussy` `boobs` `thigh` \nAnime NSFW: `hentai` `hthigh` `hanal` `hboobs` `paizuri` `hmidriff` `hneko` `hkitsune` \nBot Invite: (https://discord.com/oauth2/authorize?client_id=831824859066925087&scope=bot&permissions=4294967295)'},
        )
        .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

    await message.channel.send(embed11)
    }

    else if(cmd === 'premium') {

message.react('🏆');

        const embed12 = new Discord.MessageEmbed()
        .setThumbnail(client.user.displayAvatarURL())
        .setTimestamp()
        //.setTitle('__👑 Premium__')
        .setColor('#c30202')
        .addFields(
            {name: '__👑 Premium__', value: '`fakeuserinfo`-__***Get A Fake User Info! (Premium)***__ `\nweather`-__***Get Your Current Weather! (Premium)***__ `\noldmeme`-__***Get Old Memes From Google! (Premium)***__ `\ntictactoe`-__***Play Tictactoe! (Premium)***__ `\nmath`-__***Do Math Problems! (Premium)***__'}
        )
        .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

    await message.channel.send(embed12)
    }

    else if(cmd === 'invites') {

message.react('🖇');

        const embed13 = new Discord.MessageEmbed()
        .setThumbnail(client.user.displayAvatarURL())
        .setTimestamp()
        //.setTitle('__🔗 Invites__')
        .setColor('#c30202')
        .addFields(
            {name: '__🔗 Invites__' , value: '`botinvite`-__***Invite The Bot To Your Server!***__ `\nwebsiteinvite`-__***Go To XOPBOTs Official Website!***__'}
        )
        .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

    await message.channel.send(embed13)
    }

    else if(cmd === 'credits') {

message.react('📃');

        const embed14 = new Discord.MessageEmbed()
        .setThumbnail(client.user.displayAvatarURL())
        .setTimestamp()
        //.setTitle('__🤖 Credits__')
        .setColor('#c30202')
        .addFields(
            {name: '__🤖 Bot Credits__' , value: '`Bot:`-__***The Bots Credits***__ `\nBot Creator`-__***@👑HACKERPROᵈᵉᵛ#1498***__ `\nBot Supporter`-__***@Trixer#8894***__'},
            {name: '__🤖 Bot Website Credits__' , value: '`Bot Website:`-__***The Bots Credits Of The Website***__ `\nBot Website Creator`-__***@👑HACKERPROᵈᵉᵛ#1498***__ `\nBot Website Manager`-__***@Trixer#8894***__'},
            {name: '__🤖 Invites__' , value: '[Bot Invite](https://discord.com/oauth2/authorize?client_id=831824859066925087&scope=bot&permissions=4294967295) \n[Bot Website](https://xopbot-gg.glitch.me/)'}
        )
        .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

    await message.channel.send(embed14)
    }

    else if(cmd === 'games') {

message.react('🎯');

        const embed15 = new Discord.MessageEmbed()
        .setThumbnail(client.user.displayAvatarURL())
        .setTimestamp()
        //.setTitle('__🎮 Games__')
        .setColor('#c30202')
        .addFields(
            {name: '__🎮 Games__', value: '`guessthenumber`-__***Guess The Number!***__ `\nrps`-__***Play Rock,Paper,Sciccors!***__ `\nhangman`-__***Play Hangman!***__'}
        )
        .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

    await message.channel.send(embed15)
    }

    if(cmd === 'βοηθεια') {

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

        else if(cmd === 'μετριοπαθεια') {

            message.react('⛏');

            const embed17 = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
            //.setTitle('__🛠️ Moderation__')
            .setColor('#c30202')
            .addFields(
                {name: '__🛠️ Mετριοπαθεια__', value: '`ban`-__***Κανε Ban Ενα Member!***__  `\nkick`-__***Κανε Kick Ενα Member!***__  `\n\mute`-__***Κανε Mute Ενα Member!***__  `\n\mute timed`-__***Κανε Time Mute Ενα Member!***__  `\nunmute`-__***Κανε Unmute Ενα Member!***__  `\n\clear`-__***Κανε Clear Messages Απο Ενα Server!***__  `\n\command`-__***Δινει Βασικους Κανονες Απο Server!***__  `\n\slowmode`-__***Κανε Add Slowmode Σε Text Channel!***__ `\naddrole`-__***Δωσε Ενα Role Σε User!***__ `\nremoverole`-__***Σβησε Εωα Role Απο User!***__ `\nsetnick`-__***Κανε Set Server Nickname!***__ `\nresetnick`-__***Κανε Reset To Normal Nickname!***__ `\nlock`-__***Κανε Lock Channel Απο Συγκεκριμενο Role!***__ `\nunlock`-__***Κανε Unlock Channel Απο Συγκεκριμενο Role!***__'},
            )
            .setFooter(`Φτιαχτηκε Απο Τ(ο/η)ν: ${message.author.tag}`, message.author.displayAvatarURL())
    
        await message.channel.send(embed17)

        }

        else if(cmd === 'χρησιμοτητα') {

            message.react('⚙');
            
                    const embed18 = new Discord.MessageEmbed()
                    .setThumbnail(client.user.displayAvatarURL())
                    .setTimestamp()
                    //.setTitle('__⚙ Utility__')
                    .setColor('#c30202')
                    .addFields(
                        {name: '__⚙ Χρησιμοτητα__', value: '`ticket`-__***Κανει Generate Ιδιωτικο Text Channel!***__ `\nafk`-__***Παρε AFK Status!***__ `\n\suggestions`-__***Κανε Suggest Στους Admins!***__'}
                    )
                    .setFooter(`Φτιαχτηκε Απο Τ(ο/η)ν: ${message.author.tag}`, message.author.displayAvatarURL())
            
                await message.channel.send(embed18)
                }

         else if(cmd === 'σφαλματα') {

             message.react('🐜');
                    
                        const embed19 = new Discord.MessageEmbed()
                        .setThumbnail(client.user.displayAvatarURL())
                        .setTimestamp()
                        //.setTitle('__🐛 Bugs__')
                        .setColor('#c30202')
                        .addFields(
                            {name: '__🐛 Σφαλματα__', value: '`bugreport`-__***Κανε Report Ενα Bug Στους Admins!***__ `\nfindbugs`-__***Ψαξε Bugs Στο Server Σου!***__ `\nclearbugs`-__***Κανε Clear Bugs Απο Το Server Σου!***__'}
                         )
                        .setFooter(`Φτιαχτηκε Απο Τ(ο/η)ν: ${message.author.tag}`, message.author.displayAvatarURL())
                    
                        await message.channel.send(embed19)
                        }

                        else if(cmd === 'κατασταση') {

                            message.react('💹');
                            
                                    const embed20 = new Discord.MessageEmbed()
                                    .setThumbnail(client.user.displayAvatarURL())
                                    .setTimestamp()
                                    //.setTitle('__📈 Status__')
                                    .setColor('#c30202')
                                    .addFields(
                                        {name: '__📈 Κατασταση__' , value: '`mcserver`-__***Παρε Real-Time Κατασταση Για MCServers!***__  `\nstatusping`-__***Παρε Κατασταση Του Ping Του Server Σου!***__ `\nserverinfo`-__***Παρε Το Server Information!***__ `\nbotinfo`-__***Παρε Tο Bot Information!***__ `\ncovid`-__***Παρε Covid Information Για Τη Περιοχη Σου!***__ `\nuserinfo`-__***Παρε Real User Info!***__'}
                                    )
                                    .setFooter(`Φτιαχτηκε Απο Τ(ο/η)ν: ${message.author.tag}`, message.author.displayAvatarURL())
                            
                                await message.channel.send(embed20)
                                }
                            
                                else if(cmd === 'κοινωνικα') {
                            
                                    message.react('🗨');
                            
                                    const embed21 = new Discord.MessageEmbed()
                                    .setThumbnail(client.user.displayAvatarURL())
                                    .setTimestamp()
                                    //.setTitle('__💬 Socials__')
                                    .setColor('#c30202')
                                    .addFields(
                                        {name: '__💬 Κοινωνικα__', value: '`youtube`-__***Πηγαινε Στο Youtube Channel Μου!***__ `\nscratch`-__***Πηγαινε Στο Scratch Account Μου!***__ `\namino`-__***Πηγαινε Στο Amino Account Μου!***__'}
                                    )
                                    .setFooter(`Φτιαχτηκε Απο Τ(ο/η)ν: ${message.author.tag}`, message.author.displayAvatarURL())
                            
                                await message.channel.send(embed21)
                                }
                            
                                else if(cmd === 'διασκεδαση') {
                            
                            message.react('🤪');
                            
                                    const embed22 = new Discord.MessageEmbed()
                                    .setThumbnail(client.user.displayAvatarURL())
                                    .setTimestamp()
                                    //.setTitle('__🥳 Fun__')
                                    .setColor('#c30202')
                                    .addFields(
                                        {name: '__🥳 Διασκεδαση__' , value: '`ping`-__***Οχι Αληθινο Ping!***__ `\navatar`-__***Δειχνει Το User Avatar!***__ `\nbadges`-__***Δειχνει Το Users Badge!***__ `\n8ball`-__***Ρωτησε Τον 8ball Μια Ερωτηση!***__ `\nreverse`-__***Κανε Reverse Μια Λεξη Που Κανεις Send!***__ `\ncoinflip`-__***Κανε Flip A Coin!***__ `\nmeme`-__***Παρε Memes Απο Το Google!***__  `\nkill`-__***Κανε Kill Ενα User!***__ `\nhug`-__***Κανε Hug Ενα User!***__ `\nkiss`-__***Κανε Kiss Ενα User!***__ `\npp`-__***Παρε Ενα Users PP!***__'}
                                    )
                                    .setFooter(`Φτιαχτηκε Απο Τ(ο/η)ν: ${message.author.tag}`, message.author.displayAvatarURL())
                            
                                await message.channel.send(embed22)
                                }
                            
                                else if(cmd === 'μουσικη') {
                            
                            message.react('🎵');
                            
                                    const embed23 = new Discord.MessageEmbed()
                                    .setThumbnail(client.user.displayAvatarURL())
                                    .setTimestamp()
                                   // .setTitle('__🎶 Music__')
                                    .setColor('#c30202')
                                    .addFields(
                                        {name: '__🎶 Mουσικη__' , value: '`play`-__***Κανε Play Ενα Τραγουδι Απο Το Youtube!***__  `\nstop`-__***Κανε Stop Tο Player!***__  `\n\skip`-__***Κανε Skip To Τραγουδι Στο Queue!***__ `\n\pause`-__***Κανε Pause Tο Τραγουδι Απο Να Κανει Play!***__ `\nunpause`-__***Κανε Unpause Tο Τραγουδι Ωστε Να Κανει Play!***__'}
                                    )
                                    .setFooter(`Φτιαχτηκε Απο Τ(ο/η)ν: ${message.author.tag}`, message.author.displayAvatarURL())
                            
                                await message.channel.send(embed23)
                                }
                            
                                else if(cmd === 'οικονομια') {
                            
                            message.react('💵');
                            
                                    const embed24 = new Discord.MessageEmbed()
                                    .setThumbnail(client.user.displayAvatarURL())
                                    .setTimestamp()
                                   // .setTitle('__🤑 Economy__')
                                    .setColor('#c30202')
                                    .addFields(
                                        {name: '__🤑 Οικονομια__' , value: '`balance`-__***Παρε Το Δικo Σου Bank Και Wallet Balance!***__  `\ndeposit`-__***Καταθετησε Xocoins Στην Δικη Σου Τραπεζα!***__  `\nwithdraw`-__***Αποσυρωσε Xocoins Εξω Απο Το Bank Σου!***__  `\nbeg`-__***Παρακαλεσε Τον XOPBOT Για Xocoins!***__  `\ngive`-__***Ιδιωτικο Command!***__  `\nsearch`-__***Ψαξε Για Xocoins Σε Περιοχες!***__ `\nwork`-__***Δουλεψε Για Xocoins!***__ `\ndaily`-__***Παρε Ημερησια Δοση Xocoins!***__'}
                                    )
                                    .setFooter(`Φτιαχτηκε Απο Τ(ο/η)ν: ${message.author.tag}`, message.author.displayAvatarURL())
                            
                                await message.channel.send(embed24)
                                }
                            
                                else if(cmd === 'ισοπεδωση') {
                            
                            message.react('🆙');
                            
                                    const embed25 = new Discord.MessageEmbed()
                                    .setThumbnail(client.user.displayAvatarURL())
                                    .setTimestamp()
                                    //.setTitle('__⏫ Leveling__')
                                    .setColor('#c30202')
                                    .addFields(
                                        {name: '__⏫ Ισοπεδωση__', value: '`xoprank`-__***Ιδιωτικο Command!***__ `\nrank`-__***Παρε Το Level Rank Card Σου!***__  `\nleaderboard`-__***Παρε Το Server Leaderboard!***__ `\nlevel`-__***Παρε Το Level Ενος User!***__ `\nedit`-__***Κανε Edit Level Η Xp!***__'}
                                    )
                                    .setFooter(`Φτιαχτηκε Απο Τ(ο/η)ν: ${message.author.tag}`, message.author.displayAvatarURL())
                            
                                await message.channel.send(embed25)
                                }

                                else if(cmd === 'προσκαληση') {

                                    message.react('🖇');
                                    
                                            const embed26 = new Discord.MessageEmbed()
                                            .setThumbnail(client.user.displayAvatarURL())
                                            .setTimestamp()
                                            //.setTitle('__🔗 Invites__')
                                            .setColor('#c30202')
                                            .addFields(
                                                {name: '__🔗 Προσκαληση__' , value: '`botinvite`-__***Κανε Invite Tο Bot Στο Server Σου!***__ `\nwebsiteinvite`-__***Πηγαινε Στο Official Website Του XOPBOT!***__'}
                                            )
                                            .setFooter(`Φτιαχτηκε Απο Τ(ο/η)ν: ${message.author.tag}`, message.author.displayAvatarURL())
                                    
                                        await message.channel.send(embed26)
                                        }

                                        else if(cmd === 'παιχνιδια') {

                                            message.react('🎯');
                                            
                                                    const embed27 = new Discord.MessageEmbed()
                                                    .setThumbnail(client.user.displayAvatarURL())
                                                    .setTimestamp()
                                                    //.setTitle('__🎮 Games__')
                                                    .setColor('#c30202')
                                                    .addFields(
                                                        {name: '__🎮 Παιχνιδια__', value: '`guessthenumber`-__***Μαντεψε Tο Nουμερο!***__ `\nrps`-__***Παιξε Rock,Paper,Sciccors!***__ `\nhangman`-__***Παιξε Hangman!***__'}
                                                    )
                                                    .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
                                            
                                                await message.channel.send(embed27)
                                                }

}
}