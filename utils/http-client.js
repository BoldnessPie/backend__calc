import axios from "axios";
import ApiError from "../middleware/api-errors.js";

export async function fetchData(urls) {
  try {
    const responses = await Promise.all(
      urls.map(url => axios.get(url))
    );
    return responses.map(response => response.data);

  } catch (error) {
    throw new ApiError(`Failed to fetch data: ${error.message}`, 500);
  }
}