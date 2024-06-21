// models/registroevento.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class RegistroEvento extends Model {
    static associate(models) {
      // Aquí podrían definirse las asociaciones si es necesario
    }
  }

  RegistroEvento.init({
    evento_id: DataTypes.INTEGER,
    usuario_evento_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'RegistroEvento',
  });

  return RegistroEvento;
};
