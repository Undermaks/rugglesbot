const Discord = require('discord.js');
const bot = new Discord.Client();
var prefix ="*"

bot.on('ready', () => {
  console.log('Запустился!');
});

bot.on('ready', () => {
  
  
});
//Ниже не трогать!
bot.login(process.env.BOT_TOKEN);
