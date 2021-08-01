const client = require("../../main");

client.on("guildMemberUpdate", (oldMember, newMember) => {
    const oldStatus = oldMember.premiumSince;
    const newStatus = newMember.premiumSince;

    if (!oldStatus && newstatus) {
        client.channels.cache
            .get("870540738025369610")
            .send(`**${newMember.username} Has Boosted The Server!**`)

        newMember.send('**👑HACKERPROᵈᵉᵛ#1498 Thanks You For Boosting!**')
    }

    if (oldStatus && !newStatus) {
        client.channels.cache
            .get("870540738025369610")
            .send(`**${newMember.username} Freaking Unboosted The Server!**`)
    }
});