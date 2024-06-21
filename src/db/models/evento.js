// models/Evento.js
'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

class Evento extends Model {
  static associate(models) {
    // Definir asociaciones si las hay
  }
}

Evento.init({
  titulo: DataTypes.STRING,
  descripcion: DataTypes.STRING,
  fecha_inicio: DataTypes.DATE,
  fecha_fin: DataTypes.DATE,
  ubicacion: DataTypes.STRING,
  organizador_id: DataTypes.INTEGER
}, {
  sequelize,
  modelName: 'Evento',
});

module.exports = Evento;
