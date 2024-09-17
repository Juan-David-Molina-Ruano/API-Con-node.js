const mongoose = require('mongoose');

const ProductoJDMRSchema = new mongoose.Schema({
    nombreJDMR: {
        type: String,
        required: true,
    },
    descripcionJDMR: {
        type: String,
        required: false,
    },
    precioJDMR: {
        type: mongoose.Decimal128,
        required: true,
    }
});

module.exports = mongoose.model('ProductoJDMR', ProductoJDMRSchema);