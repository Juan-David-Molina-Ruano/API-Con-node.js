const express = require('express');
const router = express.Router();
const productoController = require('../controllers/ProductoJDMRController');

router.get('/', productoController.obtenerProductos);
router.get('/:id', productoController.obtenerProductoId);
router.post('/', productoController.crearProducto);
router.put('/:id', productoController.actualizarProducto);
router.delete('/:id', productoController.eliminarProducto);

module.exports = router;