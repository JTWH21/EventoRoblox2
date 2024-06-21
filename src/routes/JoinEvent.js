// routes/JoinEvent.js
const express = require('express');
const router = express.Router();
const EventJoinController = require('../controllers/EventJoin');

router.post('/', async (req, res) => {
  try {
    const nuevoEvento = await EventJoinController.CreateEvent(req.body);
    res.status(201).json(nuevoEvento);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.get('/', async (req, res) => {
  try {
    const eventos = await EventJoinController.GetEvents();
    res.status(200).json(eventos);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const evento = await EventJoinController.GetEventById(id);
    if (!evento) {
      return res.status(404).send('Evento no encontrado');
    }
    res.status(200).json(evento);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const updatedEvento = await EventJoinController.UpdateEvent(id, req.body);
    res.status(200).json(updatedEvento);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await EventJoinController.DeleteEvent(id);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
