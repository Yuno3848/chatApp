import { Router } from "express";
import { getMessage, sendMessage } from "../controllers/message.controllers.js";
import { isLogged } from "../middleware/authMid.middlewares.js";

const router = Router();
router.post("/send/:id", isLogged, sendMessage);
router.get("/get-message/:id", isLogged, getMessage);
export default router;
