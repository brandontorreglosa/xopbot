const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: 'hug',
    permissions: ["SEND_MESSAGES"],
    aliases: [],
    cooldown: 2,
    description: 'hug a user',
    //Use your own execute parameters
    execute(client, message, cmd, args, Discord) {

        const links = [
            'https://media.giphy.com/media/sX755wvr2Q6gE/giphy.gif',
            'https://th.bing.com/th/id/R52fdf5b50f754f6aba49a941d5cdb8aa?rik=9oKPfvHzydGiAA&pid=ImgRaw',
            'https://th.bing.com/th/id/Re53a575d22b5e7ffb99407d169c45470?rik=TojnBG8GDTPeFw&pid=ImgRaw',
            'https://th.bing.com/th/id/OIP.YH9ierXytqFvc2QKuX7UVwHaE8?pid=ImgDet&rs=1',
            'https://i.pinimg.com/736x/d7/89/bf/d789bf46183a1fa1b7231325b6d93873--need-a-hug-pandas.jpg',
            'https://media.istockphoto.com/photos/cute-hug-picture-id466196678?k=6&m=466196678&s=170667a&w=0&h=kOWj9C7WJNtZFVeZvt7qOu6GaT89MXov7mJoIgl24Ng=',
            'https://www.dailymoss.com/wp-content/uploads/2018/01/842aa9c5b05d1960b4e81a5ad6784104.jpg',
            'https://th.bing.com/th/id/R99e61c05628843de8fdbf696f0d5d613?rik=wHBHT%2bEAiiRnjw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-x7jLu7KixpE%2fUIDh0lq88-I%2fAAAAAAAAHc8%2fIjbZ9Xf2jXw%2fs1600%2fHugging%2bCats%2bCute%2bPic.jpg&ehk=kIazJGUYOUcdjyS6C6pgrAM2PjwzpnByyeJrgKGjOGA%3d&risl=&pid=ImgRaw',
            'https://th.bing.com/th/id/OIP.y-FLq3UPm_cVkWKx_5moLQHaI9?pid=ImgDet&rs=1',
            'https://th.bing.com/th/id/R6ee230721b657faedc92a61e2a0f8be9?rik=vCl0EJ5%2fOThOKA&pid=ImgRaw',
            'https://th.bing.com/th/id/R26338c80fee5f7edf86e8dece9f36f58?rik=3ei3m0O4jwbNwQ&pid=ImgRaw',
            'https://th.bing.com/th/id/R8f28955f4dd7544f413499ed230a9936?rik=AtF4%2fVdmpg1bxg&pid=ImgRaw',
            'https://th.bing.com/th/id/R33208dccd082fbc7c7b045042bf5da6c?rik=CN%2b6qBOAbfp7%2bA&pid=ImgRaw',
            'https://th.bing.com/th/id/R6df39e146e0aef62008d7d57ac2837cf?rik=0lCJlyoWjzM7Hg&riu=http%3a%2f%2fpetawilliams.com%2fusability%2fcharlie-brown-and-snoopy-hugging-841.jpg&ehk=JY4%2fIGF6%2bf57L5xQp2OtvGWfm7kxNkE2C6cB6gKYaZs%3d&risl=&pid=ImgRaw',
        ]

        const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
        let randomLinks = links[Math.floor(Math.random() * links.length)];
        const randomNumber = Math.floor(Math.random() * 100) + 1;

        const newEmbed = new Discord.MessageEmbed()
            .setTimestamp()
            .setImage(`${randomLinks}`)
            .setColor('#c30202')
            .setTitle(`${user.username} Was Hugged!`)
            .setDescription(`**${user.username}** Was Hugged By **${message.author.username}** And Now **${user.username}** Is **${randomNumber}%** Happy!`)
        message.lineReplyNoMention(newEmbed);
    }
}