import { Router } from "express";
const router = Router();
import { register } from "../controllers/user.js";

// Definir las rutas
router.post('/register', register);

// Exportar el Router
export default router;