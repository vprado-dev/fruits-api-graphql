import { Router } from "express";
import { statusGet } from "../endpoint/status";
import { auth } from "../middlewares/auth";

const router = Router();

router.get("/status", auth, statusGet);

export default router;
