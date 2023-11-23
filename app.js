import express from "express";
import router from "./routes/filmesRoutes.js";

let app = express();
app.use(express.json());

app.use(router);

app.listen(5000, ()=>{
    console.log("Servidor excutando na porta 5000!");
});