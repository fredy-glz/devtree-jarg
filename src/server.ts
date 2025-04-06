// const express = require('express'); // CommonJS
import express from "express"; // ESModule
import router from "./router";

const app = express();

app.use("/api", router);

export default app;
