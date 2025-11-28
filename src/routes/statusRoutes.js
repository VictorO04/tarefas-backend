import * as statusController from "../controllers/statusController.js";
import { Router } from "express";

const router = Router();

router.get("/", statusController.getAllStatus);

export default router;