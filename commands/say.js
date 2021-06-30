module.exports = {
    name: 'say',
    permissions: ["SEND_MESSAGES"],
    description: "Make the bot say your message",
    async execute(client, message, cmd, args, Discord) {

        const user = message.mentions.users.first();

        if (message.content.match("gore") || message.content.match("dis") || message.content.match("kls")) {
            message.delete();
            message.reply(`**You Have Been Reported To The Developer!**`);
    
        if (!args[0]) {
        message.channel.send("**Please Add Some Text for Me XOPBOT To Repeat! \nAnything Rude Is Sended To The Developer!**")
        }
        let sayMessage = args.slice(0).join(' ');
        if (sayMessage.length > 65) return message.channel.send('**You Are Not Allowed To Go Over 65 Characters!**');

        message.channel.send(`${sayMessage}`, { allowedMentions: { parse:["users"] } });
    //  message.delete(10000);
    }
}
}