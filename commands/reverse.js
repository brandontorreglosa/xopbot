module.exports = {
    name: "reverse",
    aliases: ['rv'],
    permissions: ["SEND_MESSAGES"],
    description: "Reverses the given text",
    async execute(client, message, cmd, args, Discord) {
        const text = args.join(" ")
        if (!text) return message.reply("Please Give Something To Reverse!")
        let Rarray = text.split("")
        let reverseArray = Rarray.reverse()
        let result = reverseArray.join("")
        message.channel.send(result)
    }
}