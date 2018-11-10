const Discord = require("discord.js");
const bot = new Discord.Client();
const connection = await message.member.voice.channel.join();

let prefix = "! ";
bot.on("message", (message) => {
  
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  
  
  if (message.contentstartsWith(prefix + "join")) {
    if (message.member.voice.channel) 
     else {
      message.reply('You need to join a voice channel first!');
    }
  }
});
  
  

bot.login('NTEwNjk2ODYyNjA1NTA4NjA5.DsgHOw.Qi2dm-2PvOLJF3hD0VCXJeOjfaU');

  
