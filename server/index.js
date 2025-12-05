import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { ConnectDB } from "./DB/dataabase.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const MongoURL = process.env.MONGO_DB_URL
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json({urlencoded:true}))

ConnectDB(MongoURL)
app.listen(PORT, ()=>{
console.log(`Server is running on port: ${PORT}`);

})