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
  // !dino
  if (msg.content === "!dino") {
    dino = crawler.getRandomDino();
    msg.reply(dino.message, { 
      files: [dino.img_src] 
    });
  }
});

// logs in
client.login(env.botToken);
