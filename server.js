const express = require("express");

const app = express();

const router = express.Router();

const port = 9000

router.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.use("/asset", router)

app.listen (port, () => {
    console.log("El servidor esta escuchando correctamente en el puerto 9000...");
})
