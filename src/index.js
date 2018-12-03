import express from "express"
import "dotenv/config"
import UserRouter from './routes/user'
import mongoose from 'mongoose'

var connection = mongoose.createConnection('mongodb://localhost:27017/apirest-users');

const app =  express()

const { PORT } = process.env;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", UserRouter);

app.listen(PORT, () => {console.log("ciao")})
