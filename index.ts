import express from "express";
import { config } from "dotenv";
import appController from "./src/app.controller.js";

config({ path: "./src/config/.env", quiet: true });
const app = express();
const port = process.env.PORT ?? 5000;

appController(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
