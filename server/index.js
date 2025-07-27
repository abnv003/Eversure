import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mailRoutes from './routes/mail.js'

dotenv.config();
const app = express();  
const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use(cors());
app.use('/api', mailRoutes);

app.listen(PORT, (request, response)=>{
    console.log(`server running on ${PORT}`)
});