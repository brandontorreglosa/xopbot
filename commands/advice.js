const { random } = require("something-random-on-discord")


module.exports = {
  name: "advice",
  permissions: ["SEND_MESSAGES"],
  category: "fun",
  description: "Get some advice",
  async execute(client, message, cmd, args, Discord) {
    
    let data = await random.getAdvice()
    message.channel.send(data)
    
  }
}