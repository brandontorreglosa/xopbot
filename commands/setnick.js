module.exports = {
    name: "setnick",
    aliases: ['setnickname'],
    permissions: ["MANAGE_NICKNAMES"],
    async execute(client, message, cmd, args, Discord)  {
      const member = message.mentions.members.first();
  
      if (!member) return message.reply("Please specify a member!");
  
      const arguments = args.slice(1).join(" ");
  
      if (!arguments) return message.reply("Please specify a nickname!");
  
      try {
        member.setNickname(arguments);
      } catch (err) {
        console.log(err);
        message.reply(
          "I do not have permission to set " + member.toString() + " nickname!"
        );
      }
    },
  };