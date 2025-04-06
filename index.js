// const express = require('express'); // CommonJS
import express from "express"; // ESModule
const app = express();

// Routing
app.get("/", (req, res) => {
  res.send("Hola Mundo en Express");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("Servidor Funcionando en el puerto: ", PORT);
});
