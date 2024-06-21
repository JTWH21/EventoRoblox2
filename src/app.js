require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.APP_PORT || 3000; // Definición del puerto, usando 3000 como valor por defecto si no está definido en el archivo .env

app.use(express.json());

const routes = require('./routes');

// Aquí se definen las rutas para cada recurso
app.use("/api/usuarios-evento", routes.UsuarioEventoRoutes);
app.use("/api/registros", routes.RegistroEventoRoutes);
app.use("/api/eventos", routes.JoinEventRoutes);

// Escuchando en el puerto definido
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
