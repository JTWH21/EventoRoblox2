// controllers/EventJoin.js
const Evento = require('../models/Evento');

async function CreateEvent(data) {
  return await Evento.create(data);
}

async function GetEvents() {
  return await Evento.findAll();
}

async function GetEventById(id) {
  return await Evento.findByPk(id);
}

async function UpdateEvent(id, data) {
  const evento = await Evento.findByPk(id);
  if (!evento) {
    throw new Error('Evento no encontrado');
  }
  await evento.update(data);
  return evento;
}

async function DeleteEvent(id) {
  const evento = await Evento.findByPk(id);
  if (!evento) {
    throw new Error('Evento no encontrado');
  }
  await evento.destroy();
}

module.exports = {
  CreateEvent,
  GetEvents,
  GetEventById,
  UpdateEvent,
  DeleteEvent
};
