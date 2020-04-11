
const chalk = require('chalk');

module.exports = {
  botSpeak: (message) => {
    console.log(chalk.redBright(message));
  },
}