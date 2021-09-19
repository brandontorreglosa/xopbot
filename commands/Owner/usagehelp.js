// const recon = require('reconlx');
// const ReactionPages = recon.ReactionPages;
// const color = process.env.Color;

// module.exports = {
//     name: 'usagehelp',
//     permissions: ["SEND_MESSAGES"],
//     aliases: ['usg', 'usgh'],
//     cooldown: 2,
//     description: "Embeds!",
//     execute(client, message, cmd, args, Discord) {
//         const embed1 = new Discord.MessageEmbed()
//         .setTimestamp()
//         .setColor(`${color}`)
//         .setTitle(' Usage Help Menu')
//         .setURL('https://www.youtube.com/watch?v=K_I8-UUINTg')
//         .setDescription('***This Is The Usage Help Menu Please Read The Commands Carefully ^_^***')
//         .addFields(
//             {name: '🔨 Usage Prefix', value: '`So Prefix Is Basically The Bots Command Sender So The Bot Can Reply Back With The Command You Must Always Put - Before Any Command Example -help And It Will Work!`' },
//             {name: '🛠️ Ban', value: '`Ban Is Basically A Command That Restricts A User From Joining Again A Server Mostly Because Of Breaking The Rules, There Are Also Many Other Reasons To Ban A Member Ex.Spam,NSFW,Bad Words And More! You Can Use This Command With -ban, Aliases:(None)`'},
//             {name: '🛠️ Kick', value: '`Kick Is Basically A Most Less Ban Command That Just Kicks The Member Mostly For Slightly Small Things Ex.Annoying,Pretending To Be Tuff, Usually People Kick For A Warning Or Threat To A User! You Can Use This Command With -kick, Aliases:(None)`'},
//             {name: '🛠️ Mute', value: '`Mute Is Basically A Kinda Low Profile Warning It Usually For First Time Ex.Spam, You Can Use This Command With -mute, Aliases(None)`'},
//             {name: '🛠️ Timed Mute', value: '`Timed Mute Is Basically Mute But Timed! You Can Use This Command With -mute @user 1s(second),m(minute),h(hour) It Cant Be Used For Days Yet, Aliases:(None)`'},
//             {name: '🛠️ Unmute', value: '`Unmute Is Basically The Command That Unmutes A User For Example Make His Warning Leave Kinda, This You Can Use With -unmute Works For Timed Mute And Mute! Aliases:(None)`'},
//             {name: '🛠️ Clear', value: '`Clear Is Basically A Command That Deletes Messages Usually Used For Ex.Spam, You Can Delete Up To 100 Messages Every Command, Use This Command With -clear{Amount}! Aliases:(None)`'},
//             {name: '🛠️ Command', value: '`Command Is Basically A Command That Shows You Basic Server Rules On Servers Read Them Carefully Please! Use This Command With -command, Aliases:(None)`'},
//             {name: '🛠️ Slowmode', value: '`Slowmode Is Basically A Command That Prevents Users From Spamming Text Channels! Use This Command With -slowmode ?(Seconds), Aliases:(smd)`'},
//             {name: '⚙ Ticket', value: '`Ticket Is Basically A Command That Generates A Private Channel So You Can Talk To the Host Privately! You Can Use With -ticket, Aliases:(None)`'},
//             {name: '⚙ Afk', value: '`Afk Is Basically A Command That Lets Users Know That You Are Away-From-Keyboard! You Can Use With -afk, Aliases:(None)`'},
//             {name: '⚙ Suggestions', value: '`Suggestions Is Basically A Command That Lets You Suggest Something To The Admins Or Moderators! You Can Use With -suggest, Aliases:(None)`'},
//             {name: '⚙ Bugreport', value: '`Bugreport Is Basically A Command That Lets You Report A Bug To The Bot Developer Team And Admins! You Can Use With -bugreport, Aliases:(reportbug, bug)`'},
//             {name: '📷 Image' , value: '`Image Is Basically A image Command That Looks From Google Chrome The Image That You Want You Can Also Put Gif In Image Command Ex.-image football Or -image footballgif Or -image football gif! Aliases:(None)`'},
//             {name: '📷 Nsimage' , value: '`Nsimage Is Basically A NSFW Image Command That Looks From Google Chrome But With A Cookie You Can Also Add Gif Ex.-nsimage gore Or -nsimage goregif Or -nsimagegore gif! You Can Use NSFWLIST For NSFW Image Commands, Aliases:(None)`'},
//             {name: '🎶 Play' , value: '`Play Is Basically A Music Command That Searches Music From Youtube! You Must Know That The Title Must Be Exact Or Add The Artist Ex.-play travis scott franchise, But Not Neccesary If The Song Has Over A 20 Million Views, Aliases:(None)`'},
//             {name: '🎶 Stop' , value: '`Stop Is Basically Another Music Command That Stop The Music Until You Type Play Again, Ypu Can Use With -stop, Aliases:(None)`'},
//             {name: '🎶 Skip' , value: '`Skip Is Basically A Music Command That Skips The Current Song To The Next, Note:You Must Have A Queue For This To Work! Use With -skip, Aliases:(None)`'},
//             {name: '🎶 Pause' , value: '`Pause Is Basically A Command That Pauses The Song To Where You Left It! You Can Use With -pause,  Aliases:(None)`'},
//             {name: '🎶 Unpause' , value: '`Unpause Is Basically The Opposite Of The Pause Command But It Starts The Song From Playing! You Can Use With -unpause, Aliases:(None)`'},
//         )
//         .setFooter('***Bot Developer @👑HACKERPROᵈᵉᵛ#1498!***');

