const axios = require('axios');

module.exports = {
    name: "oldmeme",
    permissions: ["SEND_MESSAGES"],
    premium: true,
    cooldown: 3,
    async execute(client, message, cmd, args, Discord) {
        const url = 'https://some-random-api.ml/meme';

        let data, response;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`**An Error Has Occured, Try Again!**`)
        }

        const embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setTitle(`Random Meme That Is Old`)
            .setDescription(data.caption)
            .setColor('#f3f3f3')
            .setImage(data.image)

        await message.channel.send(embed)
    }
}