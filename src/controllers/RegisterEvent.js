// controllers/RegisterEvent.js
const RegistroEvento = require('../models/RegistroEvento');

async function CreateRegister(data) {
  return await RegistroEvento.create(data);
}

async function GetRegisters() {
  return await RegistroEvento.findAll();
}

async function DeleteRegister(id) {
  const registro = await RegistroEvento.findByPk(id);
  if (!registro) {
    throw new Error('Registro no encontrado');
  }
  await registro.destroy();
}

module.exports = {
  CreateRegister,
  GetRegisters,
  DeleteRegister
};
