import "reflect-metadata";
import express, { request, response } from 'express';
import "./database"
import { router } from "./routes";
const app = express();


//informa para o server que vamos utilizar o formato JSON
app.use(express.json());

app.use(router);

//start server
app.listen(3333,()=> console.log("Serves is start"));