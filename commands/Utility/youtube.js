const ytSearch = require("yt-search");
const color = process.env.Color;
const lineReplyNoMention = require("discord-reply");
module.exports = {
  name: "youtube",
  permissions: ["SEND_MESSAGES"],
  clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  cooldown: 10,
  description: "Search any video online",
  async execute(client, message, cmd, args, Discord) {
    if (!args[0]) {
      const nopr = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor(`${color}`)
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**\`(prefix)youtube <video name>\`**`)
      return message.lineReplyNoMention(nopr)
    }
   
    const args = message.content.split(" ").slice(1)

    const videoFinder = async (query) => {
             const videoResult = await ytSearch(query);
  
             return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
  
         }
  
         const video = await videoFinder(args.join(' '));
 
         if(video) {
 
         
            message.lineReplyNoMention(`${video.url}`)
       
   
   } else {
    message.lineReplyNoMention('no video found. sad')
   }
   }
}