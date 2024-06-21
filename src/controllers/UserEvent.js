// controllers/UserEvent.js
const UsuarioEvento = require('../models/UsuarioEvento');

async function CreateUsuarioEvento(data) {
  return await UsuarioEvento.create(data);
}

async function GetUsuariosEvento() {
  return await UsuarioEvento.findAll();
}

async function GetUsuarioEventoById(id) {
  return await UsuarioEvento.findByPk(id);
}

async function UpdateUsuarioEvento(id, data) {
  const usuarioEvento = await UsuarioEvento.findByPk(id);
  if (!usuarioEvento) {
    throw new Error('Usuario evento no encontrado');
  }
  await usuarioEvento.update(data);
  return usuarioEvento;
}

async function DeleteUsuarioEvento(id) {
  const usuarioEvento = await UsuarioEvento.findByPk(id);
  if (!usuarioEvento) {
    throw new Error('Usuario evento no encontrado');
  }
  await usuarioEvento.destroy();
}

module.exports = {
  CreateUsuarioEvento,
  GetUsuariosEvento,
  GetUsuarioEventoById,
  UpdateUsuarioEvento,
  DeleteUsuarioEvento
};
