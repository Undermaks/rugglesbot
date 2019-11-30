const Discord = require('discord.js');
const bot = new Discord.Client();
var prefix ="*"

bot.on('ready', () => {
  console.log('Запустился!');
});

bot.on('ready', () => {
  // Выше не трогать
  
  bot.on('ready', () => {
    bot.user.setStatus('available') // Can be 'available', 'idle', 'dnd', or 'invisible'
    bot.user.setPresence({
        game: {
            name: ("vk.com/ruggles1337 | *help"),
            type: 3
        }
    });
});
  
  
  
  
  
  
  
  
  
  
});
//Ниже не трогать!
bot.login(process.env.BOT_TOKEN);
