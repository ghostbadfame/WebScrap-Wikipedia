const axios = require("axios");
const cheerio = require("cheerio");

const page_url =
  "https://en.wikipedia.org/wiki/List_of_states_and_union_territories_of_India_by_area";

async function getIndianStates() {
  const { data } = await axios.get(page_url);
  const $ = cheerio.load(data);
  const table = $("table.wikitable.sortable tbody");
  const states = [];
  table
    .find("tr")
    .slice(1, -1)
    .each((i, element) => {
      const $row = $(element);
      const state = {};
      const labels = ["Rank","Name","Area_Km2", "region", "national_share"];


        $row.find("td ").slice(0,-1).each((i,col)=>{
            
            const $col = $(col);
            let value = $col.text().trim()
            const numvalue = Number(value.replace(/,/g,' '));
            if(!isNaN(numvalue)){
                value = numvalue;
            }
            const label = labels[i];
            state[label] = value;
        });
      


      states.push(state);
    });
    return states;
}
module.exports = getIndianStates;
