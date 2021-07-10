const guildNumber = new Map();
const guildAttempts = new Map();

function guildNumberMap(message) {
    const guildId = message.guild.id;

    var number = Math.floor(Math.random() * 20000) + 1;
    // If there is no command running map for the guild, create one
    if (!guildNumber.get(guildId)) {
        guildNumber.set(guildId, number);
    }
}

function guildAttemptsMap(message) {
    const guildId = message.guild.id;
    // If there is no command running map for the guild, create one
    if (!guildAttempts.get(guildId)) {
        guildAttempts.set(guildId, { attempts: 1 });
    } else {
        guildAttempts.get(guildId).attempts++;
    }
}

module.exports = {
    name: "guessthenumber",
    aliases: ['gtn', 'guess'],
    permissions: ["SEND_MESSAGES"],
    cooldown: 1,
    category: "games",
    description: {
        usage: 'guesseasy <guesseasy number>',
        content: "Try and guess the number!",
    },
    async execute(client, message, cmd, args, Discord) {
        const { member, channel, guild } = message;

        const provideaguess = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#c30202')
            .setDescription(`**❌ Please provide a guess!**`)

        const pickinganumber = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#c30202')
            .setDescription('**Picking a number between 1 and 20000**')



        await guildNumberMap(message);
        await guildAttemptsMap(message);

        let guess = args[0];
        if (!guess && guildAttempts.get(guild.id).attempts === 1) {
            return channel.send(pickinganumber)
        } else if (!guess) {
            return channel.send(provideaguess);
        }

        if (+guess === guildNumber.get(guild.id)) {
            let attempts = guildAttempts.get(guild.id);

            const guessedthenumber = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#00ff00')
                .setDescription(`**✅ Perfect, <@${member.id}> The Number Was ${guildNumber.get(guild.id)}, It Only Took You ${attempts.attempts} Attempts!**`)

            channel.send(guessedthenumber);
            guildNumber.delete(guild.id);
            guildAttempts.delete(guild.id);


            return;
        } else if (+ guess < guildNumber.get(guild.id)) {
            return message.reply(`**${guess} Is Too Low!**`);
        } else if (+guess > guildNumber.get(guild.id)) {
            return message.reply(`**${guess} Is Too High!**`);
        } else {
            return message.reply("***Invalid Number Please Try Again***");
        }
    },
};