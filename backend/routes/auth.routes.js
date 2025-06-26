import { Router } from "express";
import { signup, login, logout } from "../controllers/auth.controllers.js";
import { upload } from "../middleware/multer.middleware.js";
import { isLogged } from "../middleware/authMid.middlewares.js";

const router = Router();

router.post("/signup", upload.single("avatar"), signup);
router.post("/login", login);
router.get("/logout", isLogged, logout);
export default router;
