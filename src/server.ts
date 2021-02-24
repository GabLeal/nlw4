import express, { request, response } from 'express';

const app = express();


app.get("/", (request, response)=>{
    return response.json({message: "ola mundo"});
});

app.post("/",(request, response)=>{
    return response.json({message : "salvei os dados"});
});

//start server
app.listen(3333,()=> console.log("Serves is start"));