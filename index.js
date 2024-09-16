import express from "express";
import connection from "./database/connection.js";
import bodyParser from "body-parser";
import cors from "cors";
import UserRoutes from "./routes/user.js";
import PublicationRoutes from "./routes/publication.js";
import FollowRoutes from "./routes/follow.js";
import fs from 'fs';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// Obtener __dirname en un entorno ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Crear directorios si no existen
const avatarsDir = path.join(__dirname, 'uploads', 'avatars');
const publicationsDir = path.join(__dirname, 'uploads', 'publications');

if (!fs.existsSync(avatarsDir)) {
  fs.mkdirSync(avatarsDir, { recursive: true });
  console.log('Directorio avatars creado');
}

if (!fs.existsSync(publicationsDir)) {
  fs.mkdirSync(publicationsDir, { recursive: true });
  console.log('Directorio publications creado');
}

// Mensaje de bienvenida para verificar que ejecutó bien la API de Node
console.log("API Node en ejecución");

// Conexión a la BD
connection();

// Crear el servidor de Node
const app = express();
const puerto = process.env.PORT || 3900;

// Configurar cors para hacer las peticiones correctamente
app.use(cors({
  origin: '*', // Permitir solicitudes desde cualquier origen
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
  preflightContinue: false,
  optionsSuccessStatus: 204
}));

// Decodificar los datos desde los formularios para convertirlos en objetos JS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar rutas del aplicativo
app.use('/api/user', UserRoutes);
app.use('/api/publication', PublicationRoutes);
app.use('/api/follow', FollowRoutes);

// Configuración para servir archivos estáticos (imágenes de avatar)
app.use('/uploads/avatars', express.static(path.join(__dirname, 'uploads', 'avatars')));

// Configuración para servir archivos estáticos (imágenes de publicaciones)
app.use('/uploads/publications', express.static(path.join(__dirname, 'uploads', 'publications')));

// Configurar el servidor Node
app.listen(puerto, () => {
  console.log("Servidor de Node ejecutándose en el puerto", puerto);
});

export default app;