import express from "express";
import { studentRoute } from "./Routes/route.js";
import dotenv from "dotenv";

// configuring env
dotenv.config();

const PORT = process.env.Port;
const app = express();

// middleware
app.use(express.json());

// application midleware
app.use("/batch", studentRoute)

// port listen
app.listen(PORT,()=>console.log(`Port started with this ${PORT}`));