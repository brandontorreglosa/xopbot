const punishments = require('../models/ModSchema');

module.exports.run = async (client, message, cmd, args, Discord) => {
    let toWarn = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.reply("You Are Not Allowed To Warn Members!")
    }

    if(message.author.id === toWarn.id) return;

    let reason = args.slice(1).join(" ")

    if(!reason) return message.channel.send('NO REASON!')

    let data = await punishments.findOne({
        GuildID: message.guild.id,
        UserID: toWarn.id
    });

    if(data) {
        data.Punishments.unshift({
            PunishType: 'Warn',
            Moderator: message.author.id,
            Reason: reason,
        });
        data.save();

        message.channel.send(`warned ${toWarn} for \`${reason}\``)
    } else if (!data) {
        let newData = new punishments({
            GuildID: message.guild.id,
            UserID: toWarn.id,
            Punishments: [{
                PunishType: 'Warn',
                Moderator: message.author.id,
                Reason: reason,
            }, ],
        });
        newData.save();

        message.channel.send(`warned ${toWarn} for \`${reason}\``)
    }


}

module.exports.config = {
    name: "warn",
    aliases: []
}