//const memberCounter = require('./counters/member-counter');

module.exports = (Discord, client) => {
    console.log('XOPBOT Is Online!');
    client.user.setPresence({ status: 'dnd' })
   // memberCounter(client)

    const activities = [
        `${client.guilds.cache.size} Servers`,
        `${client.channels.cache.size} Channels`,
        `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} Users`,
        'https://xopbot-gg.glitch.me/',
        '👑HACKERPROᵈᵉᵛ#1498 Made This Bot',
        '24/7 Always'
    ];

   let i = 0;
   setInterval(() => client.user.setActivity(`x!help | ${activities[i ++ % activities.length]}`, {type: 'LISTENING'}), 11000);
}