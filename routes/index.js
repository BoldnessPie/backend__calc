import { Router } from "express";
import parseController from "../controllers/fetch-controller.js";

const router = Router();

router.get("/costs", parseController.getCosts);
router.all("/costs", (req, res) => {
  res.status(405).json({ error: "Метод не поддерживается" });
});

export default router;
