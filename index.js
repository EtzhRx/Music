const Discord = require("discord.js");
const bot = new Discord.Client();

let prefix = "! ";
bot.on("message", (message) => {
  
  if (!message.content.startsWith(prefix) || message.author.bot) return;
 
  if (message.content.startsWith(prefix + "aw1")) {
    message.channel.send("aw1 juga");
  } else
    
  if (message.content === '/join') {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
    } else {
      message.reply('You need to join a voice channel first!');
    }
   
  if (message.content.startsWith(prefix + "aw3")) {
    message.channel.send("aw3 juga");
  }

});

bot.login('NTEwNjk2ODYyNjA1NTA4NjA5.DsgHOw.Qi2dm-2PvOLJF3hD0VCXJeOjfaU');

