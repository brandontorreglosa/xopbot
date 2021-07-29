module.exports = {
    name: 'createembed',
    permissions: ["MANAGE_MESSAGES"],
    aliases: ['embedcreator', 'createe'],
    cooldown: 10,
    async execute(client, message, cmd, args, Discord) {
        if (!args[0]) {
            return message.reply('**Please Do `x!createembed + <footermsg> + <title> + <description>`**')
        }
        let splitArgs = args.join(' ').split('/');
        const footer = splitArgs[0];
        if (!footer) return message.reply('**Please Add `<footermsg>`**')
        const title = splitArgs[1];
        if (!title) return message.reply('**Please Add `<title>`**')
        const description = splitArgs[2];
        if (!description) return message.reply('**Please Add `<description>`**')
    
        const embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor(`#c30202`)
            .setTitle(`${title}`)
            .setDescription(`${description}`)
            .setFooter(`${footer}`)
        message.channel.send(embed)
    }
}