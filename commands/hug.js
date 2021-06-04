module.exports = {
    name: 'hug',
    permissions: ["SEND_MESSAGES"],
    aliases: [],
    cooldown: 2,
    description: 'hug a user',
    //Use your own execute parameters
    execute(client, message, cmd, args, Discord) {

        const links = [
            'https://th.bing.com/th/id/R6ee230721b657faedc92a61e2a0f8be9?rik=vCl0EJ5%2fOThOKA&pid=ImgRaw',
            'https://th.bing.com/th/id/R26338c80fee5f7edf86e8dece9f36f58?rik=3ei3m0O4jwbNwQ&pid=ImgRaw',
            'https://th.bing.com/th/id/R8f28955f4dd7544f413499ed230a9936?rik=AtF4%2fVdmpg1bxg&pid=ImgRaw',
            'https://th.bing.com/th/id/R33208dccd082fbc7c7b045042bf5da6c?rik=CN%2b6qBOAbfp7%2bA&pid=ImgRaw',
        ]

        const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
        let randomLinks = links[Math.floor(Math.random() * links.length)];
        const randomNumber = Math.floor(Math.random() * 100) + 1;

        const newEmbed = new Discord.MessageEmbed()
        .setTimestamp()
        .setImage(`${randomLinks}`)
        .setColor('#c30202')
        .setTitle(`${user.username} Was Hugged!`)
        .setDescription(`${user.username} Was Hugged By ${message.author.username} And Now ${user.username} Is ${randomNumber}% Happy!`)

        //const hug_list = message.mentions.users.map(user => {

            //return `**${user.username} Was Hugged By ${message.author.username} And Now ${user.username} Is ${randomNumber}% Happy! **`;
       // });

        message.channel.send(newEmbed);
    }
}