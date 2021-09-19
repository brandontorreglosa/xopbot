const Discord = require('discord.js');
const Levels = require("discord-xp");
const canvacord = require("canvacord");
const { createCanvas, loadImage } = require('canvas');
const lineReplyNoMention = require('discord-reply');
const color1 = process.env.Color;
module.exports = {
    name: 'rank',
    aliases: ['profile'],
    cooldown: 3,
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    description: 'get rank',
    async execute(client, message, cmd, args, Discord) {

        if (cmd === 'rank') {

            const target = message.mentions.users.first() || message.author;

            const user = await Levels.fetch(target.id, message.guild.id);

            const neededXp = Levels.xpFor(parseInt(user.level) + 1);

            if (!user) {
                const fakuser = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color1}`)
                    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`**\`${target.username}\` Currently Has No Xp!**`)
                return message.lineReplyNoMention(fakuser)
            }

            const rank = new canvacord.Rank()
                .setAvatar(target.displayAvatarURL({ dynamic: false, format: 'png' }))
                // .setRank(leaderboard)
                .setLevel(user.level)
                .setCurrentXP(user.xp)
                .setRequiredXP(neededXp)
                .setStatus(target.presence.status)
                .setBackground("IMAGE", "https://th.bing.com/th/id/R.9d2bce98532d6b9f755d8465e6348f33?rik=nMEHMQFPMcx2%2fA&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fzvTLpqP.jpg&ehk=wHwiQmCHja6I1Fofvau9xirO8UguWEHwcb6HeiBPwXA%3d&risl=&pid=ImgRaw&r=0")
                .setProgressBar(`${color1}`)
                .setUsername(target.username)
                .setDiscriminator(target.discriminator);
            rank.build()
                .then(data => {
                    // const rankembed = new Discord.MessageEmbed()
                    //     .setTimestamp()
                    //     .setColor(`${color1}`)
                    //     .setImage(`${data}`)
                    // message.lineReplyNoMention(rankembed)
                    const attachment = new Discord.MessageAttachment(data, "xopbotrankcard.png");
                    message.lineReplyNoMention(attachment);
                });
        }

        else if (cmd === 'profile') {

            const user = message.mentions.users.first() || message.author;
            const bal = await client.bal(user.id)
            const bank = await client.bank(user.id)

            const canvas = createCanvas(800, 600);
            const ctx = canvas.getContext('2d');
            const color = 'rgb(52, 183, 219)'
            const def = await loadImage('https://th.bing.com/th/id/R.089af52d047769a08d68738ee93483a4?rik=1stZo7clhLcTWw&pid=ImgRaw&r=0');
            const defpattern = await loadImage('https://i.imgur.com/nx5qJUb.png' || 'https://i.imgur.com/bnLhXeW.jpg');
            const avatar = await loadImage(message.author.displayAvatarURL({ format: 'png' }));

            ctx.drawImage(def, 300, 65, 475, 250);

            // add the bio card
            ctx.beginPath();
            ctx.moveTo(300, 315);
            ctx.lineTo(canvas.width - 5, 315);
            ctx.lineTo(canvas.width - 5, canvas.height - 25);
            ctx.lineTo(300, canvas.height - 25);
            ctx.fillStyle = 'rgba(255,255,255,0.8)'
            ctx.shadowColor = "rgba(0,0,0,0.5)";
            ctx.shadowBlur = 40;
            ctx.shadowOffsetX = -10;
            ctx.shadowOffsetY = -40;
            ctx.fill();

            // add bio outline
            ctx.beginPath();
            ctx.moveTo(370, 338);
            ctx.lineTo(canvas.width - 40, 338)
            ctx.arcTo(canvas.width - 20, 338, canvas.width - 20, 358, 20);
            ctx.lineTo(canvas.width - 20, 378)
            ctx.arcTo(canvas.width - 20, 398, canvas.width - 40, 398, 20);
            ctx.lineTo(330, 398)
            ctx.arcTo(310, 398, 310, 378, 20)
            ctx.lineTo(310, 358)
            ctx.arcTo(310, 338, 330, 338, 20)
            ctx.lineWidth = 1;
            ctx.strokeStyle = 'rgba(0,0,0,0.4)'
            ctx.stroke();

            // add bio title
            ctx.beginPath();
            ctx.font = 'bold 20px Arial'
            ctx.fillStyle = 'rgba(0,0,0,0.4)'
            ctx.fillText('BIO', 330, 345, 50)

            // add bio text to bio carrd
            ctx.beginPath();
            ctx.font = '15px Arial'
            ctx.fillStyle = 'rgba(0,0,0,0.8)'
            ctx.textAlign = 'center'
            ctx.fillText('No Bio Written', 555, 368, 490)

            // add birthday outline
            ctx.beginPath();
            ctx.moveTo(410, 419);
            ctx.lineTo(520, 419);
            ctx.arcTo(540, 419, 540, 439, 20);
            ctx.arcTo(540, 459, 520, 459, 20);
            ctx.lineTo(330, 459);
            ctx.arcTo(310, 459, 310, 439, 20);
            ctx.arcTo(310, 419, 320, 419, 20);
            ctx.stroke();

            // add birthday title
            ctx.beginPath();
            ctx.font = 'bold 18px Arial'
            ctx.fillStyle = 'rgba(0,0,0,0.4)'
            ctx.textAlign = 'left'
            ctx.fillText('BIRTHDAY', 330, 425, 80)

            // add birthday text to birthday card
            ctx.beginPath();
            ctx.font = '15px Arial'
            ctx.fillStyle = 'rgba(0,0,0,0.8)'
            ctx.fillText('No Birthday Set', 330, 445, 230)

            // add balance outline
            ctx.beginPath();
            ctx.moveTo(410, 479);
            ctx.lineTo(520, 479);
            ctx.arcTo(540, 479, 540, 499, 20);
            ctx.lineTo(540, 509);
            ctx.arcTo(540, 529, 520, 529, 20);
            ctx.lineTo(330, 529);
            ctx.arcTo(310, 529, 310, 509, 20);
            ctx.lineTo(310, 499);
            ctx.arcTo(310, 479, 330, 479, 20);
            ctx.stroke();

            // add balance title
            ctx.beginPath();
            ctx.font = 'bold 18px Arial'
            ctx.fillStyle = 'rgba(0,0,0,0.4)'
            ctx.fillText('BALANCE', 330, 485, 80)

            // add balance text to balance card
            ctx.beginPath();
            ctx.font = '18px Arial'
            ctx.fillStyle = 'rgba(0,0,0,0.8)'
            ctx.fillText(`💸: ${bal}`, 330, 512, 80)
            ctx.fillText(`🏦: ${bank}`, 430, 512, 80)

            // add the tip shape
            ctx.beginPath();
            ctx.moveTo(800, 10);
            ctx.lineTo(575, 10);
            ctx.lineTo(600, 80);
            ctx.lineTo(800, 80);
            ctx.fillStyle = color;
            ctx.shadowBlur = 30;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 30;
            ctx.fill();

            // write tip on tip shape
            ctx.beginPath();
            ctx.font = 'bold 30px Arial'
            ctx.fillStyle = 'rgba(255,255,255,0.8)'
            ctx.textAlign = 'left'
            ctx.fillText('TIP', 610, 50, 50)

            // write received tips on tip shape
            ctx.beginPath();
            ctx.font = 'bold 30px Arial'
            ctx.textAlign = 'right'
            ctx.fillText('0', canvas.width - 30, 50, 120)

            // reset shadow
            ctx.shadowOffsetY = 0;

            // add card on left side
            // add pattern inside card
            ctx.fillStyle = 'rgba(12,12,12)'
            ctx.beginPath();
            ctx.moveTo(0, 65);
            ctx.lineTo(0, 535);
            ctx.arcTo(0, 585, 50, 585, 50);
            ctx.lineTo(250, 585);
            ctx.lineTo(300, 585);
            ctx.arcTo(300, 15, 250, 15, 50);
            ctx.lineTo(50, 15);
            ctx.arcTo(0, 15, 0, 65, 50);
            ctx.stroke();
            ctx.shadowBlur = 10;
            ctx.shadowOffsetX = 10;
            ctx.fill();
            ctx.save();
            ctx.clip();
            ctx.drawImage(defpattern, 0, 0, 300, 600);
            ctx.restore();

            // reset shadow
            ctx.shadowOffsetX = 0;

            ctx.beginPath();
            ctx.moveTo(0, 255);
            ctx.bezierCurveTo(0, 265, 50, 265, 50, 255);
            ctx.bezierCurveTo(50, 245, 100, 245, 100, 255);
            ctx.bezierCurveTo(100, 265, 150, 265, 150, 255);
            ctx.bezierCurveTo(150, 245, 200, 245, 200, 255);
            ctx.bezierCurveTo(200, 265, 250, 265, 250, 255);
            ctx.bezierCurveTo(250, 245, 300, 245, 300, 255);
            ctx.lineTo(300, 585);
            ctx.lineTo(50, 585);
            ctx.arcTo(0, 585, 0, 535, 50);
            ctx.fillStyle = color
            ctx.fill();
            ctx.shadowBlur = 0;

            // add name
            ctx.beginPath()
            ctx.font = 'bold 30px Arial'
            ctx.fillStyle = '#ffffff'
            ctx.textAlign = 'center'
            ctx.fillText(message.author.username, 150, 350, 280)
            ctx.font = '20px Arial'
            ctx.fillText('#', message.author.discriminator, 150, 375, 280)

            ctx.beginPath();
            ctx.arc(150, 225, 75, 0, Math.PI * 2);
            ctx.lineWidth = 6;
            ctx.strokeStyle = 'rgba(0,0,0,0.6)'
            ctx.stroke();
            ctx.closePath();
            ctx.save();
            ctx.clip();
            ctx.drawImage(avatar, 75, 150, 150, 150);
            ctx.restore();

            ctx.beginPath();
            ctx.arc(150, 225, 75, 0, Math.PI * 2);
            ctx.lineWidth = 6;
            ctx.strokeStyle = 'rgba(0,0,0,0.6)'
            ctx.stroke();
            ctx.closePath();
            ctx.save();
            ctx.clip();
            ctx.drawImage(avatar, 75, 150, 150, 150);
            ctx.restore();

            message.lineReplyNoMention({
                files: [{
                    attachment: canvas.toBuffer(),
                    name: 'xopbotprofile.png'
                }]
            })

        }
    }
}
