const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    database: 'biblioteca',
    username: 'odoo',
    password: 'odoo'
  });


  const Autor = sequelize.define("autor",{
    nombre: DataTypes.STRING,
    cedula: DataTypes.STRING,
    edad: DataTypes.INTEGER
  }, {
    tableName: "autores",
  })

  Autor.sync();


module.exports.Autor = Autor
