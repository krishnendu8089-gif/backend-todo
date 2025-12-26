import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import todoRoutes from './routes/todoRoute.js'
import productRoutes from "./routes/productROutes.js"
//fro
dotenv.config();

mongoose.connect(process.env.MONGO_URL)
mongoose.connection.on('connected', () => console.log('DATABASE connected'));

const app=express()

app.use(express.json())
app.use(cors())
app.use(bodyParser.json());
app.use('/todos', todoRoutes);
app.use("/product",productRoutes)

app.get("/hello", (req,res)=>{res.send("hello")})

const PORT=process.env.PORT|| 8000;

app.listen(PORT,()=>console.log(`server running on ${PORT}`))
