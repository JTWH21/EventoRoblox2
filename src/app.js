require("dotenv").config()

const express = require("express")
const port = process.env.APP_PORT
const app = express()

app.use(express.json());

const routes = require('./routes');

app.use("/autores", routes.AuthorRoutes)




app.listen(port, () => {
    console.log("Server Online!")
})