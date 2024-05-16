//import
// const express = require('express');
import express from "express";
import 'express-async-errors'
import dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors';
import morgan  from "morgan";
//file import
import connectDB from "./config/db.js";
//routes import
import testRoutes from './routes/testRoutes.js'
import authRoutes from './routes/authRoutes.js'
import errorMiddleware from "./middleware/errorMiddleware.js";
import userRoutes from './routes/testRoutes.js'

// Dot ENV congig
dotenv.config();

//mongodb connection
connectDB();

//rest object
const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

//routes
app.use('/api/v1/test', testRoutes)
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/user', userRoutes)

//validation midddleware
app.use(errorMiddleware);

//PORT
const PORT = process.env.PORT  || 8080

//Listen
app.listen(PORT,()=>{
    console.log(`Node Server Running in ${process.env.DEV_MODE} Mode  on PORT no ${PORT}`.bgCyan.white);
})