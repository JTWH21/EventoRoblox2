// models/UsuarioEvento.js
'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

class UsuarioEvento extends Model {
  static associate(models) {
    // Definir asociaciones si las hay
  }
}

UsuarioEvento.init({
  nombre: DataTypes.STRING,
  email: DataTypes.STRING,
  contraseña: DataTypes.STRING
}, {
  sequelize,
  modelName: 'UsuarioEvento',
});

module.exports = UsuarioEvento;
