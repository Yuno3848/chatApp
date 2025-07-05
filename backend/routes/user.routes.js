import { Router } from "express";
import { isLogged } from "../middleware/authMid.middlewares.js";
import { getUserForSidebar } from "../controllers/user.controllers.js";

const router = Router();
router.get("/get-user-profile", isLogged, getUserForSidebar);
export default router;
