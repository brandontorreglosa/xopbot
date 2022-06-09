const { MessageButton, MessageActionRow, MessageMenuOption, MessageMenu } = require('discord-buttons');
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
            const option = new MessageMenuOption().setLabel('**Utility**').setValue('menuid')
            const option2 = new MessageMenuOption().setLabel('**Config**').setValue('menuid')
            const option3 = new MessageMenuOption().setLabel('**Bugs**').setValue('menuid')
            const option4 = new MessageMenuOption().setLabel('**Status**').setValue('menuid')
            const option5 = new MessageMenuOption().setLabel('**Socials**').setValue('menuid')
            const option6 = new MessageMenuOption().setLabel('**Games**').setValue('menuid')
            const option7 = new MessageMenuOption().setLabel('**Fun**').setValue('menuid')
            const option8 = new MessageMenuOption().setLabel('**Images**').setValue('menuid')
            const option9 = new MessageMenuOption().setLabel('**Music**').setValue('menuid')
            const option10 = new MessageMenuOption().setLabel('**Economy**').setValue('menuid')
            const select = new MessageMenu().setID('customid').setPlaceholder('**Moderation**').setMaxValues(10).setMinValues(5).addOption(option, option2, option3, option4, option5, option6, option7, option8, option9, option10)
            const button = new MessageButton().setStyle('url').setURL('https://xopbot.glitch.me/').setLabel(`Site`).setEmoji(`💻`)
            const button2 = new MessageButton().setStyle('url').setURL('https://xopbot.glitch.me/#donations').setLabel(`Offer`).setEmoji(`💰`)
            const button3 = new MessageButton().setStyle('url').setURL('https://xopbot.glitch.me/api').setLabel(`API`).setEmoji(`🌐`)
            const button19 = new MessageButton().setStyle('url').setURL('https://xopbot.glitch.me/privacy').setLabel('PTOS').setEmoji('🕵️‍♂️')
            const row = new MessageActionRow().addComponents(button, button2, button3, button19);
            const embed = new Discord.MessageEmbed().setAuthor(`XOPBOT Commands`, client.user.displayAvatarURL({ dynamic: true })).setThumbnail(client.user.displayAvatarURL()).setTimestamp().setColor(`${color}`).setDescription("**XOPBOT Is A Multipurpose Bot With Over 200+ Commands!**").addFields({ name: '🛠️ Moderation', value: 'Access All Moderation Commands By Typing `x!mod`' }, { name: '⚙ Utility', value: 'Access All Utility Commands By Typing `x!utils`' }, { name: '<:dankhype:825049281299611718> Config', value: 'Access All Config Commands By Typing `x!config`' }, { name: '<:dankmemer3:824890108041232394> Owner', value: 'Private Commands (Owner Only) `x!owner`' }, { name: '🐛 Bugs', value: 'Access All Bug Commands By Typing `x!bugs`' }, { name: '📈 Status', value: 'Access All Status Commands By Typing `x!status`' }).setFooter(`https://xopbot.glitch.me | Page 1`, message.author.displayAvatarURL())
            const embedpag1 = new Discord.MessageEmbed().setAuthor(`XOPBOT Commands`, client.user.displayAvatarURL({ dynamic: true })).setThumbnail(client.user.displayAvatarURL()).setTimestamp().setColor(`${color}`).setDescription("**XOPBOT Is A Multipurpose Bot With Over 200+ Commands!**").addFields({ name: '💬 Socials', value: 'Access All Social Commands By Typing `x!socials`' }, { name: '<:SILENCE_liberal:824886939520991242> Games', value: 'Access All Game Commands Typing `x!games`' }, { name: '<:KEKW:829300759194501140> Fun', value: 'Access All Fun Commands Typing `x!fun`' }, { name: '<:BonkGoToHornyJail:824886935091675177> Images', value: 'Access All Image Commands Typing `x!images`' }, { name: '🎶 Music', value: 'Access All Music Commands Typing `x!music`' }, { name: '🤑 Economy', value: 'Access All Economy Commands Typing `x!economy`' }).setFooter(`https://xopbot.glitch.me | Page 2`, message.author.displayAvatarURL())
            const embedpag2 = new Discord.MessageEmbed().setAuthor(`XOPBOT Commands`, client.user.displayAvatarURL({ dynamic: true })).setThumbnail(client.user.displayAvatarURL()).setTimestamp().setColor(`${color}`).setDescription("**XOPBOT Is A Multipurpose Bot With Over 200+ Commands!**").addFields({ name: '🎉 Giveaway', value: 'Create A Giveaway By Typing `x!giveaway`' }, { name: '<:Stonks:824886940079489025> Leveling', value: 'Access All Leveling Commands By Typing `x!leveling`' }, { name: '🔞 NSFW', value: 'Access All Nsfw Commands By Typing `x!nsfw`' }, { name: '👑 Premium', value: 'Private Commands (Donors Only)`x!premium`' }, { name: '🔗 Invites', value: 'Access All Invite Commands By Typing `x!invites`' }, { name: '🤖 Credits', value: 'Just The Bot Credits (View Them) `x!credits`' }).setFooter(`https://xopbot.glitch.me | Page 3`, message.author.displayAvatarURL())
            const pages = [embed, embedpag1, embedpag2]
            disbutpages.pages(message, pages, { timeout: 540 * 1000, buttons: { delete: { style: "red", emoji: "❌", text: "Delete" }, forward: { style: "blurple", emoji: "⏩", text: "Forward" }, backward: { style: "blurple", emoji: "⏪", text: "Backward" } }, extraRows: [], extraPos: "below", message: "", ephemeral: "**Button Failure! Reasons: \n1.`Not Your Embed!`\n2.`Buttons Timed OUT!`**", })
        } else if (cmd === 'bugs') {
            message.react('🐜');
            const button4 = new MessageButton().setStyle('url').setURL('https://xopbot.glitch.me/').setLabel('Website').setEmoji(`💻`)
            const row4 = new MessageActionRow().addComponents(button4);
            const embed4 = new Discord.MessageEmbed().setThumbnail(client.user.displayAvatarURL()).setTimestamp().setColor(`${color}`).addFields({ name: '__🐛 Bugs (3)__', value: '\n[bugreport](https://xopbot-gg.glitch.me/) \n__***Report A Bug To Admins!***__ \n[findbugs](https://xopbot-gg.glitch.me/) \n__***Find Bugs On Your Server!***__ \n[clearbugs](https://xopbot-gg.glitch.me/) \n__***Clear Bugs From Your Server!***__' }).setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
            await message.channel.send({ embed: embed4, components: [row4] })
        } else if (cmd === 'socials') {
            message.react('🗨');
            const button5 = new MessageButton().setStyle('url').setURL('https://xopbot.glitch.me/').setLabel('Website').setEmoji(`💻`)
            const row6 = new MessageActionRow().addComponents(button5);
            const embed6 = new Discord.MessageEmbed().setThumbnail(client.user.displayAvatarURL()).setTimestamp().setColor(`${color}`).addFields({ name: '__💬 Socials (3)__', value: '\n[youtube](https://xopbot-gg.glitch.me/) \n__***Go To My Youtube Channel!***__ \n[scratch](https://xopbot-gg.glitch.me/) \n__***Go To My Scratch Account!***__ \n[amino](https://xopbot-gg.glitch.me/) \n__***Go To My Amino Account!***__' }).setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
            await message.channel.send({ embed: embed6, components: [row6] })
        } else if (cmd === 'leveling') {
            message.react('🆙');
            const button7 = new MessageButton().setStyle('url').setURL('https://xopbot.glitch.me/').setLabel('Website').setEmoji(`💻`)
            const row10 = new MessageActionRow().addComponents(button7);
            const embed10 = new Discord.MessageEmbed().setThumbnail(client.user.displayAvatarURL()).setTimestamp().setColor(`${color}`).addFields({ name: '__<:Stonks:824886940079489025> Leveling (4)__', value: '\n[rank](https://xopbot-gg.glitch.me/) \n__***Get Your Level Rank Card!***__  \n[leaderboard](https://xopbot-gg.glitch.me/) \n__***Get Your Servers Leaderboard!***__ \n[level](https://xopbot-gg.glitch.me/) \n__***Get A Users Level!***__ \n[edit](https://xopbot-gg.glitch.me/) \n__***Edit Level Or Xp!***__' }).setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
            await message.channel.send({ embed: embed10, components: [row10] })
        } else if (cmd === 'nsfw') {
            const nsfenochcembed = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription("**You Little Pervert! 😊 This Is Not A NSFW Channel! 🔞**")
            if (!message.channel.nsfw) {
                message.delete()
                return message.lineReplyNoMention({ embed: nsfenochcembed }).then(message => { setTimeout(() => message.delete(), 6000); })
            }
            message.react('🔞');
            const button8 = new MessageButton().setStyle('url').setURL('https://pornhub.com/').setLabel('PornHub').setEmoji(`👅`)
            const button81 = new MessageButton().setStyle('url').setURL('https://xnxx.com/').setLabel('XNXX').setEmoji(`💦`)
            const button811 = new MessageButton().setStyle('url').setURL('https://hanime.tv').setLabel('Hanime').setEmoji(`💋`)
            const row2 = new MessageActionRow().addComponents(button8, button81, button811)
            const embed11 = new Discord.MessageEmbed().setThumbnail(client.user.displayAvatarURL()).setTimestamp().setColor(`${color}`).addFields({ name: '__🔞 NSFW (45)__', value: '**Real Life NSFW**: \n```4k, orgy, gapes, neko, pgif, spanks, squirts, gangbang, handcuffed, threesome, doggystyle, masturbation, lewds, sluts, bigass, bigboobs, bikinis, panties, yogapants, gonewild, creampie, cumsluts, blowjob, dildo, milf, bdsm, anal, ass, pussy, boobs, thigh``` \n**Anime NSFW (Premium)**: \n```hentai, hthigh, hanal, hboobs, hrule34, hcowgirl, hmasturbation, hnetorare, hsuccubus, hpaizuri, hyuri, hmidriff, hneko, hkitsune```' }, ).setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
            await message.channel.send({ embed: embed11, components: [row2] })
        } else if (cmd === 'premium') {
            message.react('🏆');
            const button9 = new MessageButton().setStyle('url').setURL('https://xopbot.glitch.me/').setLabel('Website').setEmoji(`💻`)
            const row12 = new MessageActionRow(button9);
            const embed12 = new Discord.MessageEmbed().setThumbnail(client.user.displayAvatarURL()).setTimestamp().setColor(`${color}`).addFields({ name: '__👑 Premium (5)__', value: '\n[fakeuserinfo](https://xopbot-gg.glitch.me/) \n__***Get A Fake User Info! (Premium)***__ \n[weather](https://xopbot-gg.glitch.me/) \n__***Get Your Current Weather! (Premium)***__ \n[oldmeme](https://xopbot-gg.glitch.me/) \n__***Get Old Memes From Google! (Premium)***__ \n[tictactoe](https://xopbot-gg.glitch.me/) \n__***Play Tictactoe! (Premium)***__ \n[math](https://xopbot-gg.glitch.me/) \n__***Do Math Problems! (Premium)***__' }).setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
            await message.channel.send({ embed: embed12, components: [row12] })
        } else if (cmd === 'invites') {
            message.react('🖇');
            const button10 = new MessageButton().setStyle('url').setURL('https://xopbot.glitch.me/').setLabel('Website').setEmoji(`💻`)
            const row13 = new MessageActionRow().addComponents(button10);
            const embed13 = new Discord.MessageEmbed().setThumbnail(client.user.displayAvatarURL()).setTimestamp().setColor(`${color}`).addFields({ name: '__🔗 Invites (3)__', value: '\n[botinvite](https://xopbot-gg.glitch.me/) \n__***Invite The Bot To Your Server!***__ \n[websiteinvite](https://xopbot-gg.glitch.me/) \n__***Go To XOPBOTs Official Website!***__ \n[voteinvite](https://xopbot-gg.glitch.me/) \n__***Vote For XOPBOT To Get Famous!***__' }).setFooter(`Created By:${message.author.tag}`, message.author.displayAvatarURL())
            await message.channel.send({ embed: embed13, components: [row13] })
        } else if (cmd === 'credits') {
            message.react('📃');
            const button11 = new MessageButton().setStyle('url').setURL('https://xopbot.glitch.me/').setLabel('Website').setEmoji(`💻`)
            const button12 = new MessageButton().setStyle('url').setURL('https://discord.com/oauth2/authorize?client_id=831824859066925087&scope=bot&permissions=4294967295').setLabel('Invite').setEmoji(`🔗`)
            const row3 = new MessageActionRow().addComponents(button11, button12)
            const embed14 = new Discord.MessageEmbed().setThumbnail(client.user.displayAvatarURL()).setTimestamp().setColor(`${color}`).addFields({ name: '__🤖 Bot Credits__', value: '`Bot:`-__***The Bots Credits***__ \n`Bot Creator`-__***@👑HACKERPROᵈᵉᵛ#1498***__ \n`Bot Supporter`-__***@Trixer#8894***__' }, { name: '__🤖 Bot Website Credits__', value: '`Bot Website:`-__***The Bots Credits Of The Website***__ \n`Bot Website Creator`-__***@👑HACKERPROᵈᵉᵛ#1498***__ \n`Bot Website Manager`-__***@Trixer#8894***__' }).setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
            await message.channel.send({ embed: embed14, components: [row3] })
        } else if (cmd === 'games') {
            message.react('🎯');
            const button13 = new MessageButton().setStyle('url').setURL('https://xopbot.glitch.me/').setLabel('Website').setEmoji(`💻`)
            const rowg = new MessageActionRow().addComponents(button13)
            const embed115 = new Discord.MessageEmbed().setThumbnail(client.user.displayAvatarURL()).setTimestamp().setColor(`${color}`).addFields({ name: '__<:SILENCE_liberal:824886939520991242> Games (5)__', value: '\n[guessthenumber](https://xopbot-gg.glitch.me/) \n__***Play GuessTheNumber!***__ \n[rps](https://xopbot-gg.glitch.me/) \n__***Play RockPaperSciccors!***__ \n[hangman](https://xopbot-gg.glitch.me/) \n__***Play Hangman!***__ \n[snake](https://xopbot-gg.glitch.me/) \n__***Play Snake Game!***__ \n[connect4](https://xopbot-gg.glitch.me/) \n__***Play Connect4!***__' }).setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
            await message.channel.send({ embed: embed115, components: [rowg] })
        } else if (cmd === 'owner') {
            message.react('👷‍♂️');
            const button14 = new MessageButton().setStyle('url').setURL('https://xopbot.glitch.me/').setLabel('Website').setEmoji(`💻`)
            const rowo = new MessageActionRow().addComponents(button14)
            if (message.author.id != OWNER_ID) return message.channel.send(`**Sorry Only 👑HACKERPROᵈᵉᵛ#1498 Can Run This Command!😔**`);
            const embed116 = new Discord.MessageEmbed().setThumbnail(client.user.displayAvatarURL()).setTimestamp().setColor(`${color}`).addFields({ name: '__<:dankmemer3:824890108041232394> Owner (6)__', value: '\n[donate-premium](https://xopbot-gg.glitch.me/) \n__***Give Premium To User!***__\n[delete-premium](https://xopbot-gg.glitch.me/) \n__***Remove Premium From User!***__ \n[botservers](https://xopbot-gg.glitch.me/) \n__***Get The Bots Server Names!***__ \n[leaveservers](https://xopbot-gg.glitch.me/) \n__***Make Bot Leave Servers!***__ \n[shutdown](https://xopbot-gg.glitch.me/) \n__***Shutdown The Bot!***__ \n[remind](https://xopbot-gg.glitch.me/) \n__***Remind Me Something!***__' }).setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
            await message.channel.send({ embed: embed116, components: [rowo] })
        }
    }
}