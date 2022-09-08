const { MessageButton, MessageActionRow, MessageMenuOption, MessageMenu } = require('discord-buttons');
const disbutpages = require("discord-embeds-pages-buttons")
const OWNER_ID = process.env.Owner_ID;
const color = process.env.Color;
module.exports = {
    name: "help",
    aliases: ['bugs', 'socials', 'games', 'leveling', 'nsfw', 'premium', 'invites', 'credits', 'owner', 'status'],
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
            const embed = new Discord.MessageEmbed().setThumbnail(client.user.displayAvatarURL({ dynamic: true })).setTitle(`XOPBOT's Commands`).setURL("https://xopbot.glitch.me/").setImage("https://cdn.discordapp.com/attachments/975037800464388186/985410790469271583/xopbot.gif").setTimestamp().setColor(`${color}`).setDescription("**XOPBOT Is A Multipurpose Bot With Over 200+ Commands!**").addFields({ name: '`🔨 | Moderation`', value: '**Type `x!mod` To View Moderation Commands**' }, { name: '`⛏️ | Utility`', value: '**Type `x!utils` To View Utility Commands**' }, { name: '`⚙️ | Config`', value: '**Type `x!config` To View Config Commands**' }, { name: '`🙂 | Owner`', value: '**You Can\'t Type `x!owner` (Owner Only)**' }, { name: '`🪲 | Bugs`', value: '**Type `x!bugs` To View Bug Commands**' }, { name: '`📈 | Status`', value: '**Type `x!status` To View Status Commands**' }, { name: '`📱 | Socials`', value: '**Type`x!socials` To View Social Commands**' }, { name: '`🕹️ | Games`', value: '**Type `x!games` To View Game Commands**' }, { name: '`🤪 | Fun`', value: '**Type `x!fun` To View Fun Commands**' }).setFooter(`https://xopbot.glitch.me | Page 1`, client.user.displayAvatarURL())
            const embedpag1 = new Discord.MessageEmbed().setThumbnail(client.user.displayAvatarURL({ dynamic: true })).setTitle(`XOPBOT's Commands`).setURL("https://xopbot.glitch.me/").setImage("https://cdn.discordapp.com/attachments/975037800464388186/985410790469271583/xopbot.gif").setTimestamp().setColor(`${color}`).setDescription("**XOPBOT Is A Multipurpose Bot With Over 200+ Commands!**").addFields({ name: '`📸 | Images`', value: '**Type `x!images` To View Image Commands**' }, { name: '`🎶 | Music`', value: '**Type `x!music` To View Music Commands**' }, { name: '`🤑 | Economy`', value: '**Type `x!economy` To View Economy Commands**' }, { name: '`🎉 | Giveaway`', value: '**Type `x!giveaway` To Create A Giveaway**' }, { name: '`🛫 | Leveling`', value: '**Type `x!leveling` To View Leveling Commands**' }, { name: '`🔞 | NSFW`', value: '**Type `x!nsfw` To View NSFW Commands**' }, { name: '`🤴🏽 | Premium`', value: '**You Can\'t Type `x!premium` (Donors Only)**' }, { name: '`🔗 | Invites`', value: '**Type `x!invites` To View Invite Commands**' }, { name: '`🤖 | Credits`', value: '**Type `x!credits` To View The Credits**' }).setFooter(`https://xopbot.glitch.me | Page 2`, client.user.displayAvatarURL())
            const pages = [embed, embedpag1]
            disbutpages.pages(message, pages, { timeout: 540 * 1000, buttons: { delete: { style: "red", emoji: "❌", text: "Delete" }, forward: { style: "blurple", emoji: "⏩", text: "Forward" }, backward: { style: "blurple", emoji: "⏪", text: "Backward" } }, extraRows: [], extraPos: "below", message: "", ephemeral: "**Button Failure! Reasons: \n1.`Not Your Embed!`\n2.`Buttons Timed OUT!`**", })
        } else if (cmd === 'bugs') {
            message.react('🐜');
            const button4 = new MessageButton().setStyle('url').setURL('https://xopbot.glitch.me/').setLabel('Website').setEmoji(`💻`)
            const row4 = new MessageActionRow().addComponents(button4);
            const embed4 = new Discord.MessageEmbed().setThumbnail(client.user.displayAvatarURL()).setTimestamp().setColor(`${color}`).addFields({ name: '`🪲 | Bugs (3)`', value: '\n[bugreport](https://xopbot.glitch.me/) \n**Report A `Bug`** \n[findbugs](https://xopbot.glitch.me/) \n**Find Bugs On Your `Server`** \n[clearbugs](https://xopbot.glitch.me/) \n**Clear Bugs From Your `Server`**' }).setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
            await message.channel.send({ embed: embed4, components: [row4] })
        } else if (cmd === 'socials') {
            message.react('🗨');
            const button5 = new MessageButton().setStyle('url').setURL('https://xopbot.glitch.me/').setLabel('Website').setEmoji(`💻`)
            const row6 = new MessageActionRow().addComponents(button5);
            const embed6 = new Discord.MessageEmbed().setThumbnail(client.user.displayAvatarURL()).setTimestamp().setColor(`${color}`).addFields({ name: '`📱 | Socials (3)`', value: '\n[youtube](https://xopbot.glitch.me/) \n**Go To My `Youtube Channel`** \n[scratch](https://xopbot.glitch.me/) \n**Go To My `Scratch Account`** \n[amino](https://xopbot.glitch.me/) \n**Go To My `Amino Account`**' }).setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
            await message.channel.send({ embed: embed6, components: [row6] })
        } else if (cmd === 'leveling') {
            message.react('🆙');
            const button7 = new MessageButton().setStyle('url').setURL('https://xopbot.glitch.me/').setLabel('Website').setEmoji(`💻`)
            const row10 = new MessageActionRow().addComponents(button7);
            const embed10 = new Discord.MessageEmbed().setThumbnail(client.user.displayAvatarURL()).setTimestamp().setColor(`${color}`).addFields({ name: '`🛫 | Leveling (4)`', value: '\n[rank](https://xopbot.glitch.me/) \n**Get Your `Rank Card`** \n[leaderboard](https://xopbot.glitch.me/) \n**Get The `Server\'s Leaderboard`** \n[level](https://xopbot.glitch.me/) \n**Get A `User\'s Level`** \n[edit](https://xopbot.glitch.me/) \n**Edit `Level Or Xp`**' }).setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
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
            const embed11 = new Discord.MessageEmbed().setThumbnail(client.user.displayAvatarURL()).setTimestamp().setColor(`${color}`).addFields({ name: '`🔞 | NSFW (45)`', value: '**Real Life NSFW**: \n```4k, orgy, gapes, neko, pgif, spanks, squirts, gangbang, handcuffed, threesome, doggystyle, masturbation, lewds, sluts, bigass, bigboobs, bikinis, panties, yogapants, gonewild, creampie, cumsluts, blowjob, dildo, milf, bdsm, anal, ass, pussy, boobs, thigh``` \n**Anime NSFW (Premium)**: \n```hentai, hthigh, hanal, hboobs, hrule34, hcowgirl, hmasturbation, hnetorare, hsuccubus, hpaizuri, hyuri, hmidriff, hneko, hkitsune```' },).setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
            await message.channel.send({ embed: embed11, components: [row2] })
        } else if (cmd === 'premium') {
            message.react('🏆');
            const button9 = new MessageButton().setStyle('url').setURL('https://xopbot.glitch.me/').setLabel('Website').setEmoji(`💻`)
            const row12 = new MessageActionRow(button9);
            const embed12 = new Discord.MessageEmbed().setThumbnail(client.user.displayAvatarURL()).setTimestamp().setColor(`${color}`).addFields({ name: '`👑 Premium (5)`', value: '\n[fakeuserinfo](https://xopbot.glitch.me/) \n**Get A `Fake User Info`** \n[weather](https://xopbot.glitch.me/) \n**Get Your `Current Weather`** \n[oldmeme](https://xopbot.glitch.me/) \n**Fetch Old Memes From `Google`** \n[tictactoe](https://xopbot.glitch.me/) \n**Play `Tictactoe`** \n[math](https://xopbot.glitch.me/) \n**Solve `Math Problems`**' }).setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
            await message.channel.send({ embed: embed12, components: [row12] })
        } else if (cmd === 'invites') {
            message.react('🖇');
            const button10 = new MessageButton().setStyle('url').setURL('https://xopbot.glitch.me/').setLabel('Website').setEmoji(`💻`)
            const row13 = new MessageActionRow().addComponents(button10);
            const embed13 = new Discord.MessageEmbed().setThumbnail(client.user.displayAvatarURL()).setTimestamp().setColor(`${color}`).addFields({ name: '`🔗 Invites (3)`', value: '\n[botinvite](https://xopbot.glitch.me/) \n**Invite The Bot To Your `Server`** \n[websiteinvite](https://xopbot.glitch.me/) \n**Go To Bot\'s `Official Website`** \n[voteinvite](https://xopbot.glitch.me/) \n**Vote For The `Bot`**' }).setFooter(`Created By:${message.author.tag}`, message.author.displayAvatarURL())
            await message.channel.send({ embed: embed13, components: [row13] })
        } else if (cmd === 'credits') {
            message.react('📃');
            const button11 = new MessageButton().setStyle('url').setURL('https://xopbot.glitch.me/').setLabel('Website').setEmoji(`💻`)
            const button12 = new MessageButton().setStyle('url').setURL('https://discord.com/oauth2/authorize?client_id=831824859066925087&scope=bot&permissions=4294967295').setLabel('Invite').setEmoji(`🔗`)
            const row3 = new MessageActionRow().addComponents(button11, button12)
            const embed14 = new Discord.MessageEmbed().setThumbnail(client.user.displayAvatarURL()).setTimestamp().setColor(`${color}`).addFields({ name: '`🤖 | Bot Credits`', value: '`Bot:`-__***The Bots Credits***__ \n`Bot Creator`-__***@👑HACKERPROᵈᵉᵛ#1498***__ \n`Bot Supporter`-__***@Trixer#8894***__' }, { name: '__🤖 Bot Website Credits__', value: '`Bot Website:`-__***The Bots Credits Of The Website***__ \n`Bot Website Creator`-__***@👑HACKERPROᵈᵉᵛ#1498***__ \n`Bot Website Manager`-__***@Trixer#8894***__' }).setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
            await message.channel.send({ embed: embed14, components: [row3] })
        } else if (cmd === 'games') {
            message.react('🎯');
            const button13 = new MessageButton().setStyle('url').setURL('https://xopbot.glitch.me/').setLabel('Website').setEmoji(`💻`)
            const rowg = new MessageActionRow().addComponents(button13)
            const embed115 = new Discord.MessageEmbed().setThumbnail(client.user.displayAvatarURL()).setTimestamp().setColor(`${color}`).addFields({ name: '`🕹️ | Games (5)`', value: '\n[guessthenumber](https://xopbot.glitch.me/) \n**Play `GuessTheNumber`** \n[rps](https://xopbot.glitch.me/) \n**Play `RockPaperSciccors`** \n[hangman](https://xopbot.glitch.me/) \n**Play `Hangman`** \n[snake](https://xopbot-gg.glitch.me/) \n**Play `Snake Game`** \n[connect4](https://xopbot.glitch.me/) \n**Play `Connect4`**' }).setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
            await message.channel.send({ embed: embed115, components: [rowg] })
        } else if (cmd === 'owner') {
            message.react('👷‍♂️');
            const button14 = new MessageButton().setStyle('url').setURL('https://xopbot.glitch.me/').setLabel('Website').setEmoji(`💻`)
            const rowo = new MessageActionRow().addComponents(button14)
            if (message.author.id != OWNER_ID) return message.channel.send(`**Sorry Only 👑HACKERPROᵈᵉᵛ#1498 Can Run This Command!😔**`);
            const embed116 = new Discord.MessageEmbed().setThumbnail(client.user.displayAvatarURL()).setTimestamp().setColor(`${color}`).addFields({ name: '`🙂 | Owner (6)`', value: '\n[donate-premium](https://xopbot.glitch.me/) \n**Give Premium To A `User`**\n[delete-premium](https://xopbot.glitch.me/) \n**Remove Premium From A `User`** \n[botservers](https://xopbot.glitch.me/) \n**Get The Bot\'s `Server Names`** \n[leaveservers](https://xopbot.glitch.me/) \n**Make The Bot `Leave Servers`** \n[shutdown](https://xopbot.glitch.me/) \n**Shutdown The `Bot`** \n[remind](https://xopbot.glitch.me/) \n**Remind Me `Something`**' }).setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
            await message.channel.send({ embed: embed116, components: [rowo] })
        } else if (cmd === "status") {
            message.react('💹');
            const button15 = new MessageButton().setStyle('url').setURL('https://xopbot.glitch.me/').setLabel('Website').setEmoji(`💻`)
            const roxs = new MessageActionRow().addComponents(button15);
            const embed127 = new Discord.MessageEmbed().setThumbnail(client.user.displayAvatarURL()).setTimestamp().setColor(`${color}`).setDescription('**__📈 Status (6)__** \n[mcserver](https://xopbot.glitch.me/) \n__***Get MCSERVERS Stats!***__  \n[statusping](https://xopbot.glitch.me/) \n__***Get A Status Ping!***__ \n[serverinfo](https://xopbot.glitch.me/) \n__***Get Server Info!***__ \n[botinfo](https://xopbot.glitch.me/) \n__***Get Bot Info!***__ \n[covid](https://xopbot.glitch.me/) \n__***Get Covid Info!***__ \n[userinfo](https://xopbot.glitch.me/) \n__***Get User Info!***__').setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
            await message.channel.send({ embed: embed127, components: [roxs] })
        }
    }
}