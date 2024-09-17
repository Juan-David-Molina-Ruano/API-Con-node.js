const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/dbJDMR16092024')
  .then(() => console.log('Conexión con la base de datos establecida'))
  .catch((err) => console.log('Error de conexión con MongoDB: ', err));
