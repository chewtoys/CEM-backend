import { Router } from "express";
import { auth } from "../middlewares/index.js";
import {getPastEvents} from "../controllers/homepage/index.js";

const router = Router();

// Event Management
router.get("/", getPastEvents);

export default router;