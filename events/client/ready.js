module.exports = (Discord, client) => {
    console.log('XOPBOT Is Online!');
    client.user.setPresence({ status: 'dnd' })

    const activities = [
        `${client.guilds.cache.size} Servers`,
        `${client.channels.cache.size} Channels`,
        `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} Users`,
        '👑HACKERPROᵈᵉᵛ#1498 Made This Bot',
        'https://www.xopbot.tk/',
        '150+ Commands',
        '24/7 Always'
    ];

    let i = 0;
    setInterval(() => client.user.setActivity(`x!help | ${activities[i++ % activities.length]}`, { type: 'LISTENING' }), 10000);
}