//             const embed2 = new Discord.MessageEmbed()
//             .setTimestamp()
//             .setColor(`${color}`)
//             .setTitle(' Usage Help Menu')
//             .setURL('https://www.youtube.com/watch?v=K_I8-UUINTg')
//             .setDescription('***This Is The Usage Help Menu Please Read The Commands Carefully ^_^***')
//             .addFields(
//             {name: '🥳 Fun' , value: '`Fun Is No Hard Command, Its Just Fun Commands That You Play Ex.rps=Rock,Paper,Sciccors, Use With Commands Shown On Help Menu! Aliases:(For Guessthenumber = (gtn) (For 8ball = (8b,8ba) (For Avatar = (pfp,profilepic,icon) (For Weather = (wthr)`'},
//             {name: '🤑 Balance' , value: '`Balance Is Basically A Command That Shows Your Wallets Balance And Bank, You Can Use this Command With -balance, Aliases:(bal,bl)`'},
//             {name: '🤑 Deposit' , value: '`Deposit Is Basically The Command That Deposits Your Wallets Xocoins Into The Bank, Note:You Cant Deposit More Than What You Have In The Wallet! You Can Use This Command With -deposit{Amount}, Aliases:(dep)`'},
//             {name: '🤑 Withdraw' , value: '`Withdraw Is Basically The Same As Deposit But Instead You Get Xocoins Out Of Your Bank, Note:You Cant Withdraw More Than You Have In Your Bank! You Can Use This Command With -withdraw{Amount}, Aliases:(wd)`'},
//             {name: '🤑 Beg' , value: '`Beg From XOPBOT To Give You Xocoins! You Can Use With -beg, Aliases:(None)`'},
//             {name: '🤑 Give' , value: '`Give Is Basically A Private Command That Only I @👑HACKERPRO™#9999 Can Use in My Server! You Can Use With -give{player}(amount), Aliases:(None)`'},
//             {name: '🤑 Search' , value: '`Search Is Basically A Command Only Used Every 12 Hours, That Gives A Chance To Win 10,000 Xocoins! You Must Use With -search And Then Reply To The Location You Want To Go Ex.Car, Aliases:(None)`'},
//             {name: '📈 Mcserver' , value: '`Mcserver Is Basically A Minecraft Server Status That Shows What System You Must Have And How Many People Are Online! You Can Use With -mcserver{server id}{port} If You Dont Know Most Ports Are 25565 So Type That At The End, Aliases:(mcs)`'},
//             {name: '📈 Statusping' , value: '`Statusping Is Basically A Command That Shows You How Fast The Bot Replys To A Command In Your Server! You Can Use With -statusping, Aliases:(stp)`'},
//             {name: '🔗 Invite' , value: '`Invite Is Basically A Command That Lets You Invite The Bot To The Server! You Can Use With -invite, Aliases:(inv)`'}
//         )
//         .setFooter('***Bot Developer @👑HACKERPROᵈᵉᵛ#1498!***');

//         const pages = [embed1, embed2];
//         const emojis = ['⬅️', '➡️'];

//         ReactionPages(message, pages, true, emojis);

//     }


// }