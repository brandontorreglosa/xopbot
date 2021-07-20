// module.exports = {
//     name: '2play',
//     permissions: ["CONNECT", "SPEAK"],
//     aliases: ['2skip', '2stop'],
//     category: 'Music',
//     utilisation: '{prefix}play [name/URL]',
//     async execute(client, message, cmd, args, Discord) {
//         if (cmd === '2play') {
//             if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

//             if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

//             if (!args[0]) return message.channel.send(`${client.emotes.error} - Please indicate the title of a song !`);

//             client.player.play(message, args.join(" "), { firstResult: true });
//         }

//         else if (cmd === '2skip') {
//             if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

//             if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

//             if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music currently playing !`);

//             const success = client.player.skip(message);

//             if (success) message.channel.send(`${client.emotes.success} - The current music has just been **skipped** !`);
//         }

//         else if (cmd === '2stop') {
//             if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

//             if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

//             if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music currently playing !`);

//             client.player.setRepeatMode(message, false);
//             const success = client.player.stop(message);

//             if (success) message.channel.send(`${client.emotes.success} - Music **stopped** into this server !`);
//         }
//     }
// };