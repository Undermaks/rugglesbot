const Discord = require('discord.js');
const bot = new Discord.Client();
var prefix ="*"

bot.on('ready', () => {
  console.log('Запустился!');
});

bot.on('ready', () => {
    bot.user.setStatus('available') // Can be 'available', 'idle', 'dnd', or 'invisible'
    bot.user.setPresence({
        game: {
            name: ("twitch.tv/rugglesov | *help"),
            type: 3
        }
    });

  bot.on('ready', ()  => {
let channel = bot.channels.get("650447242381099018")
if(bot.users.size >  0){
channel.edit({ name: "Количество челов:"+ guild.members.size})
  }
});
  
  
  
 if (msg.content.startsWith(prefix + 'ping')){
      let embed = new Discord.RichEmbed()
    .setTitle('')
    .setDescription('Pong\🏓 | Мой пинг '+ Math.round(bot.ping)+ ' ms!')
    .setColor('0x2c69d3')
      msg.channel.send({embed})
    }
}); 
  
  
});
//Ниже не трогать!
bot.login(process.env.BOT_TOKEN);
