const Discord = require('discord.js');
const Levels = require("discord-xp");
const canvacord = require("canvacord");
const { createCanvas, loadImage } = require('canvas');

module.exports = {
    name: 'rank',
    aliases: ['profilecard'],
    permissions: ["SEND_MESSAGES"],
    description: 'get rank',
    async execute(client, message, cmd, args, Discord) {

        if(cmd === 'rank') {

        const target = message.mentions.users.first() || message.author;

        const user = await Levels.fetch(target.id, message.guild.id);

        const neededXp = Levels.xpFor(parseInt(user.level) + 1);

        if (!user) return message.reply("**You Dont Have Any Xp, Try Sending More Messages!**");

        const rank = new canvacord.Rank()
            .setAvatar(message.author.displayAvatarURL({ dynamic: false, format: 'png' }))
            // .setRank(leaderboard)
            .setLevel(user.level)
            .setCurrentXP(user.xp)
            .setRequiredXP(neededXp)
            .setStatus(message.member.presence.status)
            .setBackground("IMAGE", "https://th.bing.com/th/id/Rcf6f575500f15f55cddf043c1a79d902?rik=M0%2bN0%2bVBxLmchA&pid=ImgRaw")
            .setProgressBar("#c30202")
            .setUsername(message.author.username)
            .setDiscriminator(message.author.discriminator);
            rank.build()
            .then(data => {
                const attachment = new Discord.MessageAttachment(data, "RankCard.png");
                message.channel.send(attachment);
            });
        }

        else if(cmd === 'profilecard') {

           const member = member.match(/\d{17,18}/)||[][0] || message.member.id;
            member = await message.guild.members.fetch(member).catch(() => message.member);

           // const member = message.mentions.users.first() || message.author;

            const canvas = createCanvas(800, 600);
            const ctx = canvas.getContext('2d');
            const def = await loadImage('https://th.bing.com/th/id/R.dfbd6e7b7bc79c83e26ade40fa66e12d?rik=0NXBiN8%2bjK%2bEgg&pid=ImgRaw');
            const defpattern = await loadImage('https://i.imgur.com/nx5qJUb.png' || 'https://i.imgur.com/bnLhXeW.jpg');
            const avatar = await loadImage(member.user.displayAvatarURL({ format: 'png' }));

            ctx.drawImage(def, 300, 65, 475, 250);

            // add card on left side
            // add pattern inside card
            ctx.fillStyle = 'rgba(255,255,255,1)'
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
            ctx.fillText(member.displayName, 150, 350, 280)
            ctx.font = '20px Arial'
            ctx.fillText(member.user.tag, 150, 375, 280)

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

            message.channel.send({
                files: [{
                    attachment: canvas.toBuffer(),
                    name: 'profile.png'
                }]
            })

        }
    }
}
