module.exports = {
    name: "reverse",
    cooldown: 3,
    aliases: ['rv'],
    permissions: ["SEND_MESSAGES"],
    description: "Reverses the given text",
    async execute(client, message, cmd, args, Discord) {
        const text = args.join(" ")
        if (!text) return message.reply("**Please Give Something To Reverse!**")
        let Rarray = text.split("")
        let reverseArray = Rarray.reverse()
        let result = reverseArray.join("")
        const embed = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor('#c30202')
        .setTitle('Reverse Conversion')
        .setDescription(`${result}`)
        message.channel.send(embed)
    }
}