module.exports = {
    name: 'setup',
    aliases: ['close', 'open'],
    permissions: ["SEND_MESSAGES"],
    async execute(client, message, cmd, args, Discord) {
        client.on("channelDelete", (channel) => {
            if (channel.parentID == channel.guild.channels.cache.find((x) => x.name == "MODMAIL").id) {
                const person = channel.guild.members.cache.find((x) => x.id == channel.name)

                if (!person) return;

                const yembed1 = new Discord.MessageEmbed()
                    .setAuthor("MAIL DELETED", client.user.displayAvatarURL())
                    .setColor('RED')
                    .setThumbnail(client.user.displayAvatarURL())
                    .setDescription("Your mail is deleted by moderator and if you have any problem with that than you can open mail again by sending message here.")
                return person.send(yembed1)

            }

        })

        if (message.guild) {

            if (cmd == "setup") {
                if (!message.member.permissions.has("ADMINISTRATOR")) {
                    return message.reply({ content: "**You Need Admin Permissions To Setup XOPBOT Modmail System!**", allowedMentions: { repliedUser: true } })
                }

                if (!message.guild.me.permissions.has("ADMINISTRATOR")) {
                    return message.reply({ content: "**I Need Admin Permissions To Setup The Modmail System!**", allowedMentions: { repliedUser: true } })
                }


                const role = message.guild.roles.cache.find(role => role.name == "SUPPORTER")
                const everyone = message.guild.roles.cache.find(role => role.name == "@everyone")
                const member1234 = message.author;

                if (!role) {
                    role = await message.guild.roles.create({
                        data: {
                            name: "SUPPORTER",
                            color: "GREEN",
                        }
                    }).catch(err => console.log(err));
                    role = message.guild.roles.cache.find(role => role.name == "SUPPORTER");
                    if (message.member.roles.cache.has(role.id)) return;
                    else await member1234.roles.add(role.id);
                }

                await message.guild.channels.create("MODMAIL", {
                    type: "category",
                    topic: "All the mail will be here :D",
                    permissionOverwrites: [{
                        id: role.id,
                        allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"]
                    },
                    {
                        id: everyone.id,
                        deny: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"]
                    }
                    ]
                })


                return message.channel.send({ content: "**Setup is Completed 😆**" })

            } else if (cmd == "open") {
                const category = message.guild.channels.cache.find((x) => x.name == "MODMAIL")

                if (!category) {
                    return message.channel.send({ content: "**XOPBOT ModMail System Not Setup In This Server, Do `(prefix)setup`**" })
                }

                if (!message.member.roles.cache.find((x) => x.name == "SUPPORTER")) {
                    return message.channel.send({ content: "**You Need Supporter Role To Use This Command**" })
                }

                if (isNaN(args[0]) || !args.length) {
                    return message.channel.send({ content: "**Please Give The ID Of The User!**" })
                }

                const target = message.guild.members.cache.find((x) => x.id === args[0])

                if (!target) {
                    return message.channel.send({ content: "**Unable To Find This User!.**" })
                }

                const channel = await message.guild.channels.create(target.id, {
                    type: "text",
                    parent: category.id,
                    topic: "ModMail is Direct Opened By **" + message.author.username + "** To Make Contact With " + message.author.tag,
                })

                const nembed = new Discord.MessageEmbed()
                    .setAuthor("DETAILS", target.user.displayAvatarURL({
                        dynamic: true
                    }))
                    .setColor("#c30202")
                    .setThumbnail(target.user.displayAvatarURL({
                        dynamic: true
                    }))
                    .setDescription(message.content)
                    .addField("**Name**", target.user.username)
                    .addField("**Account Creation Date**", target.user.createdAt)
                    .addField("**Direct Contact**", "`True`");

                channel.send(nembed)

                let uembed = new Discord.MessageEmbed()
                    .setAuthor("DIRECT MAIL OPENED")
                    .setColor("GREEN")
                    .setThumbnail(client.user.displayAvatarURL())
                    .setDescription("You have been contacted by Supporter of **" + message.guild.name + "**, Please wait Until He message You!");


                target.send(uembed);

                let newEmbed = new Discord.MessageEmbed()
                    .setDescription("Opened The Mail: <#" + channel + ">")
                    .setColor("GREEN");

                return message.channel.send(newEmbed);
            }

        } else if (cmd === "close") {


            if (message.channel.parentID == message.guild.channels.cache.find((x) => x.name == "MODMAIL").id) {

                const person = message.guild.members.cache.get(message.channel.name)

                if (!person) {
                    return message.channel.send({ content: "**I Am Unable To Close The Channel! Probaly Channel Name Is Changed.**" })
                }

                await message.channel.delete()

                const yembed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setAuthor("MAIL CLOSED", client.user.displayAvatarURL())
                    .setColor("#c30202")
                    .setThumbnail(client.user.displayAvatarURL())
                    .setFooter("Mail Was Closed By" + message.author.username)
                if (args[0]) yembed.setDescription(args.join(" "))

                return person.send(yembed)

            }
        }

        if (message.channel.parentID) {

            const category = message.guild.channels.cache.find((x) => x.name == "MODMAIL")
            if (!category) return;

            if (message.channel.parentID == category.id) {
                let member = message.guild.members.cache.get(message.channel.name)

                if (!member) return message.channel.send({ content: '**Unable To Send Message!**' })

                const lembed = new Discord.MessageEmbed()
                    .setColor("GREEN")
                    .setFooter(message.author.username, message.author.displayAvatarURL({
                        dynamic: true
                    }))
                    .setDescription(message.content)

                return member.send(lembed)
            }


        }

        if (!message.guild) {
            const guild = await client.guilds.cache.get(ServerID) || await client.guilds.fetch(ServerID).catch(m => { })
            if (!guild || !guild.members.cache.some(x => x.id === message.author.id)) return;

            const category = guild.channels.cache.find((x) => x.name == "MODMAIL")
            if (!category) return;
            const main = guild.channels.cache.find((x) => x.name == message.author.id)


            if (!main) {
                const mx = await guild.channels.create(message.author.id, {
                    type: "text",
                    parent: category.id,
                    topic: "This Mail Was Created For Helping  **" + message.author.tag + " **"
                })

                const sembed = new Discord.MessageEmbed()
                    .setAuthor("MAIN OPENED")
                    .setColor("GREEN")
                    .setThumbnail(client.user.displayAvatarURL())
                    .setDescription("Conversation Is now started, You Will Be Contacted By Supporters Soon :D")

                message.author.send(sembed)


                const eembed = new Discord.MessageEmbed()
                    .setAuthor("DETAILS", message.author.displayAvatarURL({
                        dynamic: true
                    }))
                    .setColor("#c30202")
                    .setThumbnail(message.author.displayAvatarURL({
                        dynamic: true
                    }))
                    .setDescription(message.content)
                    .addField("**Name**", message.author.username)
                    .addField("**Account Creation Date**", message.author.createdAt)
                    .addField("Direct Contact", "`False`")


                return mx.send(eembed)
            }

            const xembed = new Discord.MessageEmbed()
                .setColor("YELLOW")
                .setFooter(message.author.tag, message.author.displayAvatarURL({
                    dynamic: true
                }))
                .setDescription(message.content)


            main.send(xembed)

        }
    }
}