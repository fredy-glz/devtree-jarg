// const express = require('express'); // CommonJS
import express from "express"; // ESModule
import router from "./router";

const app = express();

// Leer datos de formularios
app.use(express.json());

app.use("/", router);

export default app;
