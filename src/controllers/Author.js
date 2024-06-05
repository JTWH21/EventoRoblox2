const db = require("../db/models")
const model = require("../db/models/author")(db.sequelize, db.Sequelize)

module.exports.GetAuthors = async () => {
    const response = await model.findAll();
    return response;
}

module.exports.CreateAuthor = async (data) => {
    const res = await model.create({
        name: data.name,
        identification: data.identification,
        age: data.age
    });
    return res;
}

module.exports.DeleteAuthor = async (id) => {
    // Codigo para eliminar
}