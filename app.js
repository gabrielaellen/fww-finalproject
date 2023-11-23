import express from "express";
import router from "./routes/filmesRoutes.js";
import db from "./db/db.js";

let app = express();

db.sync()
  .then(() => {
    console.log("Banco de dados sincronizado");
  })
  .catch((err) => {
    console.log("Erro ao sincronizar o banco: " + err.message);
  });

app.use(express.json());

app.use(router);

app.listen(5000, ()=>{
    console.log("Servidor executando na porta 5000!");
});
