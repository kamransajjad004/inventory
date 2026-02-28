import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

async function dbConnect() {
    try {
        let uri = process.env.DB
    } catch (error) {
        console.log(error)
    }
}