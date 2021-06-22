const discord = require("discord.js");
const figlet = require("figlet"); // MAKE SURE TO INSTALL FIGLET PACKAGE OR CODE WONT WORK

module.exports = {
    name: "ascii",
    permissions: ["SEND_MESSAGES"],
    cooldown: 5,
    aliases: [],
    category: "Fun",
    usage: "ascii <text>",
    description: "Returns provided text in ascii format.",
 async execute(client, message, cmd, args, Discord)  {

   let text = args.join(" ");
   if(!text) {
return message.channel.send(`**Please Provide Text For The Ascii Conversion!**`)
}
   let maxlen = 20
if(text.length > 20) {
return message.channel.send(`**Please Put Text That Has 20 Characters Or Less Because The Conversion Won't Be That Good!**`)
}
 // AGAIN, MAKE SURE TO INSTALL FIGLET PACKAGE!  
figlet(text, function(err, data) {
message.channel.send(data, {
code: 'AsciiArt' 
});
})

    }
};