const Discord = require("discord.js");
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
const { MessageButton, MessageActionRow } = require("discord-buttons");
module.exports = {
    name: "query",
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    cooldown: 5,
    description: "Search anything on any search engine",
    async execute(client, message, cmd, args, Discord) {
        const text1 = args.join(' ');
        const text2 = args.join('+');
        const google = `https://th.bing.com/th/id/R.5069689e88f5dc4e88a5230dafb7e65b?rik=BBz5CfrNbwhMGg&pid=ImgRaw&r=0`;
        if (!text2) {
            const nopr = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`(prefix)query <search>\`**`)
            return message.lineReplyNoMention({ embed: nopr })
        }
        const google1 = new MessageButton().setStyle('url').setURL(`https://www.google.com/search?q=${text2}`).setLabel('Google').setEmoji('🔍')
        const bing = new MessageButton().setStyle('url').setURL(`https://www.bing.com/search?q=${text2}`).setLabel('Bing').setEmoji('🔍')
        const duckduckgo = new MessageButton().setStyle('url').setURL(`https://duckduckgo.com/?q=${text2}`).setLabel('Duckduckgo').setEmoji('🔍')
        const youtubemusic = new MessageButton().setStyle('url').setURL(`https://music.youtube.com/search?q=${text2}`).setLabel('Youtube Music').setEmoji('🎵')
        const spotify = new MessageButton().setStyle('url').setURL(`https://open.spotify.com/search/${text2}`).setLabel('Spotify').setEmoji('🎵')
        const wikipedia = new MessageButton().setStyle('url').setURL(`https://www.wikipedia.org/wiki/${text2}`).setLabel('Wikipedia').setEmoji('📑')
        const wikihow = new MessageButton().setStyle('url').setURL(`https://www.wikihow.com/wikiHowTo?search=${text2}`).setLabel('Wikihow').setEmoji('📑')
        const row = new MessageActionRow().addComponents(google1, bing, duckduckgo);
        const row2 = new MessageActionRow().addComponents(youtubemusic, spotify);
        const row3 = new MessageActionRow().addComponents(wikipedia, wikihow);
        const embed = new Discord.MessageEmbed().setTimestamp().setAuthor("Query", message.author.displayAvatarURL({ dynamic: true })).setThumbnail(`https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2000px-Google_%22G%22_Logo.svg.png`).setDescription(`**Searched For: \n\`${text1}\` \n\nResults: \n Looked At All Query's And Found \`${text1}\`. \nPlease Click Below Your Query ⬇️.**`).setThumbnail(google).setColor(`${color}`)
        message.channel.send({ embed: embed, components: [row, row2, row3] });
    }
}