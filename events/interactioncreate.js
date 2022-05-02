const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js")

const axios = require("axios");

const embed = MessageEmbed;
const component = MessageActionRow;
const button =  MessageButton;
module.exports = {
	name: "interactionCreate",
	once: false,
	async execute(interaction) {
		if (interaction.isCommand()) {
      const command = interaction.client.commands.get(interaction.commandName);

		if (!command) return;

		try {
			await command.execute(interaction);
		} catch (err) {
			if (err) console.error(err);

			await interaction.reply({
				content: "An error occurred while executing that command.",
				ephemeral: true,
			});
		}
    }	
	}
}