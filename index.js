const Discord = require('discord.js');
const client = new Discord.Client();
const token = '';

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === '!짖어') {
    message.reply('멍!!!!!!!!!!!!!!!!!!');
  }
});

client.on('message', (message) => {
  if(message.content === '!앉아') {
    message.reply('(강아지는 앉았다.)');
  }
});

client.on('message', (message) => {
  if(message.content === '!업드려') {
    message.reply('(강아지는 업드렸다.)');
  }
});

client.on('message', (message) => {
  if(message.content === '!빵') {
    message.reply('(강아지는 뒤로 누웠다.)');
  }
});

client.login('NzQ5NTM4MTM0NjY0MTUxMDQw.X0tbyQ.i62oYHI0hBMdUxOiYl8L7Qj35RQ');
