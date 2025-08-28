import * as http from "http";
import { app } from "./app";

if(!process.env.PORT){
    throw new Error("PORT is not defined in environment variables");
}

const port = parseInt(process.env.PORT);


const server = http.createServer(app);

server.listen(port, ()=>{
    console.log(`servidor iniciado na porta ${port}`);
});