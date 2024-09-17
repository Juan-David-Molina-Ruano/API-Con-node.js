const producto = require('../models/ProductoJDMR');

exports.obtenerProductos = async (req, res) => {
    try {
        const productos = await producto.find();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los productos' });
    }
};

// Obtener un producto por su ID
exports.obtenerProductoId = async (req, res) => {
    try {
        const productoid = await producto.findById(req.params.id);
        if (!productoid) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        res.json(productoid);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el producto' });
    }
};

// Crear un nuevo producto
exports.crearProducto = async (req, res) => {
    try {
        const nuevoProducto = new producto(req.body);
        const productoGuardado = await nuevoProducto.save();
        res.status(201).json(productoGuardado);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el Producto' });
    }
};

// Actualizar un producto existente
exports.actualizarProducto = async (req, res) => {
    try {
        const productoActualizado = await producto.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!productoActualizado) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        res.json(productoActualizado);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el producto' });
    }
};


// Eliminar un producto existente
exports.eliminarProducto = async (req, res) => {
    try {
        const productoEliminado = await producto.findByIdAndDelete(req.params.id);
        if (!productoEliminado) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        res.json({ message: 'Producto eliminado correctamente' });
    } catch (error) {
        console.error(error); 
        res.status(500).json({ error: 'Error al eliminar el Producto' });
    }
};