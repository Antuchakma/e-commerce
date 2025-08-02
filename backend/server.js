import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.route.js';
import { connectDB } from './config/db.js';

dotenv.config();
const app = express();


app.use("/api/auth",authRoutes);


const PORT = process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log("server connected at port 5000")
    connectDB();
})

//mongodb+srv://antuchakma21:<HsIDA2qQm5tSYGYK>@cluster0.vxehio7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0