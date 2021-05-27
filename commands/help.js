const Discord = require('discord.js');
const recon = require('reconlx');
const ReactionPages = recon.ReactionPages;

module.exports = {
    name: 'help',
    cooldown: 2,
    permissions: ["SEND_MESSAGES"],
    description: 'lol',
    async execute(client, message, cmd, args, Discord) {
        const embed1 = new Discord.MessageEmbed()
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        .setTitle('__Help Menu__')
        .setURL('https://www.youtube.com/watch?v=K_I8-UUINTg')
        .setColor('#c30202')
        .addFields(
            {name: '__🔨 Prefix__', value: '`-`'}
        )
        .setFooter('***Bot Developer @👑HACKERPROᵈᵉᵛ#1498!***');

        const embed2 = new Discord.MessageEmbed()
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        .setTitle('__Help Menu__')
        .setURL('https://www.youtube.com/watch?v=K_I8-UUINTg')
        .setColor('#c30202')
        .addFields(
            {name: '__🛠️ Moderation__', value: '`ban`-__***Ban A Member From A Server!***__  `\nkick`-__***Kick A Member From A Server!***__  `\n\mute`-__***Mute A Member From A Server!***__  `\n\mute timed`-__***Time Mute A Member From A Server!***__  `\nunmute`-__***Unmute A Member From A Server!***__  `\n\clear`-__***Clear Messages From A Server!***__  `\n\command`-__***Gives Basic Server Rules Of A Server!***__  `\n\slowmode`-__***Add Slowmode To A Text Channel!***__ `\nlock`-__***Lock A Channel From A Specific Role!***__ `\nunlock`-__***Unlock A Channel From A Specific Role!***__'}
        )
        .setFooter('***Bot Developer @👑HACKERPROᵈᵉᵛ#1498!***');

        const embed3 = new Discord.MessageEmbed()
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        .setTitle('__Help Menu__')
        .setURL('https://www.youtube.com/watch?v=K_I8-UUINTg')
        .setColor('#c30202')
        .addFields(
            {name: '__⚙ Utility__', value: '`ticket`-__***Generates Private Text Channel!***__ `\nafk`-__***Get AFK Status!***__ `\n\suggestions`-__***Make A Suggestion To The Admins!***__'}
        )
        .setFooter('***Bot Developer @👑HACKERPROᵈᵉᵛ#1498!***');


        const embed4 = new Discord.MessageEmbed()
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        .setTitle('__Help Menu__')
        .setURL('https://www.youtube.com/watch?v=K_I8-UUINTg')
        .setColor('#c30202')
        .addFields(
            {name: '__📷 Images__' , value: '`image`-__***Searches Images From Google!***__  `\nnsimage`-__***Searches NSFW Images From Google!***__'}
        )
        .setFooter('***Bot Developer @👑HACKERPROᵈᵉᵛ#1498!***');


        const embed5 = new Discord.MessageEmbed()
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        .setTitle('__Help Menu__')
        .setURL('https://www.youtube.com/watch?v=K_I8-UUINTg')
        .setColor('#c30202')
        .addFields(
            {name: '__🎶 Music__' , value: '`play`-__***Play Any Music From Youtube!***__  `\nstop`-__***Stop The Player!***__  `\n\skip`-__***Skip To The Song In Queue!***__ `\n\pause`-__***Pause The Song From Playing!***__ `\nunpause`-__***Unpause The Song To Play!***__'}
        )
        .setFooter('***Bot Developer @👑HACKERPROᵈᵉᵛ#1498!***');


        const embed6 = new Discord.MessageEmbed()
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        .setTitle('__Help Menu__')
        .setURL('https://www.youtube.com/watch?v=K_I8-UUINTg')
        .setColor('#c30202')
        .addFields(
            {name: '__🥳 Fun__' , value: '`ping`-__***Not Real Ping!***__ `\nfakeuserinfo`-__***Get A Fake User Info!***__ `\n\avatar`-__***Shows A Users Avatar!***__  `\n\weather`-__***Get Your Current Weather!***__  `\n\8ball`-__***Ask 8ball A Question!***__  `\n\guessthenumber`-__***Guess The Number!***__  `\nrps`-__***Play Rock,Paper,Sciccors!***__ `\nreverse`-__***Reverse A Word That You Send!***__ `\ncoinflip`-__***Flip A Coin!***__ `\nmeme`-__***Get Memes From Google!***__ `\nkill`-__***Kill A User!***__ `\nhug`-__***Hug A User!***__'}
        )
        .setFooter('***Bot Developer @👑HACKERPROᵈᵉᵛ#1498!***');


        const embed7 = new Discord.MessageEmbed()
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        .setTitle('__Help Menu__')
        .setURL('https://www.youtube.com/watch?v=K_I8-UUINTg')
        .setColor('#c30202')
        .addFields(
            {name: '__🤑 Economy__' , value: '`balance`-__***Get Your Banks And Wallet Balance!***__  `\ndeposit`-__***Deposit Xocoins Into Your Bank!***__  `\n\withdraw`-__***Withdraw Money Out Of Your Bank!***__  `\n\beg`-__***Beg From XOPBOT For Xocoins!***__  `\n\give`-__***Private Command!***__  `\n\search`-__***Search For Xocoins On Locations!***__ `\ndaily`-__***Get Daily Xocoins!***__'}
        )
        .setFooter('***Bot Developer @👑HACKERPROᵈᵉᵛ#1498!***');


        const embed8 = new Discord.MessageEmbed()
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        .setTitle('__Help Menu__')
        .setURL('https://www.youtube.com/watch?v=K_I8-UUINTg')
        .setColor('#c30202')
        .addFields(
            {name: '__🐛 Bugs__', value: '`bugreport`-__***Report A Bug To Admins!***__ `\nfindbugs`-__***Find Bugs On Your Server!***__ `\nclearbugs`-__***Clear Bugs From Your Server!***__'}
        )
        .setFooter('***Bot Developer @👑HACKERPROᵈᵉᵛ#1498!***');


        const embed9 = new Discord.MessageEmbed()
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        .setTitle('__Help Menu__')
        .setURL('https://www.youtube.com/watch?v=K_I8-UUINTg')
        .setColor('#c30202')
        .addFields(
            {name: '__⏫ Leveling__', value: '`xoprank`-__***Private Command!***__ `\nrank`-__***Get Your Level Rank Card!***__  `\nleaderboard`-__***Get Your Servers Leaderboard!***__ `\nlevel`-__***Get A Users Level!***__ `\nedit`-__***Edit Level Or Xp!***__'}
        )
        .setFooter('***Bot Developer @👑HACKERPROᵈᵉᵛ#1498!***');

        const embed10 = new Discord.MessageEmbed()
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        .setTitle('__Help Menu__')
        .setURL('https://www.youtube.com/watch?v=K_I8-UUINTg')
        .setColor('#c30202')
        .addFields(
            {name: '__📈 Status__' , value: '`mcserver`-__***Get Real-Time Status Of MCServers!***__  `\nstatusping`-__***Get A Status Ping Of Your Server!***__ `\nserverinfo`-__***Get Your Servers Information!***__ `\nbotinfo`-__***Get The Bots Information!***__ `\ncovid`-__***Get Covid Information Of A Area!***__ `\nuserinfo`-__***Get A Real User Info!***__'}
        )
        .setFooter('***Bot Developer @👑HACKERPROᵈᵉᵛ#1498!***');


        const embed11 = new Discord.MessageEmbed()
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        .setTitle('__Help Menu__')
        .setURL('https://www.youtube.com/watch?v=K_I8-UUINTg')
        .setColor('#c30202')
        .addFields(
            {name: '__💬 Socials__', value: '`youtube`-__***Go To My Youtube Channel!***__ `\nscratch`-__***Go To My Scratch Account!***__ `\namino`-__***Go To My Amino Account!***__'}
        )
        .setFooter('***Bot Developer @👑HACKERPROᵈᵉᵛ#1498!***');


        const embed12 = new Discord.MessageEmbed()
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        .setTitle('__Help Menu__')
        .setURL('https://www.youtube.com/watch?v=K_I8-UUINTg')
        .setColor('#c30202')
        .addFields(
            {name: '__🤖 Usage__' , value: '`usagehelp`-__***Get Professional Help With The Commands!***__'}
        )
        .setFooter('***Bot Developer @👑HACKERPROᵈᵉᵛ#1498!***');


        const embed13 = new Discord.MessageEmbed()
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        .setTitle('__Help Menu__')
        .setURL('https://www.youtube.com/watch?v=K_I8-UUINTg')
        .setColor('#c30202')
        .addFields(
            {name: '__🔗 Invites__' , value: '`invite`-__***Invite The Bot To Your Server!***__ `\ninvitewebsite`-__***Go To XOPBOTs Official Website!***__'}
        )
        .setFooter('***Bot Developer @👑HACKERPROᵈᵉᵛ#1498!***');

        const embed14 = new Discord.MessageEmbed()
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        .setTitle('__Credits__')
        .setURL('https://www.youtube.com/watch?v=K_I8-UUINTg')
        .setColor('#c30202')
        .addFields(
            {name: '__🤖 Bot Credits__' , value: '`Bot:`-__***The Bots Credits***__ `\nBot Creator`-__***@👑HACKERPROᵈᵉᵛ#1498***__ `\nBot Supporter`-__***@Trixer#8894***__'},
            {name: '__🤖 Bot Website Credits__' , value: '`Bot Website:`-__***The Bots Credits Of The Website***__ `\nBot Website Creator`-__***@👑HACKERPROᵈᵉᵛ#1498***__ `\nBot Website Manager`-__***@Trixer#8894***__'},
            {name: '__Invites__' , value: '[Bot Invite](https://discord.com/oauth2/authorize?client_id=831824859066925087&scope=bot&permissions=4294967295) \n[Bot Website](https://bubble-traveling-entrance.glitch.me/)'}
        )

        // .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true}))
        // .setDescription('***__This Is The Help Menu Please Read The Commands Carefully ^_^__***')

        const pages = [embed1, embed2, embed3, embed4, embed5, embed6, embed7, embed8, embed9, embed10, embed11, embed12, embed13, embed14];
        const emojis = ['⬅️', '➡️'];

        // const pageTravel = [embed1, embed13];
        // const emojis2 = ['⏮️', '⏭'];


        ReactionPages(message, pages, true, emojis);
    }
}