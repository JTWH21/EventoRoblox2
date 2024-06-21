const express = require("express");
const router = express.Router();
const RegisterEventController = require("../controllers/RegisterEvent");

router.get("/", async (req, res) => {
    res.send(await RegisterEventController.GetRegisterEvent())
})

router.post("/", async (req, res) => {
    const response = await RegisterEventController.CreateRegisterEvent(req.body);
    res.send(response);
})


router.delete("/", async (req, res) => {
    const response = await RegisterEventController.DeleteRegisterEvent(req.body.id);
    res.send(response);
})

module.exports = router