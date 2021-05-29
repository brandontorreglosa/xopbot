async function chatBot(message, input, uuid = 0101) {
    if (!message)
        throw new ReferenceError('reconlx => "message" is not defined');
    if (!input) throw new ReferenceError('reconlx => "input" is not defined');
    const fetch = require("node-fetch");
    fetch(
        `https://api.monkedev.com/fun/chat?msg=${encodeURIComponent(
            input
        )}&uid=${uuid}`
    )
        .then((res) => res.json())
        .then(async (json) => {
            return message.reply(json.response);
        });
}
module.exports = chatBot;
