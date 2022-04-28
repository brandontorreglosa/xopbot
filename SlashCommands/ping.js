const fetch = require("node-fetch")
const { SlashCommandBuilder, SlashCommandStringOption } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with pong'),
   async execute(interaction) {
        interaction.reply({
            content: "Pong :D"
        })
}
};
