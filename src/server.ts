// const express = require('express'); // CommonJS
import express from "express"; // ESModule
import "dotenv/config";
import cors from "cors";

import router from "./router";
import { connectDB } from "./config/db";
import { corsConfig } from "./config/cors";

connectDB();

const app = express();

// CORS
app.use(cors(corsConfig));

// Leer datos de formularios
app.use(express.json());

app.use("/", router);

export default app;
