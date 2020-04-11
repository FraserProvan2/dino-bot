const cheerio = require("cheerio");
const utils = require("./helpers/utils");
const nhm_dino_dict = "https://www.nhm.ac.uk/discover/dino-directory/name/name-az-all.html";

module.exports = {
  getRandomDino () {
    const dinos = getDinoDirectory();
    console.log(dinos);
  
    // pick a dino

    // format to response

    return {
      name: "**trex**\n big and scary",
      img_src:
      "https://cdn.britannica.com/83/211283-131-3DB62136/Tyrannosaurus-Rex-Struthiomimus-dinosaurs.jpg",
    };
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
