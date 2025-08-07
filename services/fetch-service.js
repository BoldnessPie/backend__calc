import dotenv from "dotenv";
import ApiError from "../middleware/api-errors.js";
import { getCurPrice } from "../utils/functions.js";
import { fetchData } from "../utils/http-client.js";
import { parsePipes, parseSheets } from "../utils/parser.js";
import cache from "../utils/cache.js";

dotenv.config();

export default async function fetch(pipeSize, sheetSize) {
  try {
    const key = process.env.CACHE__KEY;
    const cachedResult = cache.get(key);
    let fetchedArr;

    if (cachedResult) {
      console.log("Данные взяты из кэша");
      fetchedArr = cachedResult;
    } else {
      console.log("Загружаем свежие данные");
      const urls = [process.env.URL__PIPES, process.env.URL__SHEETS];
      fetchedArr = await fetchData(urls);
      cache.set(key, fetchedArr);
    }

    const [pipesHtml, sheetsHtml] = fetchedArr;

    const pipes = parsePipes(pipesHtml);
    const sheets = parseSheets(sheetsHtml);

    const pipe = getCurPrice(pipes, pipeSize);
    const sheet = getCurPrice(sheets, sheetSize);

    const result = { pipe, sheet };
    return result;
  } catch (error) {
    throw new ApiError(`Parse service error: ${error.message}`, 500);
  }
}
