import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './database/db.js'

dotenv.config(); // 👈 Carga las variables de entorno

const app = express();

const port=process.env.PORT ||8000;

app.use(cors());
app.use(express.json());

//Routes



//chequeo conexion a la db
const conectionDB = async () =>{
    try {
        await db.authenticate()
        console.log("conexion exitosa a la DB");
    } catch (error) {
        console.log(`conexion fallida error ${error}`);
        
    }
}

conectionDB();


app.listen (port, ()=>{
    console.log(`servidor corriendo en http://localhost:${port}`);
})