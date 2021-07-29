module.exports = {
    name: 'createembed',
    permissions: ["MANAGE_MESSAGES"],
    aliases: ['embedcreator', 'createe'],
    cooldown: 10,
    async execute(client, message, cmd, args, Discord) {
        if (!args[0]) {
            return message.reply('**Please Do `x!createembed + <footermsg> + <title> + <color> + <description>`**')
        }
        const footer = args.slice(0).join(" ");
        if (!footer) return message.reply('**Please Add `<footermsg>`**')
        const title = args.slice(1).join(" ");
        if (!title) return message.reply('**Please Add `<title>`**')
        const color = args.slice(2).join(" ");
        if (!color) return message.reply('**Please Add `<color> Example. `RED` `BLUE` `GREEN` Etc. \nMust Be All Capitals To Work For Embed!`**')
        const description = args.slice(3).join(" ");
        if (!description) return message.reply('**Please Add `<description>`**')

        const embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor(`${color}`)
            .setTitle(`${title}`)
            .setDescription(`${description}`)
            .setFooter(`${footer}`)
        message.channel.send(embed)
    }
}