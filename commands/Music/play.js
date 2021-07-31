const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');


const queue = new Map();

module.exports = {
    name: 'play',
    permissions: ["CONNECT", "SPEAK"],
    aliases: ['skip', 'stop', 'pause', 'unpause'],
    cooldown: 2,
    description: 'Advanced music bot',
    async execute(client, message, cmd, args, Discord) {

        const voice_channel = message.member.voice.channel;
        if (!voice_channel) return message.channel.send('***You Need To Be In A Voice Channel To Execute This Command!***');

        const server_queue = queue.get(message.guild.id);


        if (cmd === 'play') {
            if (!args.length) return message.channel.send('***You Need To Send The Second Argument!***');
            let song = {};


            if (ytdl.validateURL(args[0])) {
                const song_info = await ytdl.getInfo(args[0]);
                song = { title: song_info.videoDetails.title, url: song_info.videoDetails.video_url }
            } else {

                const video_finder = async (query) => {
                    const video_result = await ytSearch(query);
                    return (video_result.videos.length > 1) ? video_result.videos[0] : null;
                }

                const video = await video_finder(args.join(' '));
                if (video) {
                    song = { title: video.title, url: video.url }
                } else {
                    message.channel.send('***Error Finding Video.***');
                }
            }


            if (!server_queue) {

                const queue_constructor = {
                    voice_channel: voice_channel,
                    text_channel: message.channel,
                    connection: null,
                    songs: [],
                    //loopone: false,
                    //loopall: false,
                }


                queue.set(message.guild.id, queue_constructor);
                queue_constructor.songs.push(song);


                try {
                    const connection = await voice_channel.join();
                    queue_constructor.connection = connection;
                    video_player(message.guild, queue_constructor.songs[0]);
                } catch (err) {
                    queue.delete(message.guild.id);
                    message.channel.send('***There Was An Error Connecting!***');
                    throw err;
                }
            } else {
                server_queue.songs.push(song);
                return message.channel.send(`🎶 **${song.title}** Added To Queue!`);
            }
        }

        else if (cmd === 'skip') skip_song(message, server_queue);
        else if (cmd === 'stop') stop_song(message, server_queue);
        else if (cmd === 'pause') pause_song(message, server_queue);
        else if (cmd === 'unpause') unpause_song(message, server_queue);
        //else if(cmd === 'volume') volume_song(message, server_queue);
        // else if(cmd === 'loop') loop_song(args, server_queue);
    }

}

const video_player = async (guild, song) => {
    const song_queue = queue.get(guild.id);


    if (!song) {
        song_queue.voice_channel.leave();
        queue.delete(guild.id);
        return;
    }
    const stream = ytdl(song.url, { filter: 'audioonly' });
    song_queue.connection.play(stream, { seek: 0, volume: 0.5 })
        .on('finish', () => {
            song_queue.songs.shift();
            video_player(guild, song_queue.songs[0]);
        });
    await song_queue.text_channel.send(`🎶 Now Playing **${song.title}**`)
}

const skip_song = (message, server_queue) => {
    if (!message.member.voice.channel) return message.channel.send('***You Need To Be In A Voice Channel To Execute This Command!***');
    if (!server_queue) {
        return message.channel.send(`***There Are No Songs In Queue 🎶***`);
    }
    server_queue.connection.dispatcher.end();
}

const stop_song = (message, server_queue) => {
    if (!message.member.voice.channel) return message.channel.send('***You Need To Be In A Voice Channel To Execute This Command!***');
    server_queue.songs = [];
    server_queue.connection.dispatcher.end();
    message.channel.send("***XOPBOT Is Leaving Voice Channel 😭***")
}


const pause_song = (message, server_queue) => {
    if (server_queue.connection.dispatcher.paused) return message.channel.send("***Song Has Already Been Paused!***");
    server_queue.connection.dispatcher.pause();
    message.channel.send("***⏸ Paused The Music For You!***");
}


const unpause_song = (message, server_queue) => {
    if (!server_queue.connection.dispatcher.paused) return message.channel.send("***Song Isn't Paused Yet!***");
    server_queue.connection.dispatcher.resume();
    message.channel.send("***▶ Resumed The Music For You!***");
}

//   const volume_song = (message, server_queue) => {
//     if (!message.member.voice.channel) return message.channel.send('***You Need To Be In A Voice Channel To Execute This Command!***');
// 		//const serverQueue = message.client.queue.get(message.guild.id);
// 		//if (!server_queue) return message.channel.send('There is nothing playing.');
// 		if (!args[0]) return message.channel.send(`The current volume is: **${server_queue.volume}**`);
// 	    server_queue.volume = args;
// 		server_queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 5);
// 		return message.channel.send(`I Set The Volume To: **${args[0]}**`);
//   }

//   const loop_song = (message, server_queue) => {
//     if (!message.member.voice.channel) return message.channel.send('***You Need To Be In A Voice Channel To Execute This Command!***');
//     server_queue.songs = [];
//     server_queue.connection.dispatcher.loop();
//     message.channel.send("***Looped The Song!***");
//   }