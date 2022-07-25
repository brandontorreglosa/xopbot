module.exports = (Discord, client) => {
    console.log('XOPBOT Is Online!');
    client.user.setPresence({ status: 'dnd' })
    const activities = [
        `${client.guilds.cache.size} Servers`,
        `${client.channels.cache.size} Channels`,
        `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} Users`,
        'https://xopbot.glitch.me',
        '200+ Commands',
        '24/7 Uptime'
    ];
    let i = 0;
    setInterval(() => client.user.setActivity(`x!help | ${activities[i++ % activities.length]}`, { type: 'PLAYING' }), 10000);
}