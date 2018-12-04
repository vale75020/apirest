import express from "express"
import "dotenv/config"
import UserRouter from './routes/user'
import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/apirest-users', { useNewUrlParser: true });

const app =  express()

const { PORT } = process.env;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", UserRouter);

app.listen(PORT, () => {console.log(`ciao sur le port ${PORT}`)})
