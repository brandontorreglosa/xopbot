// module.exports = async (client) =>{
//     const guild = client.guilds.cache.get('707557478254247936');
//     setInterval(() =>{
//         const memberCount = guild.memberCount;
//         const channel = guild.channels.cache.get('828322456992743446');
//         channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
//         console.log('Updating Member Count');
//     }, 5000);
// }