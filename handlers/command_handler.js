const fs = require('fs');

module.exports = (client, Discord) => {

    const command_folders = fs.readdirSync("./COMMANDS")

    for (const folder of command_folders) {
        const command_files = fs.readdirSync(`./COMMANDS/${folder}`).filter(file => file.endsWith('.js'));

        for (const file of command_files) {
            const command = require(`../COMMANDS/${folder}/${file}`);
            if (command.name) {
                client.commands.set(command.name, command);
            } else {
                continue;
            }
        }
    }
}