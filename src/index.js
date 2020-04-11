const env = require("../env.json");
const Discord = require("discord.js");
const log = require("loglevel");

const utils = require("./helpers/utils");
const crawler = require("./crawler");

const client = new Discord.Client();
log.setLevel(env.loglevel);

client.on("ready", () => {
  utils.botSpeak("dino bot ON.");
});

// routing commands
client.on("message", (msg) => {
  // !random
  if (msg.content === "!random") {
    dino = crawler.getRandomDino();
    msg.reply(dino.name, { 
      files: [dino.img_src] 
    });
  }
  // add others
});

// logs in
client.login(env.botToken);

// https://discordapp.com/oauth2/authorize?&client_id=698349668479795241&scope=bot&permissions=8
