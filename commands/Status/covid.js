const axios = require('axios');
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
    name: "covid",
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    aliases: ['corona', 'c19'],
    async execute(client, message, cmd, args, Discord) {
        const baseUrl = "https://corona.lmao.ninja/v2";
        let url, response, corona;
        try {
            url = args[0] ? `${baseUrl}/countries/${args[0]}` : `${baseUrl}/all`
            response = await axios.get(url)
            corona = response.data
        } catch (error) {
            const nopr = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`(prefix)covid <location>\`**`)
            return message.lineReplyNoMention({ embed: nopr })
        }
        const embed = new Discord.MessageEmbed().setTimestamp().setTitle(args[0] ? `${args[0].toUpperCase()} Stats` : 'Total Corona Cases World Wide').setColor(`${color}`).setThumbnail(args[0] ? corona.countryInfo.flag : 'https://i.giphy.com/YPbrUhP9Ryhgi2psz3.gif').setDescription(`**🔍 Total Cases:** \n \`${corona.cases.toLocaleString()}\` \n**😵 Total Deaths:** \n \`${corona.deaths.toLocaleString()}\` \n**😇 Total Recovered:** \n \`${corona.recovered.toLocaleString()}\` \n**🦠 Active Cases:** \n \`${corona.active.toLocaleString()}\` \n**🤧 Critical Cases:** \n \`${corona.critical.toLocaleString()}\` \n**🙌 Today's Recoveries:** \n \`${corona.todayRecovered.toLocaleString()}\` \n**☠️ Today's Deaths:** \n \`${corona.todayDeaths.toLocaleString()}\` `)
        await message.lineReplyNoMention({ embed: embed })
    }
};