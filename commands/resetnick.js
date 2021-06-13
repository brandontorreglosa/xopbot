module.exports = {
    name: "resetnick",
    permissions: ["MANAGE_NICKNAMES"],
    async execute(client, message, cmd, args, Discord) {
      const member = message.mentions.members.first();
  
      if (!member) return message.reply("Please specify a member!");
  
      try {
        member.setNickname(null);
      } catch (err) {
        message.reply(
          "I do not have permission to reset " + member.toString() + " nickname!"
        );
      }
    },
  };