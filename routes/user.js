import { Router } from "express";
const router = Router();
import { testUser, register, login } from "../controllers/user.js";
import { ensureAuth } from "../middlewares/auth.js";

// Definir las rutas
router.get('/test-user', ensureAuth, testUser);
router.post('/register', register);
router.post('/login', login);

// Exportar el Router
export default router;