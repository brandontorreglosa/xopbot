const GiveawayModel = require('../models/GiveawayModel');

class Giveaway {
    /**
     *
     * @param {Giveaway} options - Options for giveaway.
     */

    constructor(options) {
        this.prize = options.prize;

        this.endsOn = options.endsOn;

        this.guildId = options.guildId;

        this.channelId = options.channelId;

        this.hostedBy = options.hostedBy;

        this.messageId = options.messageId;

        this.startsOn = options.startsOn;

        this.winners = options.winners;

        this.hasEnded = 'False';

        this.duration = options.duration;

        const newGiveaway = new GiveawayModel({
            prize: this.prize,
            endsOn: this.endsOn,
            guildId: this.guildId,
            channelId: this.channelId,
            hostedBy: this.hostedBy,
            messageId: this.messageId,
            startsOn: this.startsOn,
            winners: this.winners,
            hasEnded: this.hasEnded,
            duration: this.duration
        });

        newGiveaway.save();
    }
}

module.exports = Giveaway;