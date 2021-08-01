const fs = require('fs');

module.exports = (client, Discord) => {
    for (const folder of command_folders) {
        const command_files = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));

        for (const file of command_files) {
            const command = require(`../commands/${folder}/${file}`);
            if (command.name) {
                client.commands.set(command.name, command);
            } else {
                continue;
            }
        }
    }
}