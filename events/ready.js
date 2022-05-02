// const { REST } = require("@discordjs/rest");
// const { Routes } = require("discord-api-types/v9");
// require("dotenv").config();

// module.exports = {
// 	name: "ready",
// 	once: true,
// 	execute(client, commands) {
// 		console.log("Slash commands went through");

// 		const CLIENT_ID = client.user.id;
//         const GUILD_ID = 707557478254247936;
// 		const rest = new REST({
// 			version: "9",
// 		}).setToken(process.env.token);

// 		(async () => {
// 			try {
// 				if (process.env.ENV === "production") {
// 					await rest.put(Routes.applicationCommands(CLIENT_ID), {
// 						body: commands,
// 					});
// 					console.log("Successfully registered commands globally.");
// 				} else {
// 					await rest.put(
// 						Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
// 						{
// 							body: commands,
// 						}
// 					);
// 					console.log("Successfully registered commands locally.");
// 				}
// 			} catch (err) {
// 				if (err) console.error(err);
// 			}
// 		})();
// 	},
// };