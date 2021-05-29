
module.exports = {
    name: 'image',
    permissions: ["SEND_MESSAGES"],
    description: 'this sends a image to a discord text channel',
    async execute(client, message, cmd, args, Discord) {

const res = await got("http://results.dogpile.com/serp?qc=images&q=" + args.slice(1).join(" "))

const arrayOfMatches = res.body.match(/(?<=href=")https?.*?(?=")/gm);

function grabImage() {
  const image = arrayOfMatches[Math.floor(Math.random() * arrayOfMatches.length)];

    if (!/jpg|png|gif/gi.test(image)) return grabImage();
    else return image;
}


const embed = new Discord.MessageEmbed()
.setTimestamp()
  .setFooter('Very Good Searching!')
  .setTitle('Nice Embed Right?')
  .setImage(grabImage());

  message.channel.send(embed)

}

}

