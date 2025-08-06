import { Router } from "express";
import parseController from "../controllers/fetch-controller.js";

const router = Router();

router.get("/costs", parseController.getCosts);

export default router;
