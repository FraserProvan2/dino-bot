// import * as Discord from'discord.io';
// import * as Auth from '../auth.json';
import doo from 'ts-loader';
console.log(doo);

// console.log(Discord);

// Initialize Discord Bot
// let bot = new Discord.Client({
//     token: Auth.token,
//     autorun: true
// });
// bot.on('ready', function (evt) {
//  
// });

// // Take responses
// bot.on('message', function (user, userID, channelID, message, evt) {
//     // Our bot needs to know if it will execute a command 
//     // It will listen for messages that will start with `!`
//     if (message.substring(0, 1) == '!') {
//         var args = message.substring(1).split(' ');
//         var cmd = args[0];

//         args = args.splice(1);
//         switch (cmd) {
//             case 'ping': //!ping
//                 bot.sendMessage({
//                     to: channelID,
//                     message: 'pong'
//                 });
                
//                 break;
//             // Just add any case commands if you want to..
//         }
//     }
// });

// https://discordapp.com/oauth2/authorize?&client_id=698201873517379585&scope=bot&permissions=8
