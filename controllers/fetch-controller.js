import fetch from "../services/fetch-service.js";
import { validation } from "../utils/validation.js";

class ParseController {
  async getCosts(req, res, next) {
    try {
      const { pipe, sheet } = req.query;
      validation(pipe, sheet);

      const prices = await fetch(pipe, sheet);
      res.json(prices);
      
    } catch (e) {
      next(e);
    }
  }
}

export default new ParseController();
