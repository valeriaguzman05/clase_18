const express = require("express");

const app = express();

const router = express.Router();

const port = 9000

app.use(express.static("public"))

app.listen (port, () => {
    console.log("El servidor esta escuchando correctamente en el puerto 9000...");
})