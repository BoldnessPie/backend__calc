import dotenv from "dotenv";
import ApiError from "../middleware/api-errors.js";
import { getCurPrice } from "../utils/functions.js";
import { fetchData } from "../utils/http-client.js";
import { parsePipes, parseSheets } from "../utils/parser.js";

dotenv.config();

export default async function fetch(pipeSize, sheetSize) {
  try {
    const urls = [process.env.URL__PIPES, process.env.URL__SHEETS];
    const [pipesHtml, sheetsHtml] = await fetchData(urls);

    const pipes = parsePipes(pipesHtml);
    const sheets = parseSheets(sheetsHtml);

    const pipe = getCurPrice(pipes, pipeSize);
    const sheet = getCurPrice(sheets, sheetSize);

    return { pipe, sheet };

  } catch (error) {
    throw new ApiError(`Parse service error: ${error.message}`, 500);
  }
}



