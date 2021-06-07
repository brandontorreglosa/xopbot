const Discord = require('discord.js');
const recon = require('reconlx');
const ReactionPages = recon.ReactionPages;

module.exports = {
    name: 'help',
    aliases: ['h'],
    cooldown: 2,
    permissions: ["SEND_MESSAGES"],
    description: 'lol',
    async execute(client, message, cmd, args, Discord) {
        const embed1 = new Discord.MessageEmbed()
        .setTimestamp()
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        .setTitle('__Help Menu__')
        .setURL('https://www.youtube.com/watch?v=K_I8-UUINTg')
        .setColor('#c30202')
        .addFields(
            {name: '__🔨 Prefix__', value: '`-`'},
            {name: '__🛠️ Moderation__', value: '`ban`-__***Ban A Member From A Server!***__  `\nkick`-__***Kick A Member From A Server!***__  `\n\mute`-__***Mute A Member From A Server!***__  `\n\mute timed`-__***Time Mute A Member From A Server!***__  `\nunmute`-__***Unmute A Member From A Server!***__  `\n\clear`-__***Clear Messages From A Server!***__  `\n\command`-__***Gives Basic Server Rules Of A Server!***__  `\n\slowmode`-__***Add Slowmode To A Text Channel!***__ `\nlock`-__***Lock A Channel From A Specific Role!***__ `\nunlock`-__***Unlock A Channel From A Specific Role!***__'},
            {name: '__⚙ Utility__', value: '`ticket`-__***Generates Private Text Channel!***__ `\nafk`-__***Get AFK Status!***__ `\n\suggestions`-__***Make A Suggestion To The Admins!***__'},
            {name: '__🐛 Bugs__', value: '`bugreport`-__***Report A Bug To Admins!***__ `\nfindbugs`-__***Find Bugs On Your Server!***__ `\nclearbugs`-__***Clear Bugs From Your Server!***__'},
            {name: '__📈 Status__' , value: '`mcserver`-__***Get Real-Time Status Of MCServers!***__  `\nstatusping`-__***Get A Status Ping Of Your Server!***__ `\nserverinfo`-__***Get Your Servers Information!***__ `\nbotinfo`-__***Get The Bots Information!***__ `\ncovid`-__***Get Covid Information Of A Area!***__ `\nuserinfo`-__***Get A Real User Info!***__'},
            {name: '__💬 Socials__', value: '`youtube`-__***Go To My Youtube Channel!***__ `\nscratch`-__***Go To My Scratch Account!***__ `\namino`-__***Go To My Amino Account!***__'},
            {name: '__🤖 Usage__' , value: '`usagehelp`-__***Get Professional Help With The Commands!***__'}
        )
        .setFooter('Bot Developer @👑HACKERPROᵈᵉᵛ#1498');

        const embed2 = new Discord.MessageEmbed()
        .setTimestamp()
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        .setTitle('__Help Menu__')
        .setURL('https://www.youtube.com/watch?v=K_I8-UUINTg')
        .setColor('#c30202')
        .addFields(
            {name: '__🥳 Fun__' , value: '`ping`-__***Not Real Ping!***__ `\navatar`-__***Shows A Users Avatar!***__ `\n8ball`-__***Ask 8ball A Question!***__  `\nguessthenumber`-__***Guess The Number!***__  `\nrps`-__***Play Rock,Paper,Sciccors!***__ `\nreverse`-__***Reverse A Word That You Send!***__ `\ncoinflip`-__***Flip A Coin!***__ `\nkill`-__***Kill A User!***__ `\nhug`-__***Hug A User!***__ `\nkiss`-__***Kiss A User!***__'},
            {name: '__🎶 Music__' , value: '`play`-__***Play Any Music From Youtube!***__  `\nstop`-__***Stop The Player!***__  `\n\skip`-__***Skip To The Song In Queue!***__ `\n\pause`-__***Pause The Song From Playing!***__ `\nunpause`-__***Unpause The Song To Play!***__'},
            {name: '__🤑 Economy__' , value: '`balance`-__***Get Your Banks And Wallet Balance!***__  `\ndeposit`-__***Deposit Xocoins Into Your Bank!***__  `\nwithdraw`-__***Withdraw Money Out Of Your Bank!***__  `\nbeg`-__***Beg From XOPBOT For Xocoins!***__  `\ngive`-__***Private Command!***__  `\nsearch`-__***Search For Xocoins On Locations!***__ `\ndaily`-__***Get Daily Xocoins!***__'},
            {name: '__⏫ Leveling__', value: '`xoprank`-__***Private Command!***__ `\nrank`-__***Get Your Level Rank Card!***__  `\nleaderboard`-__***Get Your Servers Leaderboard!***__ `\nlevel`-__***Get A Users Level!***__ `\nedit`-__***Edit Level Or Xp!***__'},
            {name: '__🔞 NSFW__', value: '`nsfwlist`-__***Get A NSFW List Of Commands***__'},
            {name: '__👑 Premium__', value: '`fakeuserinfo`-__***Get A Fake User Info! (Premium)***__ `\nweather`-__***Get Your Current Weather! (Premium)***__ `\nmeme`-__***Get Memes From Google! (Premium)***__ `\ntictactoe`-__***Play Tictactoe! (Premium)***__ `\nmath`-__***Do Math Problems! (Premium)***__'}
        )
        .setFooter('Bot Developer @👑HACKERPROᵈᵉᵛ#1498');

        const embed3 = new Discord.MessageEmbed()
        .setTimestamp()
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        .setTitle('__Help Menu__')
        .setURL('https://www.youtube.com/watch?v=K_I8-UUINTg')
        .setColor('#c30202')
        .addFields(
            {name: '__🔗 Invites__' , value: '`invite`-__***Invite The Bot To Your Server!***__ `\ninvitewebsite`-__***Go To XOPBOTs Official Website!***__'}
        )
        .setFooter('Bot Developer @👑HACKERPROᵈᵉᵛ#1498');

        const embed4 = new Discord.MessageEmbed()
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        .setTitle('__Credits__')
        .setURL('https://www.youtube.com/watch?v=K_I8-UUINTg')
        .setColor('#c30202')
        .addFields(
            {name: '__🤖 Bot Credits__' , value: '`Bot:`-__***The Bots Credits***__ `\nBot Creator`-__***@👑HACKERPROᵈᵉᵛ#1498***__ `\nBot Supporter`-__***@Trixer#8894***__'},
            {name: '__🤖 Bot Website Credits__' , value: '`Bot Website:`-__***The Bots Credits Of The Website***__ `\nBot Website Creator`-__***@👑HACKERPROᵈᵉᵛ#1498***__ `\nBot Website Manager`-__***@Trixer#8894***__'},
            {name: '__Invites__' , value: '[Bot Invite](https://discord.com/oauth2/authorize?client_id=831824859066925087&scope=bot&permissions=4294967295) \n[Bot Website](https://xopbot-gg.glitch.me/)'}
        )    

        const pages = [embed1, embed2, embed3, embed4];
        const emojis = ['⬅️', '➡️'];

        ReactionPages(message, pages, true, emojis);
    }
}

   // const embed5 = new Discord.MessageEmbed()
        // .setTimestamp()
        // .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        // .setTitle('__Help Menu__')
        // .setURL('https://www.youtube.com/watch?v=K_I8-UUINTg')
        // .setColor('#c30202')
        // .addFields(
        //     {name: '__📷 Images__' , value: '`image`-__***Searches Images From Google!***__  `\nnsimage`-__***Searches NSFW Images From Google!***__'}
        // )
        // .setFooter('Bot Developer @👑HACKERPROᵈᵉᵛ#1498');