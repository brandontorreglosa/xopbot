module.exports = {
    name: 'say',
    permissions: ["SEND_MESSAGES"],
    description: "Make the bot say your message",
    async execute(client, message, cmd, args, Discord) {
        if (!args.join(" ")) {
        message.channel.send("**Please Add Some Text for Me XOPBOT To Repeat! \nAnything Rude Is Sended To The Developer!**")
        }
        message.channel.send(args.join(" "), { allowedMentions: { parse:["users"] } });
    //  message.delete(10000);
    }
}