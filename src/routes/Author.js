const express = require("express");
const router = express.Router();
const AuthorController = require("../controllers/Author");

router.get("/", async (req, res) => {
    res.send(await AuthorController.GetAuthors())
})

router.post("/", async (req, res) => {
    const response = await AuthorController.CreateAuthor(req.body);
    res.send(response);
})


router.delete("/", async (req, res) => {
    const response = await AuthorController.DeleteAuthor(req.body.id);
    res.send(response);
})

module.exports = router