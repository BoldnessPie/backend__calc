import * as cheerio from "cheerio";

const SELECTORS = {
  pipes: {
    rows: ".catalogTable #grid_tab tr",
    name: ".refstr._nm",
    size: "._razmer", 
    price: '[data-price-val="2"]'
  },
  sheets: {
    rows: ".catalogTable #grid_tab tr",
    name: ".refstr._nm",
    size: "._razmer",
    price: ".no14001._ost"
  }
};

function parseItems($page, selectors) {
  const items = [];
  $page(selectors.rows).each((i, row) => {
    const $row = $page(row);
    items.push({
      name: $row.find(selectors.name).text().trim(),
      size: $row.find(selectors.size).text().trim(),
      price: $row.find(selectors.price).text().trim(),
    });
  });
  return items;
}

export function parsePipes(html) {
  const $page = cheerio.load(html);
  return parseItems($page, SELECTORS.pipes);
}

export function parseSheets(html) {
  const $page = cheerio.load(html);
  return parseItems($page, SELECTORS.sheets);
}