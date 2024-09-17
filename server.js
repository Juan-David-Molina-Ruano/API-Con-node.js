const express = require('express');
const bodyParser = require('body-parser');
const productoRoutes = require('./src/routes/ProductoJDMRRoutes');
const database = require('./src/config/database');

const app = express();
const PORT = 3000;

// Middleware para analizar el cuerpo de las solicitudes en formato JSON
app.use(bodyParser.json());

// Rutas de la API
app.use('/productos', productoRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});