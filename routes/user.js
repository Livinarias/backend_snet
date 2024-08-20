import { Router } from "express";
const router = Router();
import { testUser, register, login } from "../controllers/user.js";

// Definir las rutas
router.get('/test-user', testUser);
router.post('/register', register);
router.post('/login', login);

// Exportar el Router
export default router;