// routes/UsuarioEvento.js
const express = require('express');
const router = express.Router();
const userEventController = require('../controllers/UserEvent');

router.post('/', async (req, res) => {
  try {
    const nuevoUsuarioEvento = await userEventController.CreateUsuarioEvento(req.body);
    res.status(201).json(nuevoUsuarioEvento);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.get('/', async (req, res) => {
  try {
    const usuariosEvento = await userEventController.GetUsuariosEvento();
    res.status(200).json(usuariosEvento);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const usuarioEvento = await userEventController.GetUsuarioEventoById(id);
    if (!usuarioEvento) {
      return res.status(404).send('Usuario evento no encontrado');
    }
    res.status(200).json(usuarioEvento);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUsuarioEvento = await userEventController.UpdateUsuarioEvento(id, req.body);
    res.status(200).json(updatedUsuarioEvento);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await userEventController.DeleteUsuarioEvento(id);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
