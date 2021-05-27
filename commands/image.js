var Scraper = require('images-scraper');

const google = new Scraper({
    puppeteer: {
       headless: true,
     },
 });

module.exports = {
    name: 'image',
    permissions: ["SEND_MESSAGES"],
    description: 'this sends a image to a discord text channel',
    async execute(client, message, cmd, args, Discord) {
        const image_query = args.join(' ');
        if(!image_query) return message.channel.send('**Please Enter Image Name**');
        
                
        const image_results = await google.scrape(image_query, 1);
        const embed = new Discord.MessageEmbed()
        .setFooter('Images Provided To You By The Bot Creator 👑HACKERPROᵈᵉᵛ#1498')
        .setTitle('Good Searching!')
        .setImage(image_results[0].url);
        message.channel.send(embed)
    }

}
