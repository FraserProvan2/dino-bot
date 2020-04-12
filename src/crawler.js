const cheerio = require("cheerio");
const log = require("loglevel");

const utils = require("./helpers/utils");
const nhm_dino_dict = "https://www.nhm.ac.uk/discover/dino-directory/name/name-az-all.html";
const nhm_dino_profile_endpoint = "https://www.nhm.ac.uk/discover/dino-directory/";

module.exports = {
  getRandomDino() {
    const dinos = getDinoDirectory();
    const selected_dino = dinos[Math.floor(Math.random() * dinos.length)];
    log.debug('getRandomDino(): selected ' + selected_dino);

    return getDinoDataAsMessage(selected_dino);
  },
};

function getDinoDirectory() {
  let html = utils.getHtml(nhm_dino_dict);
  let $ = cheerio.load(html);

  let dino_dict = [];
  $('p.dinosaurfilter--name').each((index, element) => {
    let dino_name = element.children[0].data.trim();
    dino_dict.push(dino_name);
  });

  return dino_dict;
}

function getDinoDataAsMessage(dino_name) {
  let html = utils.getHtml(nhm_dino_profile_endpoint + dino_name.toLowerCase() + ".html");
  let $ = cheerio.load(html);

  let dino_image_src = $('img.dinosaur--image').attr('src');
  let dino_url = "https://www.nhm.ac.uk/discover/dino-directory/" + dino_name.toLowerCase();
  
  return {
    message: dino_url,
    img_src: dino_image_src,
  }
}
