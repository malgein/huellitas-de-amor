const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
