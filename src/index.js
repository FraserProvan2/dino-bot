const crawler = require("./crawler");
const discord = require("discord.js");
const env = require("../env.json");
const log = require("loglevel");
const utils = require("./helpers/utils");

const client = new discord.Client();
log.setLevel(env.loglevel);

client.on("ready", () => {
  utils.botSpeak("dino bot ON.");
});

// routing commands
client.on("message", (msg) => {
  // !dino
  if (msg.content === "!dino") {
    log.debug("index.js: random dino requested");

    dino = crawler.getRandomDino();
    msg.reply(dino.message, {
      files: [dino.img_src],
    });
  }
  // !dino help
  if (msg.content === "!dino help") {
    log.debug("index.js: help requested");
    msg.reply("Run `!dino` to make a random dino appear");
  }
});

client.login(env.botToken);
