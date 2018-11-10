const Discord = require("discord.js");
const bot = new Discord.Client();

let prefix = ", ";
client.on("message", (message) => {
  
  if(message.content == 'prefix + hai') {
      message.reply('hai juga');
   }
  
  });
      
bot.login('NTEwNjk2ODYyNjA1NTA4NjA5.DsgHOw.Qi2dm-2PvOLJF3hD0VCXJeOjfaU');
