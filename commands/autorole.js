const roleSchema = require("../models/autorole");

module.exports = {
    name: "autorole",
    description: "Change autorole per server!",
    cooldown: 20,
    permissions: ["MANAGE_ROLES"],
    usage: "!autorole <Role|off>",
    aliases: ["arsetup", "joinrole"],
    async execute(client, message, cmd, args, Discord) {
        if (!args[0]) {
            return message.channel.send(`**\`Usage: x!autorole <@role|off>\`**`);
        }
        if (message.mentions.roles.first()) {
            const data = await roleSchema.findOne({
                GuildID: message.guild.id,
            });

            if (data) {
                await roleSchema.findOneAndRemove({
                    GuildID: message.guild.id,
                });

                message.channel.send(`**Autorole Is Active And Role Set To ${message.mentions.roles.first()}!**`);

                let newData = new roleSchema({
                    Role: message.mentions.roles.first().id,
                    GuildID: message.guild.id,
                });
                newData.save();
            } else if (!data) {
                message.channel.send(`**Autorole Is Active And Role Set To ${message.mentions.roles.first()}!**`);

                let newData = new roleSchema({
                    Role: message.mentions.roles.first().id,
                    GuildID: message.guild.id,
                });
                newData.save();
            }
        } else if (args[0] === "off") {
            const data2 = await roleSchema.findOne({
                GuildID: message.guild.id,
            });

            if (data2) {
                await roleSchema.findOneAndRemove({
                    GuildID: message.guild.id,
                });

                return message.channel.send(`**Autorole Has Been Turned Off!**`);

            } else if (!data2) {
                return message.channel.send(`**Autorole Isn't Even Setup Bot!**`);
            }
        }
    },
};