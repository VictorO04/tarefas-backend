import express from "express";
import dotenv from "dotenv";
import statusRoutes from "./src/routes/statusRoutes.js";

const app = express();
app.use(express.json());

dotenv.config();
const serverPort = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Servidor aberto");   
});

app.use("/status", statusRoutes);

app.listen(serverPort, () => {
    console.log(`--- Servidor aberto em: http://localhost:${serverPort}`);
});