const chalk = require("chalk");
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

module.exports = {
  botSpeak: (message) => {
    console.log(chalk.redBright(message));
  },
  getHtml(url) {
    let request = new XMLHttpRequest();
    request.open('GET', url, false);  // `false` makes the request synchronous
    request.send(null);
    return request.responseText;
  },
};
