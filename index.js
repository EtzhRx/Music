const Discord = require("discord.js");
const bot = new Discord.Client();

let prefix = "! ";
client.on("message", (message) => {
  
  if (!message.content.startsWith(prefix) || message.author.bot) return;
 
  if (message.content.startsWith(prefix + "aw1")) {
    message.channel.send("aw1 juga");
  } else
   
  if (message.content.startsWith(prefix + "aw2")) {
    message.channel.send("aw2 juga");
  }
   
  if (message.content.startsWith(prefix + "aw3")) {
    message.channel.send("aw3 juga");
  }

});
      
bot.login('NTEwNjk2ODYyNjA1NTA4NjA5.DsgHOw.Qi2dm-2PvOLJF3hD0VCXJeOjfaU');
